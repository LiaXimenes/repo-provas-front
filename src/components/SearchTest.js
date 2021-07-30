import styled from "styled-components";
import {Link} from "react-router-dom";

export default function SearchTest(){
    return(
        <>
            <Header>
                <p>Nessa página todos os outres vão te ajudar a estudar, então escolhe uma disciplina ou um professor para achar a prova que precisa</p>
            </Header>

            <Body>
                <Link to="/search-teacher">
                    <GoTo>
                        <p>Professor</p>
                    </GoTo>
                </Link>
                <Link to="/search-subject">
                    <GoTo>
                        <p>Disciplina</p>
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