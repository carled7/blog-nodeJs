import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Header from "../src/components/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import axios from "axios";

import 'typeface-roboto'
import { getURL } from "next/dist/shared/lib/utils"

function Article() {

    const [post, setPost] = useState(null);

    useEffect(() => {

        const url = getURL().split("?")
        const id = url[1]

        const options = { method: 'GET', url: `http://localhost:4002/posts/${id}` };
        axios.request(options).then((response) => {
            console.log("*** Posts: ", response)
            setPost(response.data);
        });
    }, []);

    if (!post) return null

    else {

        const StyledArticle = styled.div`
        
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
        }

        width: 100%;

        .postDetails {
            padding-top: 1rem;
            display: flex;
            justify-content: space-between;
            font-size: 1.5rem;
        }

        .cover {
            max-width: 100%;
            max-height:100%;
            width: 100%;
            height: auto;

            margin-left: auto;
            margin-right: auto;
        }

        p {
            padding: 1rem;
            text-indent: 1rem;
            text-align: justify;
            font-size: 1.5rem;
        }
        
    `
        return (

            <StyledArticle>
                <CSSReset />
                <div className="headerContainer">
                    <Header />
                </div>
                <div className="bodyContainer">
                    <div className="bodyHeader">
                        <div className="bodyHeaderTittle">
                            <h1 className="color3">{post.title}</h1>
                        </div>
                        <div className="bodyHeaderSearch">
                            <input type="text" placeholder="Pesquisar..." className="background2" />
                            <button type="button" className="background2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>

                    <div className="PostComponent">
                        <div className="boltBorder background1" />
                        <img src={post.cover} className="cover" />

                        <div className="article">
                            <p>{post.article}</p>
                        </div>

                        <div className="lightBorder background3" />
                        <div className="postDetails">
                            <div className="postAutor">
                                Autor: {post.user}
                            </div>
                            <div className="postDate">
                                Data de publicação {post.date}
                            </div>
                        </div>
                    </div>

                </div>
            </StyledArticle>
        )
    }
}

export default Article