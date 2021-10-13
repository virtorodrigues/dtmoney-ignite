import { useEffect, useState } from 'react';
import { client, q } from '../../services/api';
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

export function TransactionsTable() {


  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {

    const response = client
      .query(q.Paginate(q.Match(q.Ref('indexes/all_transactions'))))
      .then((response) => {
        //@ts-ignore
        const expenseRef = response.data;
        //@ts-ignore
        const getAllDataQuery = expenseRef.map(ref => {
          return q.Get(ref);
        });
        return client.query(getAllDataQuery).then(data => data);
      });

    //@ts-ignore
    response.then(data => setTransactions(data))

    /*api.get<TransactionsProps[]>('transactions')
       .then((response) => {
         setTransactions(response.data);
       })*/
  }, []);

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
          {transactions.map(transaction => (
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