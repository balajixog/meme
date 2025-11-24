import Header from "./components/Header";
import { useState ,useEffect} from "react";
import Main from "./components/Main";
import "./index.css"
export default function App(props){
    // const[starwardata,setStarwardata]=useState(null)
    //  useEffect(() => {
    // fetch("https://swapi.py4e.com/api/people/1")
    // .then(res => res.json())
    // .then(data => setStarwardata(data))
    //   .catch(err => console.error(err));
    // }, []);
    return(
        // <div>
        //     <pre>{JSON.stringify(starwardata,null,2)}</pre>
        // </div>
        <>
        <Header/>
        <Main/>
        </>
    )
}