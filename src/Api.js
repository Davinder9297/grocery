import { useEffect } from "react";

export default function Api(){

const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e6c5006912mshfad3f9c37328760p10c4d4jsn2023c992cb2c',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

useEffect(() => {
    const Fetchdata=async()=>{
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    Fetchdata()
}, [])

    return(<>
    </>)
}