import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, type, value }: Omit<Transaction, 'id'>): Transaction {
    const transaction = new Transaction({ title, type, value });
    const transactionCreated = this.transactionsRepository.create(transaction);

    return transactionCreated;
  }
}

export default CreateTransactionService;
