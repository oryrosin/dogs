import './BreedsCard.css'
import { useEffect, useState } from "react"
import axios from 'axios';
import React from 'react';
import Card from 'react-bootstrap/Card'

function BreedCard(props) {
    const {breed}=props;
    const [image,setImage]=useState("");
   

    // {"message":"https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_1575.jpg","status":"success"}
    useEffect(()=>{
        axios.get("https://dog.ceo/api/breed/"+breed+"/images/random")
        .then(res=> setImage(res.data.message));   
    },[]);

    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Text>
                {breed}
            </Card.Text>
            </Card.Body>
        </Card>
      
    
        
    //     <Card style={{ width: "200px" ,heigth: "300px" }}>
    //     <Card.Img variant="top" src={image} />
    //     <Card.Body>
    //       <Card.Title>{breed}</Card.Title>
    //     </Card.Body>
    //   </Card>
      );
    }    

    // return(
    //     <div>
    //         <p>{breed}</p>
    //         <img src={image} alt=""/>
    //     </div>
        
    // )

export default BreedCard