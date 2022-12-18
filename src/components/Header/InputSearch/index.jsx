
import { StyledHeaderInput, StyledInputSearch, StyledInputButton } from "./style";

export const InputSearch = ({showProducts, inputVoid}) => {

  return(

    <StyledHeaderInput placeholder='Digitar pesquisa'>
            <StyledInputSearch onChange={(e) => inputVoid(e.target.value)} placeholder="Digitar Pesquisa" type="text" />
            <StyledInputButton className="Input-button" onClick={(e)=> showProducts(e.target.parentElement.children[0].value)}>Pesquisar</StyledInputButton>
    </StyledHeaderInput>

    )
  
}
