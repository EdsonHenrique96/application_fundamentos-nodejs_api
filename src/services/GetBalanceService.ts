import TransactionsRepository from '../repositories/TransactionsRepository';

class GetBalanceService {
  private transactionRepository: TransactionsRepository;

  constructor(transactionRepository: TransactionsRepository) {
    this.transactionRepository = transactionRepository;
  }

  public execute(): any {
    const transactions = this.transactionRepository.all();
    const balance = this.transactionRepository.getBalance();

    return { transactions, balance };
  }
}

export default GetBalanceService;
