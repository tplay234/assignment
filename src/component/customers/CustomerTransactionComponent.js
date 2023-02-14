import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavigationLink from "../common/NavigationLink";
import TransactionsSummary from "../transactions/TransactionsSummaryComponet";
import TransactionsTable from "../transactions/TransactionsTable";
import api from "../../api/api";

export default function CustomerTransactions() {
    const navigate = useNavigate();
    const { customerId } = useParams();
    const [customer, setCustomer] = useState(null);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const id = Number(customerId);
        if (id) {
            api.getCustomerById(id).then(setCustomer);
            api.getByCustomer(id).then(setTransactions);
        }
    }, [customerId]);

    function goToCustomers() {
        navigate('/customers');
    }

    function goToAllTransactions() {
        navigate('/transactions');
    }

    if (!customer) {
        return null;
    }

    return (
        <>
            <div className="flex justify-between w-96">
                <NavigationLink onClick={goToCustomers}>View all customers</NavigationLink>
                <NavigationLink onClick={goToAllTransactions}>View all transactions</NavigationLink>
            </div>
            <TransactionsSummary transactions={transactions} customer={customer} />
            <TransactionsTable transactions={transactions} />
        </>
    );
}
