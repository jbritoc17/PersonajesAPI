export async function fectchRickandMorty (){
    try {
      const  resp= await fetch("https://rickandmortyapi.com/api/character");

     const   resul= await resp.json();

        return resul.results
    } catch (error) {
        console.log(error)
    }

}
