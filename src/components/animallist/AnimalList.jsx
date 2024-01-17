import animals from "../../assets/data/data";
import AnimalItem from "../animalitem/AnimalItem";

const AnimalList = ({animals}) => {
    return ( 
    <>

    {animals.map((data, index)=>{
        return (
            <section key = {index}>
        <AnimalItem 
        emoji = {data.emoji}
        name = {data.name}
        species = {data.species}
        habitat = {data.habitat}
        diet = {data.diet}
        lifespan = {data.lifespan}
        funfact1 = {data.funFacts[0]}
        funfact2 = {data.funFacts[1]}
        funfact3 = {data.funFacts[2]}
        />
        </section>
        )
    }
    )}
    </>
    );
}
 
export default AnimalList;