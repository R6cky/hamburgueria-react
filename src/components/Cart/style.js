import styled from "styled-components"


export const StyledCartContainer = styled.div`
   
    width: 100%;
    max-width: 100%;
    height: 100%;


    
@media(min-width:410px){
   
   width: 100%;
   max-width: 100%;
   height: 100%;
   position: absolute;
   top: 605px;
}



@media(min-width:1024px){
   
        width: 25%;
        max-width: 100%;
        height: 100%;
        position: absolute;
        right: 5px;
        top: 105px;

    }

`




export const StyledCartTitle = styled.h5`
   
    width:100%;
    max-width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--Color-primary);
    color: var(--grey-0);
    font-size: 18px;
    margin: 0 auto;
    margin-left: 5px;
`



export const StyledCartList = styled.ul`

    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    margin-left:5px;
    overflow-y: scroll;
    padding: 10px;
    background: var(--grey-0);

    ::-webkit-scrollbar{
    display: none;
    }

`






