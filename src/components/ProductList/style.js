import styled from "styled-components"

export const StyledProductList = styled.ul`
   
    width: 383px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    overflow-x: scroll;
    margin: 0 auto;

    ::-webkit-scrollbar {
    display:none;
    }


    @media(min-width:400px){

        width: 100vw;
        max-width: 100%;
        height: 100vh;
        display: flex;
        flex-wrap: no-wrap;
        justify-content: center;
        padding: 10px;
        overflow-x: scroll;
        margin: 10px 10px;
    }


    @media(min-width:1024px){

        width: 800px;
        max-width: 100%;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px;
        overflow-x: scroll;
        margin: 10px 10px;
}


@media(min-width:1300px){

        width: 990px;
        max-width: 100%;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px;
        overflow-x: scroll;
        margin: 10px 10px;
}

`