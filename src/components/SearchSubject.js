import styled from "styled-components";
import axios from 'axios'
import { useEffect } from "react";

export default function SearchSubject(){

    useEffect(() => {
        const request = axios.get("http://localhost:4000/search-subject");
        request.then((response) => console.log(response.data));
        request.catch(errors)

        function errors(error){
            
        }
    },[])


    return(
        <>
            <p>Oii</p>
        </>
    )
}