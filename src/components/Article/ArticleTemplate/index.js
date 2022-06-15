import React, {useEffect, useState} from 'react';
import { Container, Typography, Chip } from "@mui/material";

const ArticleTemplate = () => {
    return(
        <Container>
            <Typography variant="h2" dangerouslySetInnerHTML={{__html: `<h1>Hello World! 👋</h1>`}}></Typography>
            <Container sx={{display:'flex', flexDirection:'row', verticalAlignment:'center'}}>
                <Chip label="Catégorie" color="primary"/>
                <Typography variant="body4" color="text.secondary" sx={{marginLeft: '10px'}}>September 14, 2016 | 5 min to read </Typography>
                <Typography variant="body4" color="text.secondary" sx={{marginLeft: '10px'}}> publié par Admin</Typography>
            </Container>

            <Typography variant="subtitle1">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"Il ny a personne qui naime la souffrance pour elle-même, qui ne la recherche et qui ne la veuille pour elle-même..."</Typography>
            <Typography variant="body1">
                15:18Partage
Il est trop tôt pour tirer des conclusions sur des crimes de guerre, selon une commission de l’ONU
La commission d’enquête de l’ONU sur l’Ukraine a recueilli de multiples allégations sur de possibles crimes de guerre commis par les forces russes dans ce pays, mais il est trop tôt pour tirer des conclusions, a dit mercredi son président. « A Boutcha et Irpin, la commission a reçu des informations concernant des meurtres arbitraires de civils, la destruction et le pillage de biens, ainsi que des attaques contre des infrastructures civiles, notamment des écoles », a déclaré le président de la commission, Erik Mose, lors d’une conférence de presse à Kiev.

Après le retrait de troupes russes, des centaines de corps de civils ont été découverts dans ces localités situées au nord-ouest de Kiev. Les autorités ukrainiennes ont accusé la Russie de crimes de guerre, ce que Moscou a nié. Dans les régions de Kharkiv et de Soumy (nord-est), pilonnées par l’armée russe, la commission a observé « la destruction de vastes zones urbaines, qui serait la conséquence de bombardements aériens, de bombardements ou de frappes de missiles contre des cibles civiles », a-t-il ajouté.

Mais « à ce stade, nous ne sommes pas en mesure de faire des constatations factuelles ou de nous prononcer sur des questions relatives à la qualification juridique des événements », a-t-il observé. « Toutefois, sous réserve d’une confirmation ultérieure, les informations reçues et les sites de destruction visités peuvent étayer les allégations selon lesquelles de graves violations du droit international des droits de l’homme et du droit international humanitaire, pouvant aller jusqu’à des crimes de guerre et des crimes contre l’humanité, ont été commises dans ces régions », a souligné M. Mose, qui s’exprimait à l’issue de travaux entamés le 7 juin, lors de cette première mission mandatée en mai par la commission internationale d’enquête créée par le Conseil des droits de l’homme de l’ONU.</Typography>

    <div dangerouslySetInnerHTML={{__html: `<h1>Hello World! 👋</h1>`}}></div >
        </Container>
    )
}

export default ArticleTemplate;