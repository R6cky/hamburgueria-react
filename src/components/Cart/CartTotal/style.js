import styled from "styled-components"



export const StyledmessageCartVoid = styled.div`
   
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;

    ${'h2'}{
        font-size: 20px;
        color: var(--grey-100);
    }

    ${'h6'}{
        color: var(--grey-50);
        font-size: 16px;
    }
    

`




export const StyledTotalSum = styled.div`
   
   width: 100%;
    max-width: 100%;
    height: 130px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`




export const StyledTotalSumData = styled.div`
   
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 5px 20px;

`





export const StyledTotalSumTitle = styled.span`

    font-weight: bold;
    color: var(--grey-100);
  
`




export const StyledTotalSumValue = styled.span`
   
    color: var(--grey-50);
    font-weight: bold;

`



export const StyledTotalSumButton = styled.button`
   
    width: 100%;
    max-width: 100%;
    height: 65px;
    font-size: 16px;
    color: var(--grey-50);
    font-weight: bold;
    border-radius: 8px;
    border: solid var(--grey-20);

`






