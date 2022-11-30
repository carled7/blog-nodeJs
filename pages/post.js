import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import { useState } from "react"
import axios from "axios"
import Router from "next/router"
import 'typeface-roboto'

import Header from "../src/components/Header"


const StyledPost = styled.div`
    display: flex;

    h1 {
        text-align: center;
        letter-spacing: .5rem;
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
        color: #00988d;
        margin-left: 5rem;
        margin-top: 20px
    }
    .bodyHeaderSearch {
        display: grid;
        grid-template-columns: 6fr 1fr;
        gap: 1rem;
    }
    
    form{
        display: flex;
        flex-direction: column;
        width: 80%;
        gap: 1rem;
        margin: 1rem 10rem
    }

    .form-inputs {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 1rem;
    }

    input, textarea, select, option, #article{
        width: 100%;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: .5rem;
        border: none;
        font-size: 1.5rem;
    }

    label{
        margin-top: 2rem;
        font-size: 1.5rem;
        padding: 2rem;
    }

    #submit{
        font-weight: 600;
        font-size: 2rem;
        transition: .3s;
    }

    #submit:hover{
        background-color: #c73200;
        cursor: pointer;
    }
    
    #article{
        height: 20rem;
    }
`

function post() {

    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        // Controlar formulário
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        // Prevenir ação padrão do formulário
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log('*** handleSubmit: ', data);

        const options = {
            method: 'POST',
            url: 'http://localhost:4002/posts',
            headers: { 'Content-Type': 'application/json' },
            data: data
        };

        axios.request(options).then(function (response) {
            Router.push("/article?" + response.data.id)
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <StyledPost>
            <CSSReset />
            <div className="headerContainer">
                <Header />
            </div>
            <div className="bodyContainer">
                <div className="bodyHeader">
                    <h1>Nova postagem</h1>
                </div>

                <div className="boltBorder background1" />
                <form onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <div>
                            <label id="title" htmlFor="title">Título</label>
                            <input type="text" className="background3 color2" name="title" onChange={handleInputChange} value={formValues.title || ''} />
                        </div>

                        <div>
                            <label htmlFor="cover">Capa</label>
                            <input type="" name="cover" className="background3 color2" onChange={handleInputChange} value={formValues.cover || ''} />
                        </div>
                        <div>
                            <label htmlFor="user">Usuário</label>
                            <select className="background3 color2" name="user">
                                <option value="Carlos Eduardo">Carlos Eduardo</option>
                                <option selected value="Daniel Junior">Daniel Junior</option>
                                <option value="Gustavo Dornelas">Gustavo Dornelas</option>
                                <option value="Laniele Martins">Laniele Martins</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="article">Artigo</label>
                        <textarea type="textarea" id="article" className="background3 color2" cols="20" wrap="hard" name="article" onChange={handleInputChange} value={formValues.article || ''} />
                    </div>
                    <div>
                        <br />
                        <br />
                        <input type="submit" id="submit" className="background1 color2" value="Postar" />
                    </div>
                </form>
            </div>
        </StyledPost>
    )
}

export default post;