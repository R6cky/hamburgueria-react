import styled from "styled-components"

export const StyledProduct = styled.li`
   
    width: 300px;
    max-width: 100%;
    height: 346px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 10px;
    margin: 5px 10px;
    border: solid 1px var(--grey-20);
    border-radius: 8px;

`



export const StyledProductImageDiv = styled.div`
   
        width: 100%;
        background: var(--grey-0);
        display: flex;
        justify-content: center;
        align-items: center;


    ${'img'}{
        width: 250px;
        height: 150px;
        background: var(--grey-0);
        object-fit: cover;
    }

`




export const StyledProductName = styled.div`
   
    font-size: 18px;
    color: var(--grey-100);

`




export const StyledProductCategory = styled.span`
   
   color: var(--grey-50);

`




export const StyledProductPrice = styled.span`
   
    color: var(--green);
    font-weight: bold;

`