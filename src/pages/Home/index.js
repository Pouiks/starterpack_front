
  import React, { useEffect,useState, useContext } from 'react';
  import axios from 'axios';
  import {authContext} from '../../components/Contexts/authContext';
  import Footer from '../../components/Footer';
  import baseUrl from '../../config/baseUrl.js';

import { Container, Typography, Grid, Link } from "@mui/material";
import ArticleCard from '../../components/Article/ArticleCard';

function Home() {

  const {auth, setTokenToContext} = useContext(authContext);

  console.log("auth:" , auth);


    const [data, setData] = useState([]);
    const [mostLiked, setMostLiked] = useState([]);

    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/lastArticles`);
      console.log("je lance une requete ARTICLES");

      console.log("response.data.articles",response.data);
      setData(response.data);
    }

    const getMostLikedArticles = async() => {
      const response = await axios.get(`${baseUrl}/articles/mostLiked`);
      setMostLiked(response.data.bestArticles);
      console.log("LES PLUS LIKE: ",response.data);
    }


    useEffect(() => {
      console.log('init Home');
      fetchData();
      getMostLikedArticles();

    }, []);

  return (
    <Container maxWidth="xl" >
      <Container sx={{ display:{xs:"none", md:"none",lg:"block"}}}>
          <img width="100%" height="400px"src="/assets/images/baniereSP.png"/>
        </Container>
      <Container maxWidth="xl">
          <Typography variant="h2" color="text.primary" sx={{textDecoration: "none", fontSize:{xs: "30px", sm:"40px", md:"45px", xl: "45px"}}} >
              Derniers ajouts <Link href="/articles" sx={{textDecoration: "none", fontSize:{xs: "20px", sm:"12px", md:"25", xl: "30px"}} }>Voir tous</Link>
          </Typography>
      </Container >
      <Grid container maxWidth="xl" direction="row" sx={{display:"flex", verticalAlignment:"center", justifyContent: "center"}}>
        {data && 
          data.map((article) => 
          <Grid item xl={3}>
            <ArticleCard key={article.id} {...article} />
          </Grid>
        )}
      </Grid>
      <Container maxWidth="xl">
          <Typography variant="h2" color="text.primary" sx={{margin:"30px 0 0 0", fontSize:{xs: "30px", sm:"40px", md:"45px", xl: "45px"}}}>
              Les plus liké 
          </Typography>
      </Container>
      <Grid container maxWidth="xl" direction="row" sx={{display:"flex", verticalAlignment:"center", justifyContent: "center"}}>
        {
          mostLiked && 
            mostLiked.map((article) =>  
          <Grid item xl={3}>
            <ArticleCard key={article.id} {...article}/>
          </Grid>
          ) 
        }
      </Grid>
      <Footer />
    </Container>

  );
}

export default Home;