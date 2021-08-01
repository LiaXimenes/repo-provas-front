import styled from "styled-components";
import axios from 'axios'
import { useEffect, useState } from "react";

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
        const request = axios.get("http://localhost:4000/search-test/subject");
        request.then((response) => {console.log(response.data); setSubjects(response.data)});
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

        const request = axios.get(`http://localhost:4000/search-test/subject/${id}`);
        request.then((response) => {console.log(response.data); setTests(response.data)});
        request.catch(errors)

        function errors(error){

        }
    }


    return(
        <>
            <Header>
                <p>Nessa página temos todas as disciplinas, escolhe uma que mostraremos as provas que temos</p>
            </Header>

            <Body>
                <List>
                    <Category>
                        <p>Primeiro Semestre</p>
                            {sem1.map((subject) => {
                                return(
                                    <EachOption id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachOption>
                                )
                            })}
                    </Category>

                    <Category>
                        <p>Segundo Semestre</p>
                            {sem2.map((subject) => {
                                return(
                                    <EachOption id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachOption>
                                )
                            })}
                    </Category>

                    <Category>
                        <p>Terceiro Semestre</p>
                            {sem3.map((subject) => {
                                return(
                                    <EachOption id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachOption>
                                )
                            })}
                    </Category>

                    <Category>
                        <p>Quarto Semestre</p>
                            {sem4.map((subject) => {
                                return(
                                    <EachOption id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachOption>
                                )
                            })}
                    </Category>

                    <Category>
                        <p>Quinto Semestre</p>
                            {sem5.map((subject) => {
                                return(
                                    <EachOption id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachOption>
                                )
                            })}
                    </Category>

                    <Category>
                        <p>Sexto Semestre</p>
                            {sem6.map((subject) => {
                                return(
                                    <EachOption id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachOption>
                                )
                            })}
                    </Category>
                    <Category>
                        <p>Setimo Semestre</p>
                            {sem7.map((subject) => {
                                return(
                                    <EachOption id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachOption>
                                )
                            })}
                    </Category>
                    <Category>
                        <p>Oitavo Semestre</p>
                            {sem8.map((subject) => {
                                return(
                                    <EachOption id={subject.id} onClick={() => findTestBySubjectId(subject.id)}>
                                        {subject.name}
                                    </EachOption>
                                )
                            })}
                    </Category>
                </List>

                
                {tests.length === 0 ? "" : 
                    <List>
                        {p1.length === 0 ? <p>Não temos nenhuma P1 :(</p> : 
                            <Category>
                                <p>P1</p>
                                {p1.map((test) => {
                                return(
                                    <EachOption id={test.id}>
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
                                    <EachOption id={test.id}>
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
                                    <EachOption id={test.id}>
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
                                    <EachOption id={test.id}>
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
                                    <EachOption id={test.id}>
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
`;

const List = styled.div`
    width: 50%;
    height: 400px;
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
