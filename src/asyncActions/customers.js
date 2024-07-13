import { actionCreateAddCash, ADD_MANY_CUSTOMER } from "../store/store";

export const fetchCustomers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch(actionCreateAddCash(ADD_MANY_CUSTOMER, json));
        console.log(json);
      });
  };
};
