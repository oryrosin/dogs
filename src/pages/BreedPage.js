import { useEffect, useState } from "react"
import axios from 'axios';
import BreedCard from "../BreedCard";



function BreedPage() {
    const [breedsList,setBreedsList]= useState([]);
    

    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/list/all")
        .then(response => setBreedsList(Object.keys(response.data.message)));
        // gives a list of strings with 94 dog's-breeds (breedsList)
        },[])
    
    const dogCards= breedsList.map((breed, index)=> <BreedCard breed={breed} key={index}/>)
    
    
        

        return(
            <div className="container">
                {dogCards}
            </div>
        
    )
    
}
export default BreedPage;