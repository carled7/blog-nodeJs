//Import dos modulos
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import axios from "axios";
import 'typeface-roboto'

//Import dos componentes
import Header from "../src/components/Header"
import PostPreview from "../src/components/PostPreview"
import { CSSReset } from "../src/components/CSSReset"

const StyledBody = styled.div`
    display: flex;

    input, button {
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        text-align: center;
        letter-spacing: .1rem;
    }

    h1 {
        text-align: center;
        letter-spacing: .2rem;
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
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }

    a {
        text-decoration: none;
    }
`

function homePage() {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const options = { method: 'GET', url: 'http://localhost:4002/posts/' };
        axios.request(options).then((response) => {
            setPosts(response.data);
        });
    }, []);

    if (!posts) return null
    
    else {

        

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
                        {
                            posts.reverse().map(element => {
                                console.log("***", element)
                                return (<PostPreview {...element} />)
                            })
                        }
                    </div>
                </div>
            </StyledBody>
        )

    }
}

export default homePage