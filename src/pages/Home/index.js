
  import React, { useEffect,useState } from 'react';
  import axios from 'axios';


import { Container, Typography } from "@mui/material";
import ArticleCard from '../../components/Article/ArticleCard';

function Home() {

  const url = "http://localhost:8080/articles";

    const [data, setData] = useState([]);

    const fetchData = async () => {
      const response = await axios.get(url);
      console.log("je lance une requete ARTICLES");

      console.log(response.data.articles);
      setData(response.data.articles);
    }


    useEffect(() => {
      console.log('init Home');

    }, []);

  return (
    <div>
    <Container>
        <Typography variant="h2" color="text.primary">
            Derniers ajouts
        </Typography>
    </Container>
    <Container direction="row" sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
      {data && 
        data.map((item) => <ArticleCard key={item.id} {...item}/>
      )}
    </Container>
    <Container>
        <Typography variant="h2" color="text.primary">
            Les mieux notés
        </Typography>
    </Container>
    <Container direction="row" sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ArticleCard title="Article 1" /> 
            <ArticleCard title="Article 2" /> 
            <ArticleCard title="Article 3" /> 
    </Container>
    <Container direction="row" sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <ArticleCard title="Article 1" /> 
            <ArticleCard title="Article 2" /> 
            <ArticleCard title="Article 3" /> 
    </Container>
    </div>
  );
}

export default Home;