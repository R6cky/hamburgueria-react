import { StyleCartProduct, StyleCartProductData, StyleCartProductImg, StyleProductDataName, StyleProductDataType, StyleButtonCart } from './style';


export const CartProduct = ({itemCart, removeItemCart}) => {

    return(
        <StyleCartProduct id={itemCart.id} >
            <StyleCartProductData>
                <StyleCartProductImg><img src={itemCart.img} alt="Imagem" width={'60px'} /></StyleCartProductImg>
                <div className="Cart-product__info">
                    <StyleProductDataName>{itemCart.name}</StyleProductDataName>
                    <StyleProductDataType>{itemCart.category}</StyleProductDataType>
                </div>
                <StyleButtonCart onClick={() =>  removeItemCart(itemCart.id)} className="button-cart" >remover</StyleButtonCart>
            </StyleCartProductData>
        </StyleCartProduct>
    )
}