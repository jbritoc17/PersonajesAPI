import React, { useState, useEffect } from "react";
import { fectchRickandMorty } from "../api/fetchRickandMorty";

const Home = () => {
  const [caracts, setcaract] = useState([]);

  useEffect(() => {
    const getCaract = async () => {
      const date = await fectchRickandMorty();
      console.log(date);
      setcaract(date);
    };
    getCaract();
  }, []);
  return (
    <div>
      {caracts ? (
        <ul>
          {caracts.map((caract) => (
            <li key={caract.id}>
             <div>  <img src={caract.image} alt="" />
             <p>{caract.name} - Status: {caract.status} </p>
             </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading </p>
      )}
    </div>
  );
};

export default Home;
