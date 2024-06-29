import { Header } from "../../components/Header";
import { Summary } from "../../components/Header/Summary";
import { TransactionsContainer, TransactionsTable, PriceHighLight } from "./style";

export function Transactions(){
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td>Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td>Hamburguer</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 59,00
                                </PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                        <tr>
                            <td>Aluguel do apartamento</td>
                            <td>
                                <PriceHighLight variant="income">
                                    - R$ 1.200,00
                                </PriceHighLight>
                            </td>
                            <td>Casa</td>
                            <td>27/03/2022</td>
                        </tr>
                        <tr>
                            <td>Computador</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    R$ 5.400,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>15/03/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}