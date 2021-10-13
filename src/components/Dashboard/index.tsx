import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

export function Dashboard(props: any) {
  return (
    <Container>
      <Summary />
      <TransactionsTable transactions={props.transactions} />
    </Container>
  )
}