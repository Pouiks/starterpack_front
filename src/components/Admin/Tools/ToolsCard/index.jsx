import * as React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './toolsCard.css';

const ToolsCard = ({ item }) => {

const navigate = useNavigate();

const goToUrl = (value) => {
    navigate(value)
}
    return(
        <>
        <Card sx={{ backgroundColor: `${item.color}`, margin: '0 20px', borderRadius: '10px', cursor: 'pointer', textDecoration:"none", padding: '5px 10px'}}>
            <a className="tools_link" href={item.link} target="_blank">
                <CardContent>
                    <Typography variant="h5" color="white">
                    {item.name}
                    </Typography>

                    <Typography sx={{ mb: 1.5,height:"100px"}} color="text.secondary">
                    {item.description}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontWeight: 'bold', fontSize:20 }} color="white">
                    Acceder au service
                    </Typography>

                </CardContent>
            </a>
        </Card>
        </>
    )
}

export default ToolsCard;