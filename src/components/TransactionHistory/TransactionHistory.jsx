import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
    const itemsMarkup = items.map(({ id, type, amount, currency }) => {
        return (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        )
    })
    
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Currency</th>
                </tr>
            </thead>

            <tbody>
                {itemsMarkup}
            </tbody>
        </table>
    )
}