import { useEffect, useState } from "react"
import axios from 'axios';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function BreedCard(props) {
    const {breed}=props;
    const [image,setImage]=useState("");
    const useStyles = makeStyles({root: {maxWidth: 300},media: {height: 350}});

    // {"message":"https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_1575.jpg","status":"success"}
    useEffect(()=>{
        axios.get("https://dog.ceo/api/breed/"+breed+"/images/random")
        .then(res=> setImage(res.data.message));   
    },[]);

    const classes = useStyles();
    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {breed}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }    

    // return(
    //     <div>
    //         <p>{breed}</p>
    //         <img src={image} alt=""/>
    //     </div>
        
    // )

export default BreedCard