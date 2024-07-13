import { configureStore } from "@reduxjs/toolkit";

export const ADD_CASH = "ADD_CASH";
export const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER";
export function actionCreateAddCash(type, payload) {
  return {
    type: type,
    payload: payload,
  };
}

const defaultState = {
  cash: 1,
};
const defaultStateCustomer = {
  customers: [],
};

function cashReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
}
function customerReducer(state = defaultStateCustomer, action) {
  switch (action.type) {
    case ADD_MANY_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, ...action.payload],
      };
    case "ADD_CUSTOMER":
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case "REMOVE_CUSTOMERS":
      return {
        ...state,
        customers: state.customers.filter((elem) => elem.id != action.payload),
      };
    default:
      return state;
  }
}
export const store = configureStore({
  reducer: {
    cash: cashReducer,
    customers: customerReducer,
  },
});
