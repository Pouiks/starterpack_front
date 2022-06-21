
  import React, { useEffect,useState } from 'react';
  import axios from 'axios';


import { Container, Typography, Grid, Link } from "@mui/material";
import ArticleCard from '../../components/Article/ArticleCard';

function Home() {

  const url = "http://localhost:8080/lastArticles";

    const [data, setData] = useState([]);

    const fetchData = async () => {
      const response = await axios.get(url);
      console.log("je lance une requete ARTICLES");

      console.log("response.data.articles",response.data);
      setData(response.data);
    }


    useEffect(() => {
      console.log('init Home');
      fetchData();

    }, []);

  return (
    <Container maxWidth="xl" sx={{alignItems:"center"}}>
      <Container >
          <img width="100%" height="400px"src="/assets/images/SPaccueil.png"/>
        </Container>
      <Container>
          <Typography variant="h2" color="text.primary">
              Derniers ajouts <Link href="/articles" sx={{textDecoration: "none", fontSize:20}}>Voir tous</Link>
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
      <Container>
          <Typography variant="h2" color="text.primary">
              Les mieux notés
          </Typography>
      </Container>
      <Grid container maxWidth="xl" direction="row" >
          <Grid item xl={4}>
              <ArticleCard title="Article 1" /> 
          </Grid>
          <Grid item xl={4}>
              <ArticleCard title="Article 1" /> 
          </Grid>
          <Grid item xl={4}>
              <ArticleCard title="Article 1" /> 
          </Grid>
          <Grid item xl={4}>
              <ArticleCard title="Article 1" /> 
          </Grid>
          <Grid item xl={4}>
              <ArticleCard title="Article 1" /> 
          </Grid>
          <Grid item xl={4}>
              <ArticleCard title="Article 1" /> 
          </Grid>
      </Grid>

    </Container>
  );
}

export default Home;