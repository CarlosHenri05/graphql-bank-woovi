import { Schema, model } from 'mongoose'
import { ITransaction } from './transaction.types'

export const transactionSchema = new Schema<ITransaction>({
  from: { type: String, required: true },
  to: { type: String, required: true },
  amount: { type: Number, required: true },
})

export const TransactionModel = model<ITransaction>('Transaction', transactionSchema)
