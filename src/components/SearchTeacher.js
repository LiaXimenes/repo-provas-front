import styled from "styled-components";
import axios from 'axios'
import { useEffect, useState } from "react";

export default function SearchTeacher(){
    const [teachers, setTeachers] = useState([]);
    const [tests, setTests] = useState([]);
    const [p1, setP1] = useState([]);
    const [p2, setP2] = useState([]);
    const [p3, setP3]= useState([]);
    const [segChamada, setSegChamada] = useState([]);
    const [outras, setOutras] = useState([]);

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/search-test/teacher`);
        request.then((response) => {console.log(response.data); setTeachers(response.data)});
        request.catch(errors)

        function errors(error){
            
        }
    },[])

    useEffect(() => {
        for(let i = 0; i < tests.length; i++){
            if(tests[i].categoryId === 1){
                setP1(p1 => [...p1, tests[i]]) 
            } else if(tests[i].categoryId === 2){
                setP2(p2 => [...p2, tests[i]]) 
            } else if(tests[i].categoryId === 3){
                setP3(p3 => [...p3, tests[i]]) 
            } else if(tests[i].categoryId === 4){
                setSegChamada(segChamada => [...segChamada, tests[i]]) 
            } else{setOutras(outras => [...outras, tests[i]])}
        }
    }, [tests])

    function findTestByTeacherId(id){
        setP1([]);
        setP2([]);
        setP3([]);
        setSegChamada([]);
        setOutras([]);

        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/search-test/teacher/${id}`);
        request.then((response) => {setTests(response.data)});
        request.catch(errors)

        function errors(error){

        }
    }

    function openTest(url){
        console.log(url)
        const newWindow = window.open(url, '_blank')
        if (newWindow) newWindow.opener = null
    }

    return(
        <>
            <Header>
                <p>Nessa página tem todos os professores, escolhe um que mostraremos as provas que temos</p>
            </Header>

            <Body>
                <List>
                    {teachers.map((teacher) => {
                        return (
                        <EachOption id={teacher.id} onClick={() => findTestByTeacherId(teacher.id)}>
                            {teacher.name}
                        </EachOption>
                        )
                    })}
                </List>

                {tests.length === 0 ? "" : 
                    <List>
                        {p1.length === 0 ? <p>Não temos nenhuma P1 :(</p> : 
                            <Category>
                                <p>P1</p>
                                {p1.map((test) => {
                                return(
                                    <EachOption id={test.id} onClick={() => openTest(test.link)} >
                                    Prova: {test.name}
                                    </EachOption>
                                )
                                })}
                            </Category>
                        }

                        {p2.length === 0 ? <p>Não temos nenhuma P2 :(</p> : 
                            <Category>
                                <p>P2</p>
                                {p2.map((test) => {
                                return(
                                    <EachOption id={test.id} onClick={() => openTest(test.link)}>
                                    Prova: {test.name}
                                    </EachOption>
                                )
                                })}
                            </Category>
                        }

                        {p3.length === 0 ? <p>Não temos nenhuma P3 :(</p> : 
                            <Category>
                                <p>P3</p>
                                {p3.map((test) => {
                                return(
                                    <EachOption id={test.id} onClick={() => openTest(test.link)}>
                                    Prova: {test.name}
                                    </EachOption>
                                )
                                })}
                            </Category>
                        }

                        {segChamada.length === 0 ? "" : 
                            <Category>
                                <p>Segunda Chamada</p>
                                {segChamada.map((test) => {
                                return(
                                    <EachOption id={test.id} onClick={() => openTest(test.link)}>
                                    Prova: {test.name}
                                    </EachOption>
                                )
                                })}
                            </Category>
                        }

                        {outras.length === 0 ? "" : 
                            <Category>
                                <p>P3</p>
                                {outras.map((test) => {
                                return(
                                    <EachOption id={test.id} onClick={() => openTest(test.link)}>
                                    Prova: {test.name}
                                    </EachOption>
                                )
                                })}
                            </Category>
                        }

                    </List>
                }
            </Body>
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

const Body = styled.div`
    display: flex;
    margin-top: 30px;
`;

const List = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Category = styled.div`
    width: 50%;
`;

const EachOption = styled.button` 
    background: white;
    margin: 10px;
    :hover{
        cursor: pointer;
    }
` ;