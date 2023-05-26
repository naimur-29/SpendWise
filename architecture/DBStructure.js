export const users = [
  {
    uid: "<from Auth auto-generated>",
    userId: "<uid>", // key
    username: "<name>",
    profile: "<img/gif url>",
    accounts: [
      {
        alias: "<accountAlias>",
        id: "<userId>.<accountAlias>", // key
      },
      {
        alias: "<accountAlias>",
        id: "<userId>.<accountAlias>", // key
      },
      {
        alias: "<accountAlias>",
        id: "<userId>.<accountAlias>", // key
      },
    ],
  },
];

export const accounts = [
  {
    id: "<userId>.<accountAlias>", // key
    alias: "<accountAlias>",
    currentBalance: 10000,
    currentTimeFrame: "<month><year>",
    histories: [
      "<userId>.<accountAlias>.<month><year>", // key
      "<userId>.<accountAlias>.<month><year>", // key
      "<userId>.<accountAlias>.<month><year>", // key
    ],
  },
];

export const incomeExpenseHistories = [
  {
    id: "<userId>.<accountAlias>.<month><year>", // key
    timeFrame: "<month>, <year>",
    totalIncomeAmount: 1000,
    totalExpenseAmount: 500,
    budgetTarget: 10000,
    incomes: [
      {
        amount: 100,
        context: "<source>",
        dateAdded: "<day>/<month>/<year>",
        stat: "income",
      },
    ],
    expenses: [
      {
        amount: 100,
        context: "<source>",
        dateAdded: "<month>/<day>/<year>",
        stat: "expense",
      },
    ],
  },
];
