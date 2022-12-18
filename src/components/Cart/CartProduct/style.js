import styled from "styled-components"


export const StyleCartProduct = styled.li`

    width: 350px;
    max-width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px auto;
    border: solid var(--grey-20);
    border-radius: 8px;

`




export const StyleCartProductData = styled.div`
   
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 10px;
    gap: 10px;

`




export const StyleCartProductImg = styled.div`
   
   background: var(--grey-20);

`




export const StyleProductDataName = styled.h5`
   
    font-size: 18px;
    color: var(--grey-100);

`



export const StyleProductDataType = styled.span`
   
   font-size: 12px;
   color: var(--grey-50);

`



export const StyleButtonCart = styled.span`
   
   font-size: 12px;

   :hover{
    text-decoration: underline;
    cursor: pointer;
   }
`

