import styled from "styled-components";
import {Link} from "react-router-dom";

export default function HomePage(){
    return(
        <>
            <Header>
                <Title>RepoProvas</Title>
                <p>Aqui a gente se ajuda a estudar! Procure sua prova ou envie uma para ajudar os outres</p>
            </Header>
            
            <Body>
                <Link to="/send-test">
                    <GoTo>
                        Enviar Prova
                    </GoTo>
                </Link>
                <Link to="/search-test">
                    <GoTo>
                        Pesquisar Prova
                    </GoTo>
                </Link>
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

const Title = styled.h1`
    font-family: 'Major Mono Display', monospace;
    color:white;
    font-size: 35px;
    margin-left: 10px;
    left: 0;
    position: absolute;
`;

const Body = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const GoTo = styled.div`
    width: 200px;
    height: 100px;
    background: #2B2B2B;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    font-weight: bold;

    :hover{
        background: #171717;
        color: #FFD523;
    }
`;