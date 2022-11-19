import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Header from "../src/components/Header"
import 'typeface-roboto'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import PostPreview from "../src/components/PostPreview"


function homePage() {

    const StyledBody = styled.div`
    display: flex;

    * {
        font-family: 'Roboto', sans-serif;
    }

    input, button {
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        text-align: center;
        letter-spacing: .1rem;
    }

    h1 {
        text-align: center;
        letter-spacing: .5rem;
    }

    .color1 { color: #f23e02 };
    .background1 { background-color: #f23e02 };

    .color2 { color: #fef5c8 };
    .background2 { background-color: #fef5c8 };

    .color3 { color: #00988d };
    .background3 { background-color: #00988d };
    
    .color4 { color: #2c6b74 };
    .background4 { background-color: #2c6b74 };

    .color5 { color: #013750 };
    .background5 { background-color: #013750 };

    .boltBorder {
        height: .5rem;
    }

    .lightBorder {
        height: .2rem;
    }

    .headerContainer {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 100;
        width: 20rem;
        overflow-y: visible;  
    }

    .bodyContainer {
        padding: 1rem;
        margin-left: 20rem;
        width: calc(100vw - 21rem);
        display: flex;
        flex-direction: column;
    }

    .bodyHeader {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding-bottom: 1rem;
    }

    .bodyHeaderSearch {
        display: grid;
        grid-template-columns: 6fr 1fr;
        gap: 1rem;
    }

    .PostComponent {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    
`

    return (

        <StyledBody>
            <CSSReset />
            <div className="headerContainer">
                <Header />
            </div>
            <div className="bodyContainer">
                <div className="bodyHeader">
                    <div className="bodyHeaderTittle">
                        <h1 className="color3">ULTIMAS POSTAGENS</h1>
                    </div>
                    <div className="bodyHeaderSearch">
                        <input type="text" placeholder="Pesquisar..." className="background2" />
                        <button type="button" className="background2">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>

                <div className="PostComponent">
                    <PostPreview />
                    <PostPreview />
                    <PostPreview />
                    <PostPreview />
                </div>

            </div>
        </StyledBody>
    )
}

export default homePage