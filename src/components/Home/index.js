
  import React, { useEffect,useState } from 'react';
  import axios from 'axios';


import { Container, Typography } from "@mui/material";
import ArticleCard from '../ArticleCard';

function Home() {

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
    <div>
    <Container>
        <Typography variant="h2" color="text.primary">
            Derniers ajouts
        </Typography>
    </Container>
    <Container direction="row" sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
      {data && 
        data.map((item) => <ArticleCard key={item.id} title={item.title} content={item.content} description={item.description}/>
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