import styled from "styled-components"
import HeaderButton from "./HeaderButton";

function Header() {

    const StyledHeader = styled.div`

        display: flex;

        .headerContainer {
        display: flex;
        padding: 1rem;
        }

        header {
            padding-top: 3rem;
            padding-bottom: 3rem;
        }

        

        ul {
            padding-top: 3rem;
            padding-bottom: 3rem;
            display: grid;
        }

        footer {
            padding-top: 3rem;
            padding-bottom: 3rem;
        }

        
    `;

    return (
        <StyledHeader>
            < div className="headerContainer color2 background5">
                <div>
                    <header>
                        <h1 className="color3">MUNDO MIOJO</h1>
                    </header>
                    <nav>
                        <div className="boltBorder background1" />
                        <ul>
                            <HeaderButton name="Página Inicial" link="/" />
                            <HeaderButton name="Nova Postagem" link="post" />
                            <HeaderButton name="Sobre nós" link="about" />
                            <HeaderButton name="Contato" link="contact" />
                        </ul>
                        <div className="boltBorder background1" />
                    </nav>

                    <footer>
                        Nosso objetivo e levar a cultura do miojo a todo o mundo.
                    </footer>
                </div>
            </div >
        </StyledHeader>
    )
}

export default Header