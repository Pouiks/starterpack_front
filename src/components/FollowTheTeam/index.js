import React, {useEffect, useState} from "react";
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import FacebookIcon from '@mui/icons-material/Facebook';

import './followtheTeam.css'




const FollowTheTeam = () => {


    return(
        <>
            <Container  sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography variant="h3" color="initial" sx={{mb: 5}}>
                Tu veux rejoindre l'équipe ? On est toujours à la recherche de personne pour contribuer au site !
              </Typography>
              <img src="/assets/images/help.jpg" height="400" width="800" alt="recherche de collaborateur" style={{margin: '0 auto'}}/>
              <Typography variant="h4"  sx={{mb: 5, mt:5, color:'orange', fontWeight:'bold'}}>
                Il te suffit de nous rejoindre sur la page facebook, <strike>ou directement nous adresser un message via le formulaire présent ci dessous !  </strike> (bientot dispo)
              </Typography>
              <Button href="https://www.facebook.com/MonStarterPack" variant="contained" endIcon={<FacebookIcon />} sx={{ width:"300px", margin:'0 auto', mb: 5}}>Rejoindre la page Facebook</Button>

              <Typography variant="h4" color="initial" sx={{mb: 5}}>
                Nous avons quelques critères néanmoins plutot important !
              </Typography>
              <Typography variant="h5" color="initial" sx={{mb: 5}}>
                Les rédacteurs/trices ne sont pas rémunéré, mais sont généralement attiré par le principe de partage avec la communauté ! Vous avez la possibilité d'intégré un projet open-source, ouvert a tous, et plus particulièrement aux curieux ! 
              </Typography>
              <Typography variant="h5" color="initial" sx={{mb: 5}}>
                Pour résumer les missions attendus: 
                <ol>
                    <li class="List_attente">Faire preuve de pédagogie, les lecteurs sont parfois novice dans le sujet et sont là pour apprendre !</li>
                    <li className="List_attente">Pas de prise de position. Ton avis compte, mais l'article a pour but de faire démarrer au mieu la personne dans le domaine concerné !</li>
                    <li className="List_attente">Un article pertinant, relu et vérifié ! (on site ses sources)</li>
                    <li className="List_attente">N'hésite pas à proposer des sujets totalement hors du cadre, plus ça sort de l'ordinaire plus ca pourrait interesser nos lecteurs curieux !</li>
                    <li>Pour finir, une envie de partager ! Une page sera dédié à chaque auteur pour raconter son parcours et sa motivation à partager et écrire <span style={{color: "grey", fontSize: "20px"}}>(bien pratique pour se faire un peu de pub )</span></li>
                </ol>
              </Typography>


            </Container>
        </>
    )
}

export default FollowTheTeam; 