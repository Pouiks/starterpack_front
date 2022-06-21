import React, {useState, useEffect} from "react";
import { Container, Typography, Grid, Link } from "@mui/material";
import ArticleCard from "../../components/Article/ArticleCard"
import CategoryLoop from "../../components/CategoryLoop"

import axios from "axios";

const Articles = () => {
    const [data, setData] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState();

    const fetchData = async () => {
        const URL = 'http://localhost:8080/articles';
        const response = await axios.get(URL);
        setData(response.data.articles);
        console.log("FETCH DES DATA", response.data.articles)
        console.log("data:", data);

    }

    const getName = (value) => {
        console.log("value",value);
        const result = data.filter(article => article.category_name === value);
        setData(result);
        console.log("result: ",result);
        console.log("filteredCategory: ",filteredCategory);
    } 



    useEffect(() => {
        fetchData();
    }, [])
    
    return(
        <Container maxWidth="xl" sx={{alignItems:"center"}}>
            <Container>
                <CategoryLoop getName={getName}/>
            </Container>
            <Container>
                <Typography variant="h2" color="text.primary">
                    Tout les articles
                </Typography>
            </Container>
            <Grid container maxWidth="xl" direction="row" >
            {data && 
                data.map((article) => 
                <Grid item xl={3}>
                <ArticleCard key={article.id} {...article} />
                </Grid>
            )}
            </Grid>
        </Container>
    )
}

export default Articles;