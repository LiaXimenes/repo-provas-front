import styled from "styled-components";
import axios from 'axios'
import { useEffect, useState } from "react";

export default function SearchSubject(){
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        const request = axios.get("http://localhost:4000/search-subject");
        request.then((response) => {console.log(response.data); setSubjects(response.data)});
        request.catch(errors)

        function errors(error){
            
        }
    },[])


    return(
        <>
            <Header>
                <p>Nessa página temos todas as disciplinas, escolhe uma que mostraremos as provas que temos</p>
            </Header>

            <List>

                {subjects.map((subject) => {
                    return(
                        <EachOption id={subject.id}>
                            {subject.name}
                        </EachOption>
                    )
                })}
            </List>
        </>
    )
}

const Header = styled.div`
    width: 100%;
    height: 100px;
    background: #171717;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        color: white;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 20px;
        font-weight: bold;
    }
` ;

const List = styled.ul`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

`;

const EachOption = styled.li` 
    :hover{
        cursor: pointer;
    }
` ;
