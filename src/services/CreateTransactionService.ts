import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface CreateTransactionServiceDTO {
  title: string;
  type: string;
  value: number;
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({
    title,
    type,
    value,
  }: CreateTransactionServiceDTO): Transaction {
    if (type !== 'income' && type !== 'outcome') {
      throw new Error('Invalid transaction type');
    }
    const transaction = new Transaction({ title, type, value });
    const transactionCreated = this.transactionsRepository.create(transaction);

    return transactionCreated;
  }
}

export default CreateTransactionService;
