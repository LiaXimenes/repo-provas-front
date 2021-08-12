import styled from "styled-components";
import { useEffect, useState } from "react";
import {api} from "../services/api";
import {Link} from "react-router-dom";

export default function SearchTeacher(){
    const [teachers, setTeachers] = useState([]);
    const [tests, setTests] = useState([]);
    const [p1, setP1] = useState([]);
    const [p2, setP2] = useState([]);
    const [p3, setP3]= useState([]);
    const [segChamada, setSegChamada] = useState([]);
    const [outras, setOutras] = useState([]);


    useEffect(() => {
        const request = api.get(`/search-test/teacher`);
        request.then((response) => {setTeachers(response.data)});
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

        const request = api.get(`/search-test/teacher/${id}`);
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
                <Link to="/">
                  <Title>RepoProvas</Title> 
                </Link>
                <p>Nessa página tem todos os professores, escolhe um que mostraremos as provas que temos</p>
            </Header>

            <Body>
                <List>
                    {teachers.map((teacher) => {
                        return (
                        <EachTeacher id={teacher.id} onClick={() => findTestByTeacherId(teacher.id)}>
                            {teacher.name}
                        </EachTeacher>
                        )
                    })}
                </List>

                {tests.length === 0 ? "" : 
                    <List>
                        {p1.length === 0 ? <p>Não temos nenhuma P1 :(</p> : 
                            <Category>
                                <h1>P1</h1>
                                {p1.map((test) => {
                                return(
                                    <EachTest id={test.id} onClick={() => openTest(test.link)} >
                                    Prova: {test.name}
                                    </EachTest>
                                )
                                })}
                            </Category>
                        }

                        {p2.length === 0 ? <p>Não temos nenhuma P2 :(</p> : 
                            <Category>
                                <h1>P2</h1>
                                {p2.map((test) => {
                                return(
                                    <EachTest id={test.id} onClick={() => openTest(test.link)}>
                                    Prova: {test.name}
                                    </EachTest>
                                )
                                })}
                            </Category>
                        }

                        {p3.length === 0 ? <p>Não temos nenhuma P3 :(</p> : 
                            <Category>
                                <h1>P3</h1>
                                {p3.map((test) => {
                                return(
                                    <EachTest id={test.id} onClick={() => openTest(test.link)}>
                                    Prova: {test.name}
                                    </EachTest>
                                )
                                })}
                            </Category>
                        }

                        {segChamada.length === 0 ? "" : 
                            <Category>
                                <h1>Segunda Chamada</h1>
                                {segChamada.map((test) => {
                                return(
                                    <EachTest id={test.id} onClick={() => openTest(test.link)}>
                                    Prova: {test.name}
                                    </EachTest>
                                )
                                })}
                            </Category>
                        }

                        {outras.length === 0 ? "" : 
                            <Category>
                                <h1>P3</h1>
                                {outras.map((test) => {
                                return(
                                    <EachTest id={test.id} onClick={() => openTest(test.link)}>
                                    Prova: {test.name}
                                    </EachTest>
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

const Title = styled.div`
    font-family: 'Major Mono Display', monospace;
    color:white;
    font-size: 25px;
    position: absolute;
    left: 0px;
    top:0px;
    margin-left: 10px;
    margin-top: 38px;

    :hover{
        cursor: pointer;
        color: #FFD523;
    }
`;

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

    p{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 20px;
    }
`;

const Category = styled.div`
    width: 50%;

    h1{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 25px;
    }
`;

const EachTeacher = styled.button` 
    width: 200px;
    height: 25px;
    background: #2B2B2B;
    color: white;
    margin: 10px;
    border-radius: 5px;
    font-size: 17px;

    :hover{
        cursor: pointer;
        background: #171717;
        color: #FFD523;
    }
` ;

const EachTest = styled.button`
    width: 200px;
    height: 50px;
    margin-top: 10px;
    background: #2B2B2B;
    color: white;
    border-radius: 5px;

    :hover{
        cursor: pointer;
        background: #171717;
        color: #FFD523;
    }
`;