import React, {useEffect, useState, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import baseUrl from "../../../config/baseUrl.js";
import { authContext } from '../../Contexts/authContext';
import { Container, Typography, Grid, Divider } from "@mui/material";
import ArticleCardMini from '../ArticleCardMini';
import ArticleTemplate from '../ArticleTemplate';
import AuthorCard from '../../AuthorCard';
import Spacer from '../../Spacer';
import AddComment from '../../AddComment';
import CategoryLoop from '../../CategoryLoop';
import { useParams } from 'react-router-dom'  ; 
import axios from 'axios';
import './selectedArticle.css';

const SelectedArticle = () => {
    const { auth, resetContextData } = useContext(authContext);

    const location = useLocation()
    const state = location.state
    const { id } = useParams();

    const url = `${baseUrl}/article/`;

    const [article, setArticle] = useState();
    const [suggestions, setSuggestions] = useState();
    const [refreshPage, setRefreshPage] = useState(false);

    const getArticle = async (id) => {
        const response = await axios.get(`${url}${id}`);
        setArticle(response.data.article);
    }

    const articleSuggestions = async (categoryId) => {
        const response = await axios.get(`${baseUrl}/articlesByCategory/${categoryId}`);
        setSuggestions(response.data.articles);
        console.log(response.data);
    }
    const refresh = () => {
        setRefreshPage(!refreshPage);
        console.log("refreshed");
    }

    useEffect(() => {
        getArticle(id);
        articleSuggestions(state.categoryId);
    }, [refreshPage])

    return(
        <Container maxWidth="xl" sx={{display:'flex', flexDirection:'column', bgcolor:"#F5FFFA"}}>

    
        <Grid container  spacing={2}>

            <Grid item xl={11} >
            <Container maxWidth="xl">

            <ArticleTemplate article={state}/>
            <Spacer taille={"50px"}/>
            <Divider />
            <Spacer taille={"50px"}/>
            { auth.user && 

            <AddComment articleId={id} refresh={refresh}/>
            }
            <AuthorCard />
            </Container>
            </Grid>
            <Grid item xl={1} sx={{  scrollable: true}}>
                <Container  sx={{display:"flex", flexDirection:"column", borderLeft:"1rem solid orange", height:"80vh", position:"fixed"}}>
                    <Typography variant="h4">Suggestions</Typography>
                    <Divider sx={{margin:"20px 0", width:"30%", color:"orange"}}/>

                    <Container sx={{maxHeight: '90vh', scrollBehavior: "smooth", overflow: "scroll"}}>
                    
                    {
                        suggestions && 
                        suggestions.map((item) => (
                            
                            <ArticleCardMini content={item} key={item.id} parent={state.articleId}/>
                        ) )
                    }
                        

                    </Container>
                </Container>
            </Grid>
        </Grid>
        </Container>

    )
}

export default SelectedArticle;