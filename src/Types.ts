export type Spending = {
    name: string,
    amount: number,
    date: Date
    id: string
    type?: any,
}


export type SpendingResponse = {
    /*
    * {
    *   "2021-12":{
    *       .....
    *   },
    *   "2022-01":{
    *       .....
    *   },
    * }
    * */
    [key: string]: Spending[]
}

export type SpendingType = {
    name: string
}
export type SpendingTypeResponse = { [n: number]: unknown }

export type  SpendingCountResponse = {
    spendingCount: number
}