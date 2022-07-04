import React, {useEffect}  from 'react';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';



import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';
import {Typography, Chip} from '@mui/material';
import { red } from '@mui/material/colors';
import './articleCard.css';




export default function ArticleCard(item) {


useEffect( () => {}, [item])

console.log(item.created_at);

const getDate = () => {
  if(item.created_at){
    const date = item.created_at.substring(0, 10);
    const dateSplit = date.split("-");
    console.log(dateSplit);
    const finalDate = dateSplit[2] + '/' + dateSplit[1] + '/' +  dateSplit[0];
    return finalDate;
  }
}
  return (
    <Link to={`/article/${item.id}`} state= {{title: item.title, description: item.description, content: item.content}} className="articleCard_link">

      <Card sx={{ maxWidth: 305, maxHeight:550, minHeight:500, marginTop: 5, boxShadow:4}} onClick={() => console.log(item.id)}>
      <CardActionArea>
        
        <CardMedia
          component="img"
          height="194"
          src={item.image || "https://images.unsplash.com/photo-1655117041830-533c495ae7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ2MTU5NQ&ixlib=rb-1.2.1&q=80&w=1080"}
          alt="Image de l'article"
        />
          <CardContent sx={{minHeight:50, maxHeight:110}}>
          <Chip label={item.category_name}  sx={{color:"white", bgcolor:"#F57F5B"}}/>
            <Typography variant="h6" color="text.secondary">
              {item.title} 
            </Typography>
        </CardContent>
        <CardContent sx={{minHeight:70, maxHeight:110}}>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[800] }} aria-label="recipe">
              A
            </Avatar>
          }

          title="Admin"
          subheader={`${getDate()} | 5 min to read`}
        />
        <CardActions disableSpacing>

        </CardActions>
        </CardActionArea>

      </Card>
    </Link>
  );
}
