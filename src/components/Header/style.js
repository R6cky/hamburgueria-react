import styled from "styled-components"

export const StyledHeader = styled.header`
   
        width: 100%;
        max-width: 100%;
        height: 139px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        background: var(--grey-0);

    @media(min-width:1024px){
   
        width: 100%;
        max-width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        justify-content: space-around;
        align-items: center;
        background: var(--grey-0);
        gap: 300px;
}

`