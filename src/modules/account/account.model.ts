import { Model, Schema, model } from 'mongoose'
import { IAccount } from './account.types'

const accountSchema = new Schema<IAccount>({
  username: { type: String, required: true },
  balance: { type: Number, required: true, default: 0 },
})

export const AccountModel = Model<IAccount>
