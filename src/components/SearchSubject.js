import styled from "styled-components";
import { useEffect, useState } from "react";
import {api} from "../services/api";
import {Link} from "react-router-dom";

export default function SearchSubject(){
    const [subjects, setSubjects] = useState([]);
    const [tests, setTests] = useState([]);

    const [sem1, setSem1] = useState([]);
    const [sem2, setSem2] = useState([]);
    const [sem3, setSem3] = useState([]);
    const [sem4, setSem4] = useState([]);
    const [sem5, setSem5] = useState([]);
    const [sem6, setSem6] = useState([]);
    const [sem7, setSem7] = useState([]);
    const [sem8, setSem8] = useState([]);

    const [p1, setP1] = useState([]);
    const [p2, setP2] = useState([]);
    const [p3, setP3]= useState([]);
    const [segChamada, setSegChamada] = useState([]);
    const [outras, setOutras] = useState([]);

    useEffect(() => {
        for(let i = 0; i < subjects.length; i++){
            if(subjects[i].semester.id === 1){
                setSem1(sem1 => [...sem1, subjects[i]])
            } else if(subjects[i].semester.id === 2){
                setSem2(sem2 => [...sem2, subjects[i]])
            } else if(subjects[i].semester.id === 3){
                setSem3(sem3 => [...sem3, subjects[i]])
            } else if(subjects[i].semester.id === 4){
                setSem4(sem4 => [...sem4, subjects[i]])
            } else if(subjects[i].semester.id === 5){
                setSem5(sem5 => [...sem5, subjects[i]])
            } else if(subjects[i].semester.id === 6){
                setSem6(sem6 => [...sem6, subjects[i]])
            } else if(subjects[i].semester.id === 7){
                setSem7(sem7 => [...sem7, subjects[i]])
            } else{
                setSem8(sem8 => [...sem8, subjects[i]])
            }
        }
    }, [subjects])

    useEffect(() => {
        const request = api.get(`/search-test/subject`);
        request.then((response) => {setSubjects(response.data)});
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

    function findTestBySubjectId(id){
        setP1([]);
        setP2([]);
        setP3([]);
        setSegChamada([]);
        setOutras([]);

        const request = api.get(`/search-test/subject/${id}`);
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
                <p>Nessa página temos todas as disciplinas, escolhe uma que mostraremos as provas que temos</p>
            </Header>

            <Body>
                <List>
                    <Category>
                        <h1>Primeiro Semestre</h1>
                            {sem1.map((subject) => {
                                return(
                                    <EachDiscipline id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachDiscipline>
                                )
                            })}
                    </Category>

                    <Category>
                        <h1>Segundo Semestre</h1>
                            {sem2.map((subject) => {
                                return(
                                    <EachDiscipline id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachDiscipline>
                                )
                            })}
                    </Category>

                    <Category>
                        <h1>Terceiro Semestre</h1>
                            {sem3.map((subject) => {
                                return(
                                    <EachDiscipline id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachDiscipline>
                                )
                            })}
                    </Category>

                    <Category>
                        <h1>Quarto Semestre</h1>
                            {sem4.map((subject) => {
                                return(
                                    <EachDiscipline id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachDiscipline>
                                )
                            })}
                    </Category>

                    <Category>
                        <h1>Quinto Semestre</h1>
                            {sem5.map((subject) => {
                                return(
                                    <EachDiscipline id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachDiscipline>
                                )
                            })}
                    </Category>

                    <Category>
                        <h1>Sexto Semestre</h1>
                            {sem6.map((subject) => {
                                return(
                                    <EachDiscipline id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachDiscipline>
                                )
                            })}
                    </Category>
                    <Category>
                        <h1>Setimo Semestre</h1>
                            {sem7.map((subject) => {
                                return(
                                    <EachDiscipline id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachDiscipline>
                                )
                            })}
                    </Category>
                    <Category>
                        <h1>Oitavo Semestre</h1>
                            {sem8.map((subject) => {
                                return(
                                    <EachDiscipline id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachDiscipline>
                                )
                            })}
                    </Category>
                </List>

                
                {tests.length === 0 ? "" : 
                    <List>
                        {p1.length === 0 ? <p>Não temos nenhuma P1 :(</p> : 
                            <Category>
                                <h1>P1</h1>
                                {p1.map((test) => {
                                return(
                                    <EachTest id={test.id} onClick={() => openTest(test.link)}>
                                        <p>Prova: {test.name}</p>
                                        <p>Professor: {test.teacher.name}</p>
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
                                        <p>Prova: {test.name}</p>
                                        <p>Professor: {test.teacher.name}</p>
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
                                        <p>Prova: {test.name}</p>
                                        <p>Professor: {test.teacher.name}</p>
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
                                        <p>Prova: {test.name}</p>
                                        <p>Professor: {test.teacher.name}</p>
                                    </EachTest>
                                )
                                })}
                            </Category>
                        }

                        {outras.length === 0 ? "" : 
                            <Category>
                                <h1>Outras</h1>
                                {outras.map((test) => {
                                return(
                                    <EachTest id={test.id} onClick={() => openTest(test.link)}>
                                        <p>Prova: {test.name}</p>
                                        <p>Professor: {test.teacher.name}</p>
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
`;

const Category = styled.div`
    width: 50%;
    margin-bottom: 10px;

    h1{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 25px;
    }
`;

const EachDiscipline = styled.button` 
    width: 200px;
    height: 25px;
    background: #2B2B2B;
    color: white;
    margin: 10px;
    border-radius: 5px;

    :hover{
        cursor: pointer;
        background: #171717;
        color: #FFD523;
    }
` ;

const EachTest = styled.button`
    width: 170px;
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