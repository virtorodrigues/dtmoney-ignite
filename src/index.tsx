import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Transaction 1',
          amount: 500,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 3,
          title: 'Transaction 1',
          amount: 50,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 4,
          title: 'Transaction 1',
          amount: 80,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        }
      ]
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);