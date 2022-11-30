import styled from "styled-components"

const StyledButton = styled.div`
    padding: 1rem;
    margin: 1rem;
    
    font-weight: bold;
    list-style: none;
    
    border-radius: 0.5rem;
    text-align: center;
    font-size: large;
    letter-spacing: .1rem;

    a {
        color: fff
    }


`

function HeaderButton(props) {
    
    return (
        <StyledButton className="background3">
            <a href={props.link} className="color2">
                {props.name}
            </a>
        </StyledButton>
    )

}

export default HeaderButton