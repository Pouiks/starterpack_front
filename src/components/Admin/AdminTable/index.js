import React, { useEffect,useState } from 'react';
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
import axios from 'axios';


const AdminTable = ({sendData, sendArticle}) => {
    const baseUrl = "http://localhost:8080";

    const [refresh, setRefresh] = useState(false);

    const [data, setData] = useState([]);


    function getPath(value){
        sendData(value);
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
  
        console.log("response.data.articles",response.data.articles);
        setData(response.data.articles);
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
            {/* <TableBody>
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
                            getPath("articlePreview");
                            sendArticle(item.id);
                        }
                    } />
                </TableCell>
                </TableRow>
            ))}
            </TableBody> */}
        </Table>
        </TableContainer>
    </Container>
  );
}
export default AdminTable;