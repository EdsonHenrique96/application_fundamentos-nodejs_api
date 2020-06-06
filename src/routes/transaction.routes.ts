import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import GetBalanceService from '../services/GetBalanceService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const getBalanceService = new GetBalanceService(transactionsRepository);
    const balance = getBalanceService.execute();

    return response.json(balance);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, type, value } = request.body;

    const createTransaction = new CreateTransactionService(
      transactionsRepository,
    );

    const transactionCreated = createTransaction.execute({
      title,
      type,
      value,
    });

    return response.status(201).json(transactionCreated);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
