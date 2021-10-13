import { Container } from './styles';

interface TransactionsProps {
  data: {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: Date;
  }
}

export function TransactionsTable(props: any) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {props.transactions.map((transaction: TransactionsProps) => (
            <tr key={transaction.data.id}>
              <td className="title">{transaction.data.title}</td>
              <td className={transaction.data.type}>R${transaction.data.amount}</td>
              <td>{transaction.data.category}</td>
              <td>{transaction.data.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}