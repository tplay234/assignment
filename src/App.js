import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Customers from "./component/customers/Customers.component";
import Transactions from "./component/transactions/TransactionsComponent";
import CustomerTransactions from "./component/customers/CustomerTransactionComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Customer Offer Calculator</h4>
      </header>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Customers />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route
                    path="/customers/:customerId/transactions"
                    element={<CustomerTransactions />}
                />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
