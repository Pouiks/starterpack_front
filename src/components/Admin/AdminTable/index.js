import React, { useEffect,useState, useParams } from 'react';
import { useLocation } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArticlePreview from './../ArticlePreview';
import axios from 'axios';


const AdminTable = ({sendData, getArticleId}) => {
    const baseUrl = "http://localhost:8080";

    const [refresh, setRefresh] = useState(false);

    const [data, setData] = useState([]);

    const [displayPreview, setDisplayPreview] = useState(false);

    const [thisItem, setThisItem ] = useState([]);


    function getPath(value, id){
        sendData(value, id);
    }




    const setOnline = async (id) => {
        try{
            await axios.put(`${baseUrl}/article/setOnline/${id}`);
            setRefresh(!refresh);
        }catch(error){
            console.log("error: ", error);
        }
    }

    const setOffline = async (id) => {
        try {
            await axios.put(`${baseUrl}/article/setOffline/${id}`);
            setRefresh(!refresh);
        } catch(error){
            console.log("error: ", error);
        }
    }
    const fetchData = async () => {
        const response = await axios.get(`${baseUrl}/articles`);
  
        console.log("response.data.articles",response.data);
        setData(response.data);
      }
    useEffect(() => {
      console.log('inside useEffect');

      fetchData();
  
     }, [refresh]);

return (
    <Container maxWidth="xl">
        <TableContainer component={Paper} sx={{boxShadow: true}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="center">id</TableCell>
                <TableCell align="center">Titre</TableCell>
                <TableCell align="center">Contenu</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Likes</TableCell>
                <TableCell align="center">En ligne</TableCell>
                <TableCell align="center">Action</TableCell>
                <TableCell align="center">Consulter</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((item) => (
                <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="center" component="th" scope="row">
                    {item.id}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                    {item.title}
                </TableCell>
                <TableCell align="center">{item.content}</TableCell>
                <TableCell align="center">{item.description}</TableCell>
                <TableCell align="center">{item.like}</TableCell>
                <TableCell sx={{ cursor: "grab"}} align="center" onClick={() => item.is_online ? setOffline(item.id) : setOnline(item.id)}>
                    {item.is_online ? <DoneIcon sx={{color:"green"}} /> : <CancelIcon sx={{color:"red"}}/> }
                </TableCell>
                <TableCell align="center">
                    <DeleteIcon sx={{color: "red",  cursor: "grab"}} onClick={() => console.log(`delete article ${item.id}`)}/>
                </TableCell>
                <TableCell align="center">
                    
                    <VisibilityIcon 
                        sx={{color: "blue", cursor: "grab"}} 
                        onClick={()=>{
                            setThisItem(item);
                            setDisplayPreview(!displayPreview);
                            
                        }
                    } />
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        { displayPreview &&
            <ArticlePreview id={thisItem.id} title={thisItem.title} description={thisItem.description} content={thisItem.content}/>

        }
    </Container>
  );
}
export default AdminTable;