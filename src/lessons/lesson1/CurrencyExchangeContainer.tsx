import React from 'react';
import {CurrencyEContainer} from "../../containers/CurrencyExchangeContainer/CurrencyEContainer";
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "../../redux/state";
import {CurrencyType} from "../../redux/currencyReducer";
import {ChangeActionAC, ChangeCurrencyFieldAC, СhangeCurrentCurrencyAC} from "../../redux/actions";



export const CurrencyExchangeContainer = () => {

    const dispatch = useDispatch()

    const currencies=useSelector<IGlobalState,Array<CurrencyType>>(
        state => state.currency.currencies )

    const currentCurrency=useSelector<IGlobalState,string>(
        state => state.currency.currentCurrency)

    const isBuying=useSelector<IGlobalState,boolean>(
        state => state.currency.isBuying)

    const amountOfBYN=useSelector<IGlobalState,string>(
        state =>state.currency.amountOfBYN )

    const amountOfCurrency=useSelector<IGlobalState,string>(
        state =>state.currency.amountOfCurrency )

    const setCurrencyAmountHandler=(amountOfBYN: string, amountOfCurrency: string) =>{
        dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
    }

    const setActionHandler=(isBuying: boolean)=> {
        dispatch(ChangeActionAC(isBuying));
    }

    const changeCurrencyHandler=(currency: string)=> {
        dispatch(СhangeCurrentCurrencyAC(currency));
    }

  return(
      <CurrencyEContainer
          currencies={currencies}
          currentCurrency={currentCurrency}
          isBuying={isBuying}
          amountOfBYN={amountOfBYN}
          amountOfCurrency={amountOfCurrency}
          setCurrencyAmount={setCurrencyAmountHandler}
          setAction={setActionHandler}
          changeCurrency={changeCurrencyHandler}
      />
  )
}

