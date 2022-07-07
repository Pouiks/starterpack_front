import * as React from 'react';
import ToolsCard from './ToolsCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Tools = () => {

    const toolsLink = [
        {
            name:"Rédiger un article",
            color:"#eb4034",
            description:"Afin de publier un article avec le formatage necessaire, l'outils est recommendé pour envoyer au bon format",
            link:"https://html-online.com/editor/"
        },
        {
            name:"Image libre de droit",
            color:"#d4cb28",
            description:"OBLIGATOIRE || Utilisation d'image libre de droit, exemple de site ou piocher (format paysage de preference)",
            link:"https://unsplash.com/"
        },
        {
            name:"Correcteur d'orthographe",
            color:"#2dcf73",
            description:"Afin de ne pas laisser trainer de fautes pour nos lecteurs, utiliser cette outils sans oublier de vous relire quand meme",
            link:"https://www.scribens.fr/"
        },
        {
            name:"Boite à idée & équipe",
            color:"#5aa6f2",
            description:"Améliorons le site ensemble, idée de fonctionnalités, d'article, n'importe quoi, partagez le avec tout le monde",
            link:"https://docs.google.com/spreadsheets/d/1MGsNmbejad6WtbWz4K93izW3DcjOlXfKe5zChoJdzUs/edit?usp=sharing"
        }
    ]

    return(
        <>
        <Container maxWidth="xl" sx={{mt:20}}>
            <Typography variant="h2" color="initial">
                Bienvenue sur la page des outils ! 
            </Typography>

            <Container maxWidth="xl" sx={{display: 'flex', justifyContent:'space-around', margin:"50px 0"}}>
            {
                toolsLink.map((item) => <ToolsCard item={item}/>)
            }
            </Container>



            <Typography variant="h5" color="initial">
                Si vous etes ici c'est que vous avez besoin ou etes curieux des outils mis à disposition pour vous aider au mieu à rédiger vos articles.

            </Typography>

            <Typography sx={{fontSize:"20px"}} color="initial">
                Quelques rappels de base:
                {
                    <ul>
                        <li style={{margin:' 20px 0'}}>Votre contenu doit etre pertinant et rédigé de facon pédagogique, mettez vous à la place d'un lecteur qui ne connait pas du tout votre sujet</li>
                        <li style={{margin:' 20px 0'}}>Pas de contenu engagé, le but n'est pas de connaitre votre avis, mais faire découvrir au lecteur et lui laisser la possibilité de se faire le sien</li>
                        <li style={{margin:' 20px 0'}}>Relecture croisée entre nous, rien de tel pour se sentir concerné et valider les articles avant de les publier (afin de les améliorer)</li>
                    </ul>
                }
                
            </Typography>
        </Container>



        </>
    )
}

export default Tools;