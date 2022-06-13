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


const AdminTable = () => {
    const url = "http://localhost:8080/articles";

    const [data, setData] = useState([]);

    useEffect(() => {
      console.log('inside useEffect');
      const fetchData = async () => {
        const response = await axios.get(url);
  
        console.log(response.data.articles);
        setData(response.data.articles);
      }
      fetchData();
  
     }, []);
return (
    <Container maxWidth="xl">
        <TableContainer component={Paper} sx={{boxShadow: true}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Titre</TableCell>
                <TableCell align="right">Contenu</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Likes</TableCell>
                <TableCell align="right">En ligne</TableCell>
                <TableCell align="right">Action</TableCell>
                <TableCell align="right">Consulter</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((item) => (
                <TableRow
                key={item.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {item.title}
                </TableCell>
                <TableCell align="right">{item.content}</TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.like}</TableCell>
                <TableCell align="right">{item.isOnline ? <DoneIcon sx={{color:"green"}} /> : <CancelIcon sx={{color:"red"}} onClick={() => console.log(`Je change l'état en ${!item.isOnline}`)}/>}</TableCell>
                <TableCell align="right">
                    <DeleteIcon sx={{color: "red"}} onClick={() => console.log(`delete article ${item.id}`)}/>
                </TableCell>
                <TableCell align="right">
                    <VisibilityIcon sx={{color: "blue"}} onClick={() => console.log(`Visionner article ${item.id}`)}/>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Container>
  );
}
export default AdminTable;