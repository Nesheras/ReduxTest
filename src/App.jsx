import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreateAddCash, ADD_CASH } from "./store/store";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  function addCash(cash) {
    dispatch(actionCreateAddCash(ADD_CASH, cash));
  }
  function getCash(cash) {
    dispatch({ type: "GET_CASH", payload: cash });
  }
  function addCustomer(name) {
    const customer = {
      name: name,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  }
  function removeCustomer(customer) {
    dispatch({ type: "REMOVE_CUSTOMERS", payload: customer.id });
  }
  return (
    <>
      <button onClick={() => addCash(+prompt())}>пополнить счет</button>
      <button onClick={() => getCash(+prompt())}>снять со счета</button>
      <p>Всего денег {cash}</p>
      <button onClick={() => addCustomer(prompt())}>
        Добавить пользователя
      </button>
      <button onClick={() => dispatch(fetchCustomers())}>
        Получить пользователей
      </button>

      {customers.length == 0 ? (
        <p>Пользователи отсутствуют </p>
      ) : (
        <div>
          {customers.map((elem) => {
            return (
              <p onClick={() => removeCustomer(elem)} key={elem.id}>
                {elem.name}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
