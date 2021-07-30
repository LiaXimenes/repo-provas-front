import styled from "styled-components";
import {Link} from "react-router-dom";

export default function HomePage(){
    return(
        <>
            <Header>
                <p>Aqui a gente se ajuda a estudar! Procure sua prova ou envie uma para ajudar os outres</p>
            </Header>
            
            <Body>
                <Link to="/send-test">
                    <GoTo>
                        <p>Enviar Prova</p>
                    </GoTo>
                </Link>
                <Link to="/search-test">
                    <GoTo>
                        <p>Pesquisar Prova</p>
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

    p{
        color: white;
    }

`