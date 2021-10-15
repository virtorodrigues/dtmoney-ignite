import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { client, q } from './services/api';
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";

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

Modal.setAppElement('#root');

function App() {

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

  function addTransaction() {
    client
      .query(
        q.Create(q.Collection('transactions'), {
          data: {
            id: Math.random(),
            title: 'Transaction 55',
            amount: 400,
            type: 'deposit',
            category: 'Food',
            createdAt: '13/10/2021',
          }
        })
      )
      .then((ret) => {
        //@ts-ignore
        const newTransactions = [...transactions, { data: ret.data }];
        setTransactions(newTransactions);
      })
      .catch(error => console.error('Error: ', error.message));

  }

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard transactions={transactions} />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
