import styled from "styled-components";
import axios from 'axios'
import { useEffect } from "react";

export default function SearchTeacher(){

    useEffect(() => {
        const request = axios.get("http://localhost:4000/search-teacher");
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