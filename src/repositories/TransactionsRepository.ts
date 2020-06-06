import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const balance = this.transactions.reduce(
      (accumulate, current) => {
        if (current.type === 'income') {
          return {
            ...accumulate,
            income: accumulate.income + current.value,
            total: accumulate.total + current.value,
          };
        }

        return {
          ...accumulate,
          outcome: accumulate.outcome + current.value,
          total: accumulate.total - current.value,
        };
      },
      { income: 0, outcome: 0, total: 0 },
    );

    return balance;
  }

  public create(transaction: Transaction): Transaction {
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
