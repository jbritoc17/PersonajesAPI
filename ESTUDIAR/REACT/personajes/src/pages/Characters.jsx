import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../api/fetchCharacters"
import Button from "../components/Button"

const Characters = () => {
  const [caracters, setCaracters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      console.log(data)
      setCaracters(data);
    };
    getCharacters();
  }, []);

  return (
    <div>
     {caracters ? (
        <ul> 
            {caracters.map((caracter)=>(
                <li key={caracter.id}><img src={caracter.image} alt="" height="200px" width="200px" />

                <div>{caracter.firstName} {caracter.age}</div>
                <Button text="Editar" onClick ={ () => alert("Boton Editar")}/>
                <Button text="Eliminar" onClick ={ () => alert("Boton Eliminar")}/>
                </li>
            ))}
        </ul>
     ) : (
        <p>Loading caracters</p>
     ) }
    </div>
  );
};

export default Characters;
