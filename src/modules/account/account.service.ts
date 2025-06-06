import { AccountModel } from './account.model'
import { IAccount } from './account.types'

export class AccountService {
  async getAll(): Promise<IAccount[]> {
    return AccountModel.find().exec()
  }

  async getById(id: string): Promise<IAccount | null> {
    return AccountModel.findById(id).exec()
  }

  async create(accountData: IAccount): Promise<IAccount> {
    const account = new AccountModel(accountData)

    return account.save()
  }

  async delete(id: string): Promise<Boolean> {
    const result = await AccountModel.deleteOne({ _id: id })

    return result.deletedCount > 0
  }

  async updateBalance(id: string, amount: number): Promise<Number> {
    const account = await AccountModel.findById(id).exec()

    const currentBalance = account.balance

    const newBalance = currentBalance + amount

    account.balance = newBalance

    await account.save()

    return account.balance
  }
}
