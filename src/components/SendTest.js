import styled from "styled-components";
import axios from 'axios'
import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

export default function SendTest(){
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [chosenSubject, setChosenSubject] =  useState("");
    const [chosenCategory, setChosenCategory] = useState("");
    const [chosenTeacher, setChosenTeacher] = useState("");

    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [categories, setCategories] = useState([]);

    const history = useHistory();

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/search-test/subject`);
        request.then((response) => {console.log(response.data); setSubjects(response.data)});
        request.catch(errors)

        function errors(error){
            
        }
    },[])

    function sendTestToServer(){
        if(!name || !chosenSubject || !chosenTeacher || !chosenCategory || !link){
            setLink("");
            setName("");
            setChosenCategory("");
            setChosenSubject("");
            setChosenTeacher("");

            alert("Algo deu errado, tente novamente");
            return;
        }

        const body = {
            name,
            subjectId: chosenSubject ,
            teacherId: chosenTeacher,
            categoryId: chosenCategory,
            link
        }

        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/send-test`, body)
        request.then((response) => {alert("Sua prova foi enviada! Obrigada"); history.push("/")});
        request.catch(errors)

        function errors(error){
            setLink("");
            setName("");
            setChosenCategory("");
            setChosenSubject("");
            setChosenTeacher("");

            alert("Algo deu errado, tente novamente")

        }
    }

    function findTeacherBySubjectId(id){
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/search-test/teacher-subject/${id}`);
        request.then((response) => {console.log(response.data); setTeachers(response.data)});
        request.catch(errors)

        function errors(error){

        }
    }

    function getCategories(){
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/search-test/category`);
        request.then((response) => {console.log(response.data); setCategories(response.data)});
        request.catch(errors)

        function errors(error){

        }
    }


    return(
        <>
            <Header>
                <p>Nessa página você pode ajudar os outres a estudar, então envia a prova ai embaixo</p>
            </Header>

            <Body>
                <form>
                    <p>Qual nome da prova? Pode ser o ano e semestre que foi aplicada</p>
                    <input type="text" placeholder="Ex: 2020.1" value={name} onChange={(e) => setName(e.target.value)} />

                    <p>Escolha a disciplina que quer enviar a prova</p>
                    <select onChange={(e) => {setChosenSubject(e.target.value); findTeacherBySubjectId(e.target.value)}}>
                        <option></option>
                        {subjects.map((subject) => {
                             return(
                                <option value={subject.id}>
                                    {subject.name}
                                </option>
                            )
                        })}
                    </select>

                    <p>Agora, o professor</p>
                    <select onChange={(e) => {setChosenTeacher(e.target.value); getCategories()}}>
                        <option></option>
                        {teachers.map((teacher) => {
                             return(
                                <option value={teacher.teacherId}>
                                    {teacher.teacher.name}
                                </option>
                            )
                        })}
                    </select>

                    <p>Qual categoria ela se encaixa?</p>
                    <select onChange={(e) => {setChosenCategory(e.target.value)}}>
                        <option></option>
                        {categories.map((category) => {
                             return(
                                <option value={category.id}>
                                    {category.name}
                                </option>
                            )
                        })}
                    </select>

                    <p>Por último, mas não menos importante, coloca ai o link da prova (ela já tem que estar na nuvem)</p>
                    <input type="text" placeholder="Link da prova, pleasinho" value={link} onChange={(e) => setLink(e.target.value)} />

                    <button onClick={sendTestToServer}>Enviar</button>
                </form>
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
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 20px;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    select{
        width: 200px;
    }

    input{
        width: 500px;
        height: 30px;
    }

    button{
        width: 150px;
        height: 40px;
        background: #171717;
        border-radius: 5px;
        color:white;
        margin-left: 50px;

        :hover{
            cursor: pointer;
        }
    }
`;