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




export default function ArticleCard(item) {


  return (
    <Link to={`/article/${item.id}`} >

      <Card sx={{ maxWidth: 305, marginTop: 5}} onClick={() => console.log(item.id)}>
      <CardActionArea>
        
        <CardMedia
          square
          component="img"
          height="194"
          src={item.image || "https://images.unsplash.com/photo-1655117041830-533c495ae7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTQ2MTU5NQ&ixlib=rb-1.2.1&q=80&w=1080"}
          alt="Image de l'article"
        />
          <CardContent>
          <Chip label={item.category_name} color="warning" sx={{color:"white"}}/>
            <Typography variant="body1" color="text.secondary">
              {item.title} 
            </Typography>
        </CardContent>
        <CardContent>
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
          subheader={`${item.created_at}| 5 min to read`}
        />
        <CardActions disableSpacing>

        </CardActions>
        </CardActionArea>

      </Card>
    </Link>
  );
}
