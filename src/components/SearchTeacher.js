import styled from "styled-components";
import axios from 'axios'
import { useEffect, useState } from "react";

export default function SearchTeacher(){
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        const request = axios.get("http://localhost:4000/search-teacher");
        request.then((response) => {console.log(response.data); setTeachers(response.data)});
        request.catch(errors)

        function errors(error){
            
        }
    },[])

    return(
        <>
            <Header>
                <p>Nessa página tem todos os professores, escolhe um que mostraremos as provas que temos</p>
            </Header>

            <List>
                {teachers.map((teacher) => {
                    return (
                    <EachOption id={teacher.id}>
                        {teacher.name}
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