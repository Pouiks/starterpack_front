import * as React from 'react';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';
import {Typography} from '@mui/material';
import { red } from '@mui/material/colors';




export default function ArticleCard(item) {


  return (
    <Link to={`/article/${item.id}`}>

      <Card sx={{ maxWidth: 305, marginTop: 5}} onClick={() => console.log(item.id)} >
      <CardActionArea>

        <CardMedia
          component="img"
          height="194"
          image="https://picsum.photos/400/200"
          alt="Image de l'article"
        />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {item.title}
            </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Description de l'article du blog
          </Typography>
        </CardContent>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[800] }} aria-label="recipe">
              A
            </Avatar>
          }

          title="Admin"
          subheader="September 14, 2016 | 5 min to read"
        />
        <CardActions disableSpacing>

        </CardActions>
        </CardActionArea>

      </Card>
    </Link>
  );
}
