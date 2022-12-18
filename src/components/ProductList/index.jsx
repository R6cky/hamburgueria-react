import { api } from '../../services/api.js'

import {StyledProductList} from './style'
import { Product } from './Product'
import { useEffect} from 'react'


export const ProductList =  ({product, setProduct, handleClick, setListProductReset }) => {
    

    useEffect(()=>{

        const getcards =  async () => {


            try{
                const response = await api.get('products')
                setProduct([...response.data])
                setListProductReset([...response.data])
            
            }catch(err){
                console.log(err)
            }
        } 
        getcards()

    },[])

    

 
    return(
        <StyledProductList>
            {
                product.map((element, index)=>{
                   return(
                    <Product product={element} key={index} handleClick={handleClick} />
                   )
               })
            }
           
        </StyledProductList>
    )

}