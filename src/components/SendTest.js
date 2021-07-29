import styled from "styled-components";
import axios from 'axios'
import { useState } from "react";

export default function SendTest(){
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    const body = {
        name,
        link
    }

    function sendTestToServer(){
        const request = axios.post("http://localhost:4000/send-test", body)
        request.then((response) => console.log("deu bom"));
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
                <form onSubmit={sendTestToServer}>
                    <p>Qual nome da prova? Pode ser o ano e semestre que foi aplicada</p>
                    <input type="text" placeholder="Ex: 2020.1" value={name} onChange={(e) => setName(e.target.value)} />

                    <p>Escolha a disciplina que quer enviar a prova</p>
                    <select></select>

                    <p>Agora, o professor</p>
                    <select></select>

                    <p>Qual categoria ela se encaixa?</p>
                    <select></select>

                    <p>Por último, mas não menos importante, coloca ai o link da prova (ela já tem que estár na nuvem)</p>
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
    }
` ;

const Body = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;