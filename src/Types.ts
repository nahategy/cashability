export type Spending = {
    name: string,
    amount: number,
    date: Date
    type?: any,
    id?: string
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

export type SpendingType = {}
export type SpendingTypeResponse = [SpendingType]
