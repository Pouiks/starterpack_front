import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Grid, Divider } from "@mui/material";
import ArticleCardMini from '../ArticleCardMini';
import ArticleTemplate from '../ArticleTemplate';
import Spacer from '../../Spacer';
import AddComment from '../../AddComment';
import CategoryLoop from '../../CategoryLoop';
import { useParams } from 'react-router-dom'  ; 
import axios from 'axios';
import './selectedArticle.css';

const SelectedArticle = () => {

    const location = useLocation()
    const state = location.state
    const { id } = useParams();

    const url = "http://localhost:8080/article/";

    const [article, setArticle] = useState();
    const [refreshPage, setRefreshPage] = useState(false);

    const getArticle = async (id) => {
        const response = await axios.get(`${url}${id}`);
        setArticle(response.data.article);
    }
    const refresh = () => {
        setRefreshPage(!refreshPage);
        console.log("refreshed");
    }

    useEffect(() => {
        getArticle(id);
    }, [refreshPage])

    console.log("state", state);
    return(
        <Container maxWidth="xl" sx={{display:'flex', flexDirection:'column', bgcolor:"#F5FFFA"}}>

    
        <Grid container  spacing={1}>

            <Grid item xl={10} >
            <Container maxWidth="xl">

            <ArticleTemplate article={state}/>
            <Spacer taille={"50px"}/>
            <Divider />
            <Spacer taille={"50px"}/>

            <AddComment articleId={id} refresh={refresh}/>

            </Container>
            </Grid>
            <Grid item xl={2} sx={{  scrollable: true}}>
                <Container  sx={{display:"flex", flexDirection:"column", borderLeft:"1rem solid orange", height:"80vh", position:"fixed"}}>
                    <Typography variant="h4">Suggestions</Typography>
                    <Divider sx={{margin:"20px 0", width:"30%", color:"orange"}}/>

                    <Container sx={{maxHeight: '90vh', scrollBehavior: "smooth", overflow: "scroll"}}>
                    
                        <ArticleCardMini />
                        <ArticleCardMini />
                        <ArticleCardMini />
                        <ArticleCardMini />
                        <ArticleCardMini />
                    </Container>
                </Container>
            </Grid>
        </Grid>
        </Container>

    )
}

export default SelectedArticle;