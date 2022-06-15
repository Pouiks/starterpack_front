import React, {useEffect, useState} from 'react';
import { Container, Typography, Grid } from "@mui/material";
import ArticleCard from '../ArticleCard';
import ArticleCardMini from '../ArticleCardMini';
import ArticleTemplate from '../ArticleTemplate';
import { useParams } from 'react-router-dom'  ; 
import axios from 'axios';
import './selectedArticle.css';

const SelectedArticle = () => {
    const { id } = useParams();

    const url = "http://localhost:8080/article/";

    const [article, setArticle] = useState();

    const getArticle = async (id) => {
        const response = await axios.get(`${url}${id}`);
        console.log("je fais la requete: ",response.data);
        console.log("je lance une requete ARTICLES");

        setArticle(response.data);
    }


    useEffect(() => {
        console.log('init SelectedArticle');
    }, [])


    return(
        <Container maxWidth="xxl" >
            <Container maxWidth="lg" className="selectedArticle_container">
                <p>SELECTION DES CATEGORIE</p>
            </Container>
    
        <Grid container spacing={2}>

            <Grid item xs={10} >
            <Container>

            <ArticleTemplate />

            </Container>
            </Grid>
            <Grid item xs={2} sx={{  scrollable: true}}>
                <Container sx={{display:"flex", flexDirection:"column", borderLeft:"1rem solid orange"}}>
                    <Typography variant="h4">Suggestions</Typography>
                    <ArticleCardMini />
                    <ArticleCardMini />
                    <ArticleCardMini />
                    <ArticleCardMini />
                    <ArticleCardMini />
                </Container>
            </Grid>
        </Grid>
        </Container>

    )
}

export default SelectedArticle;