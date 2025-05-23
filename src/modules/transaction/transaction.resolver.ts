import { TransactionService } from './transaction.service'

const transactionService = new TransactionService()

export const TransactionResolvers = {
  Mutation: {
    sendTransaction: (_: any, args: { from: string; to: string; amount: number }) => transactionService.send(args.from, args.to, args.amount),
  },
}
