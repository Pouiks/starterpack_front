import React, {useEffect, useState} from 'react';
import { Container, Typography, Grid } from "@mui/material";
import ArticleCardMini from '../ArticleCardMini';
import ArticleTemplate from '../ArticleTemplate';
import CategoryLoop from '../../CategoryLoop';
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
        <Container maxWidth="xl" sx={{display:'flex', flexDirection:'column', bgcolor:"#F5FFFA"}}>
            <Container maxWidth="md" className="selectedArticle_container" sx={{display: 'flex', flexDirection: 'column', marginLeft:0}}>
                <Typography variant="h4" sx={{marginBottom:'20px'}}>Découvrez par catégorie</Typography>
                <CategoryLoop />
            </Container>
    
        <Grid container spacing={2}>

            <Grid item xs={9} >
            <Container>

            <ArticleTemplate />

            </Container>
            </Grid>
            <Grid item xs={3} sx={{  scrollable: true}}>
                <Container maxWidth="xl" sx={{display:"flex", flexDirection:"column", borderLeft:"1rem solid orange"}}>
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