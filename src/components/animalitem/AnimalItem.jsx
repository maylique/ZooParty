const AnimalItem = ({emoji, name, species, habitat, diet, lifespan, funfact1, funfact2, funfact3}) => {
    return ( 
    <>
    <div>
        <h1> {emoji} </h1>
        <h2> {name} </h2>
        <h3> {species} </h3>
        <h3> {habitat} </h3>
        <h3> {diet} </h3>
        <p> {lifespan} </p>
        <div>
            <p> {funfact1} </p>
            <p> {funfact2} </p>
            <p> {funfact3} </p>
        </div>
    </div>
    </> 
    );
}
 
export default AnimalItem;