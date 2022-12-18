import {StyledHeader} from './style'
import { Logo } from "./Logo"
import { InputSearch } from "./InputSearch"


export const Header = ({showProducts, inputVoid}) =>{
    
    return(

        <StyledHeader>
            <Logo />
            <InputSearch showProducts={showProducts} inputVoid={inputVoid} />
        </StyledHeader>

    )

}