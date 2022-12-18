import {StyledProduct, StyledProductImageDiv, StyledProductName, StyledProductCategory, StyledProductPrice} from './style'

import { Button } from '../../Button'

export const Product = ({product, handleClick}) => {

    return(
        <StyledProduct id={product.id}>
                <StyledProductImageDiv><img src={product.img} alt="" className='Product-image' /></StyledProductImageDiv>
                <StyledProductName>{product.name}</StyledProductName>
                <StyledProductCategory className='Product-category'>{product.category}</StyledProductCategory>
                <StyledProductPrice>R$ {product.price}</StyledProductPrice>
                <Button handleClick={handleClick} />
        </StyledProduct>
    )
}

