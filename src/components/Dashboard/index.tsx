import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
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

export function Dashboard(props: any) {
  return (
    <Container>
      <Summary />
      <TransactionsTable transactions={props.transactions} />
    </Container>
  )
}