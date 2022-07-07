import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';

const ArticleCardMini = ( { content, parent } ) => {
    console.log("JE SUSI ITEM", content);
    return (
        <>
        {
            content.id != parent ?
            <Link to={`/article/${content.id}`} state= {{articleId: content.id ,title: content.title,categoryId: content.category_id, category: content.category_name, like: content.like, author: content.author, description: content.description, content: content.content}} className="articleCard_link">

            <Card sx={{ maxWidth: 345, margin: '20px 0' }} >
            <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={content.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {content.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content.description}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            </Link>
            :
            <Typography>Aucune suggestions</Typography>
        }



</>
    );


}

export default ArticleCardMini;





