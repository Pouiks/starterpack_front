import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ArticleCardMini = ( { content, parent } ) => {
    console.log("JE SUSI ITEM", content);
    return (
        <>
        {
            content.id != parent ?
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
            :
            <Typography>Aucune suggestions</Typography>
        }



</>
    );


}

export default ArticleCardMini;





