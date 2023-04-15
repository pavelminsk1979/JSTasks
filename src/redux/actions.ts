/*export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}*/

export type ChangeActionType = ReturnType<typeof ChangeActionAC>
export const ChangeActionAC = (isBuying: boolean) => {
    return {
        type: 'CHANGE-ACTION',
        isBuying
    } as const
};


export type ChangeCurrencyFieldType = ReturnType<typeof ChangeCurrencyFieldAC>
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string) => {
    return {
        type: 'CHANGE-CURRENCY-FIELD',
        amountOfBYN,
        amountOfCurrency
    } as const
}


export type ChangeCurrentCurrencyType = ReturnType<typeof СhangeCurrentCurrencyAC>
export const СhangeCurrentCurrencyAC = (currentCurrency: string) => {
    return {
        type: 'CHANGE-CURRENT-CURRENCY',
        currentCurrency,
    } as const
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType
    | ChangeActionType
    | ChangeCurrentCurrencyType;