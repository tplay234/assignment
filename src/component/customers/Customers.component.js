import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationLink from "../common/NavigationLink";
import api from "../../api/api";

export default function Customers() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        api.getAllCustomers().then(setCustomers);
    }, []);

    function goToCustomerTransactions(customerId) {
        navigate(`/customers/${customerId}/transactions`);
    }

    function goAllTransactions() {
        navigate('/transactions');
    }

    return (
        <>
            <NavigationLink onClick={goAllTransactions}>View all transactions</NavigationLink>
            <div className="text-3xl font-bold mb-3">Customers</div>
            <div className="flex justify-center">
                <ul className="bg-white rounded-lg border border-gray-200 w-full text-gray-900">
                    {customers.map((customer) => (
                        <li
                            key={Math.random()}
                            onClick={() => goToCustomerTransactions(customer.id)}
                            className="px-6 py-2 border-b border-gray-200 w-full cursor-pointer hover:bg-gray-100"
                        >
                            {customer.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
