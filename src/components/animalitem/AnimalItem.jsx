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
            <ul>
                <li>{funfact1}</li>
                <li>{funfact2}</li>
                <li>{funfact3}</li>
            </ul>
        </div>
    </div>
    </> 
    );
}
 
export default AnimalItem;