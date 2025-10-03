import {useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import axios from 'axios'



function Welcome() {
     const [data,setData]=useState("");
    useEffect(() =>{
        const controller = new AbortController();
        const signal = controller.signal;
        // const theme = useContext(ThemeContext);
        // const Welcome = `${StyleS.Welcome} ${theme === 'dark' ? StyleS.dark : ''}`;


        async function fetchData(){

            let results = await axios.get('https://api.chucknorris.io/jokes/random',{signal});
            // let parsedResponse = await results.json();
             setData (results.data.value);


             
        return () => {
            controller.abort();
        }
        }

        fetchData();


    },[]);


    return(
        <>
        <div >
            <h1>Welcome</h1>
        <p>{data}</p>
        </div>
        </>
    )
}
export default Welcome;