import { Document } from 'mongoose'

export interface IAccount extends Document {
  username: string
  balance: number
}
