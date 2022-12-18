import { CartTotal } from './CartTotal'
import { CartProduct } from './CartProduct'

import  {StyledCartContainer, StyledCartTitle, StyledCartList} from './style'


export const Cart = ({currentSale, totalCart, removeItemCart, removeAllOfCart}) => {


            return(
                <StyledCartContainer>
                    <StyledCartTitle>
                        Carrinho de compras
                    </StyledCartTitle>
                    <StyledCartList>
                      
                       {
                        currentSale.map((itemCart) => {
                            return(
                                <>
                                    <CartProduct itemCart={itemCart} id={itemCart.id}  removeItemCart={removeItemCart} />
                                </>
                            )
                        })
                       }
                        <CartTotal  removeAllOfCart={removeAllOfCart} totalCart={totalCart} />
                    </StyledCartList>
                </StyledCartContainer>
            )

}

