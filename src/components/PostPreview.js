import styled from "styled-components";

function PostPreview(props) {

    const StyledPostPreview = styled.div`
        
        width: 100%;

        img, p {
            width: 100%;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .postDetails {
            padding-top: 1rem;
            display: flex;
            justify-content: space-between;
        }

        .cover {
            background: url(${props.cover}) no-repeat center;
            background-size: 110%;
            height: 15rem;
            transition: .5s;
        }

        .cover:hover {
            background-size: 100%;
        }

        h1 {
            
        }

        .title {
            height: 5rem;
            width: fit-content;
            white-space: nowrap; 
            overflow: hidden;
            text-overflow: ellipsis; 
            padding: 1rem;
            font-size: 2rem;
        }

        .article {
        }

        p {
            text-indent: 1rem;
            text-align: justify;
        }
    
    `
    console.log("*** Props", props)
    const url = `article?${props.id}`
    return (
        <StyledPostPreview>
            <a href={url} className="color3">
                <div className="boltBorder background1" />
                <div className="cover" />
                <div className="title">
                    {props.title}
                </div>
            </a>

            <div className="article">
                <p>{props.article.substr(0, 450)}...</p>
            </div>

            <div className="lightBorder background3" />
            <div className="postDetails">
                <div className="postAutor">
                    Autor: {props.user}
                </div>
                <div className="postDate">
                    Data de publicação {props.date}
                </div>
            </div>
        </StyledPostPreview>
    )
}

export default PostPreview;