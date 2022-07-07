
import React, { useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Link } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AdminTable from './AdminTable';
import CreateArticle from './CreateArticle';
import ArticlePreview from './ArticlePreview';
import Tools from './Tools';

import AccordionComponent from './AccordionComponent';
import './admin.css';


function Admin () {

    const navigate = useNavigate();
    const articlePart = [
        {
            id: "2",
            title: "Article",
            subtitle:[
                {
                    title:"Creer un article",
                    link:"createArticle"
                },
                {
                    title:"Editer un article",
                    link:""
                },
                {
                    title:"Supprimer un article",
                    link:""
                },
            ],
            noIcon: false
        },
        {
            id: "3",
            title: "Utilisateur",
            subtitle:[
                {
                    title:"Creer un Utilisateur",
                    link:"createArticle"
                },
                {
                    title:"Editer un Utilisateur",
                    link:""
                },
                {
                    title:"Supprimer un Utilisateur",
                    link:""
                },
            ],
            noIcon: false    
        },
        {
            id: "4",
            title: "Categories",
            subtitle:[
                {
                    title:"Creer un Categories",
                    link:""
                },
                {
                    title:"Editer un Categories",
                    link:""
                },
                {
                    title:"Supprimer un Categories",
                    link:""
                },
            ],
            noIcon: false     
        },
        {
            id: "4",
            title: "Commentaires",
            subtitle:[
                {
                    title:"Creer un Commentaires",
                    link:""
                },
                {
                    title:"Editer un Commentaires",
                    link:""
                },
                {
                    title:"Supprimer un Commentaires",
                    link:""
                },
            ],
            noIcon: false
        },
        {
            id:"5",
            title:"Outils à disposition",
            subtitle:[
                {
                    title:"Tout les outils",
                    link:"tools"
                }
            ],
            noIcon: true
        }
    ]
    const [displayPage, setDisplayPage] = useState("");
    const [articleId, setArticleId] = useState("");

    function display(){
        switch(displayPage){
            case "":
                return <AdminTable sendData={getData}/>; 
            case "accueil":
                return <AdminTable sendData={getData}/>; 
            case "createArticle": 
                return <CreateArticle sendData={getData}/>;
            case "articlePreview": 
                return <ArticlePreview sendData={getData} />;
            case "tools":
                return <Tools sendData={getData}/>;
        }
    }
    function getData(val, id){
        setArticleId(id)
        setDisplayPage(val);

        
    }
    function getArticleId(val){
        console.log(val);

    }



    useEffect(() => {
    }, [displayPage])


    return (
        <Grid container spacing={2}>

            <Grid item xs={2} className="admin_body_leftbar">
            <Container>
                <Accordion  className="admin_body_accordion-first">
                    <Link onClick={() => setDisplayPage("accueil")} className="admin_body_accordion-first">Accueil</Link>
                </Accordion>
            </Container>
                {articlePart.map((item, index) => <AccordionComponent key={index} title={item.title} subtitle={item.subtitle}  sendData={getData}/>)}
            </Grid>
            <Grid item xs={10} className="admin_body_center">
                {display()}
            </Grid>
        </Grid>
    )
}

export default Admin;