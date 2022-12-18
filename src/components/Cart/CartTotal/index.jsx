//import './index.css'
import {StyledmessageCartVoid, StyledTotalSum, StyledTotalSumData, StyledTotalSumTitle, StyledTotalSumValue, StyledTotalSumButton } from './style'

export const CartTotal = ({removeAllOfCart, totalCart}) => {

   return(

    totalCart() === 0 ? 
    
            <StyledmessageCartVoid>
                <h2>Sua sacola está vazia</h2>
                <h6>Adicione itens</h6>
            </StyledmessageCartVoid>

   :
            <StyledTotalSum>
                <StyledTotalSumData>
                    < StyledTotalSumTitle>Total</ StyledTotalSumTitle>
                    <StyledTotalSumValue>R$ {totalCart().toFixed(2)}</StyledTotalSumValue>
                </StyledTotalSumData>
                < StyledTotalSumButton onClick={() =>  removeAllOfCart()} className="Total-sum__button">Remover tudo</ StyledTotalSumButton>
            </StyledTotalSum>

   )
}

    
