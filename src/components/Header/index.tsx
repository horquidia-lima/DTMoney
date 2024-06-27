import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

import logoImg from '../../assets/Logo.svg'

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}