import React, {useState, useEffect, useMemo} from "react";
import baseUrl from "../../config/baseUrl.js";
import { Container, Typography, Grid, Link } from "@mui/material";
import ArticleCard from "../../components/Article/ArticleCard"
import CategoryLoop from "../../components/CategoryLoop"

import axios from "axios";

const Articles = () => {
    const [data, setData] = useState();
    const [filteredCategory, setFilteredCategory] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [refresh, setRefresh] = useState(false);

    const fetchData = async () => {
        const URL = `${baseUrl}/articles`;
        const response = await axios.get(URL);
  
        setData(response.data);
        setFilteredCategory(response.data);
        }

// Je recupere le category_name au clic sur la catégorie
    const getName = (value) => {
        setSelectedCategory(value)
    } 

    const refreshPage = () => {
        setRefresh(!refresh);
        setSelectedCategory();
        console.log(refresh);
    };
    function getFilteredList() {
        // Si pas de filtre return tout les articles
        if (!filteredCategory) {
          return data;
        }
        if(!selectedCategory) {
            return data;
        }
        return data.filter((item) => item.category_name === selectedCategory);
      }

    const filteredList = useMemo(getFilteredList, [selectedCategory, data]);

    useEffect( () => {
        fetchData();
    }, [refresh])
    
    return(
        <Container maxWidth="xl" sx={{alignItems:"center", mb:"100px"}}>
            <Container maxWidth="xl">
                <CategoryLoop getName={getName} refreshPage={refreshPage}/>
            </Container>
            <Container>
                <Typography variant="h2" color="text.primary">
                    Tout les articles
                </Typography>
            </Container>
            <Grid container maxWidth="xl" direction="row" >
            { filteredList &&
                filteredList.map((article) => 
                <Grid item xl={3} key={article.id}>
                <ArticleCard key={article.id} {...article} />
                </Grid>
            )}
            </Grid>
        </Container>
    )
}

export default Articles;