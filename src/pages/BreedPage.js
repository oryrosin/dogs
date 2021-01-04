import { useEffect, useState } from "react"
import axios from 'axios';
import BreedCard from "../BreedCard";
import { Container, Form, Row } from "react-bootstrap";
import './BreedPage.css';


function BreedPage() {
    const [breedsList,setBreedsList]= useState([]);
    const [filter, setFilter]= useState("");

    useEffect(()=>{
        axios.get("https://dog.ceo/api/breeds/list/all")
        .then(response => setBreedsList(Object.keys(response.data.message)));
        // gives a list of strings with 94 dog's-breeds (breedsList)
        },[])
    // turn all the list of breeds into a list of componnents that gets prop of thier breed name:
    let breedCard= breedsList.map((breed, index)=> <BreedCard breed={breed} key={index}/>)
    
    // filtering for user's filter:
    if (breedsList !== []) {
        const filteredResult = breedsList.filter(item => item.includes(filter.toLowerCase()));
        breedCard= filteredResult.map(breed=> <BreedCard breed={breed}/>)
        }
 
        

        return(
            <Container>
                <div className="form-filter">
                    <input type="text" placeholder="Filter Dogs..." id="filter" value={filter} 
                        onChange={(e)=> setFilter(e.target.value)}/>
                </div>
                    {breedCard}
                
                
            </Container>
        
    )
    
}
export default BreedPage