import styled from "styled-components"

export const StyledHeaderLogo = styled.div`
   
    width: 400px;
    display: flex;
    justify-content:space-around;
    align-items: center;


    ${'h1'}{
        color:var(--gray-100) ;
        margin-top: 10px;
    }

    ${'span'}{
        font-size: 20px;
        color:var(--red);
    }

`