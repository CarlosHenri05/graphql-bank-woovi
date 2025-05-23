/*
    TO-DO: 

    Add GraphQL queries for users right here
 */

import { AccountService } from './account.service'
import { IAccount } from './account.types'

const accountService = new AccountService()

export const AccountResolvers = {
  Query: {
    account: (_: any, { id }: { id: string }) => accountService.getById(id),
  },
  Mutation: {
    createAccount: (_: any, args: { account: IAccount }) => accountService.create(args.account),
  },
}
