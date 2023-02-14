import { useEffect, useState } from 'react';
import TransactionsTable from './TransactionsTable';
import { useNavigate } from 'react-router-dom';
import NavigationLink from "../common/NavigationLink";
import api from "../../api/api";

export default function Transactions() {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        api.getAllTransactions().then(setTransactions);
    }, []);

    function goToCustomers() {
        navigate('/customers');
    }

    return (
        <>
            <NavigationLink onClick={goToCustomers}>View All Customers</NavigationLink>
            <div className="text-3xl font-bold mb-3">All transactions</div>
            <TransactionsTable transactions={transactions} />
        </>
    );
}
