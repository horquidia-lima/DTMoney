import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./style";
import { X } from "phosphor-react";

export function NewTransactionModal(){
    return(
        <Dialog.Portal>
            <Overlay/>

                <Content>
                    <Dialog.Title>Nova transação</Dialog.Title>

                    <CloseButton>
                        <X size={24}/>
                    </CloseButton>

                    <form action="">
                        <input type="text" placeholder="Descricao" required/>
                        <input type="number" placeholder="Preco" required/>
                        <input type="text" placeholder="Categoria" required/>

                        <button type="submit">
                            Cadastrar
                        </button>
                    </form>

                </Content>
        </Dialog.Portal>
    )
}