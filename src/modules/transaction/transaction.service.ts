import mongoose from 'mongoose'
import { TransactionModel } from './transaction.model'
import { ITransaction } from './transaction.types'
import { AccountService } from '../account/account.service'

const accountService = new AccountService()

export class TransactionService {
  static async create(TransactionData: Omit<ITransaction, string>): Promise<ITransaction> {
    const transaction = new TransactionModel(TransactionData)

    return transaction.save()
  }
  async delete(id: string): Promise<void> {
    await TransactionModel.deleteOne({ _id: id })
  }

  async getById(id: string): Promise<ITransaction | null> {
    return TransactionModel.findById(id).exec()
  }

  async getAll(): Promise<ITransaction[]> {
    return TransactionModel.find().exec()
  }

  async send(from: string, to: string, amount: number): Promise<ITransaction> {
    if (from === to) throw new Error("Can't send to the same account")

    const session = await mongoose.startSession()

    session.startTransaction()

    try {
      const transaction = TransactionService.create({ from: from, to: to, amount: amount })
      await accountService.updateBalance(from, -amount)
      await accountService.updateBalance(to, +amount)

      await session.commitTransaction()

      return transaction
    } catch (error) {
      await session.abortTransaction()
      throw error
    } finally {
      session.endSession()
    }
  }
}
