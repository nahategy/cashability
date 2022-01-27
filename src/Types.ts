export type Spending = {
    name: string,
    amount: number,
    date: Date
    type?: any,
    id?: string
}


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
export type SpendingResponse = {
    [key: string]: Spending[]
}
