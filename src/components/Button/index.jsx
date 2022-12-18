import  {StyledProductButton} from './style'


export const Button = ({handleClick}) => {

    return(
        <StyledProductButton onClick={  (e) =>  handleClick( Number(e.target.parentElement.id) )} >Adicionar</ StyledProductButton>
    )
}