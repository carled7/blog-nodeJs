import styled from "styled-components";

function PostPreview() {
    const StyledPostPreview = styled.div`
        
        width: 100% ;
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
    
    `

    return (
        <StyledPostPreview>
            <div className="boltBorder background1" />
            <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
            <h1>Post</h1>
            <p>Post assunto</p>
            <div className="lightBorder background3" />
            <div className="postDetails">
                <div className="postAutor">
                    Autor: Gustavo Dornelas
                </div>
                <div className="postDate">
                    Data de publicação 26/08/2011
                </div>
            </div>


        </StyledPostPreview>
    )
}

export default PostPreview;