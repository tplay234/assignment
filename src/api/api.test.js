import * as server from './server';
import api from "./api";

describe('getAllCustomer', () => {
    test('should handle success', async () => {
        server.getCustomers = jest.fn().mockResolvedValue({ data: 123 });
        const customers = await api.getAllCustomers();
        expect(customers).toEqual(123);
        expect(server.getCustomers).toHaveBeenCalledTimes(1);
    });
    test('should handle failure', async () => {
        server.getCustomers = jest.fn().mockRejectedValue(123);
        const customers = await api.getAllCustomers();
        expect(customers).toBeNull();
        expect(server.getCustomers).toHaveBeenCalledTimes(1);
    });
});
describe('getById', () => {
    test('should handle success', async () => {
        server.getCustomerById = jest.fn().mockResolvedValue({ data: 123 });
        const customer = await api.getCustomerById(90);
        expect(customer).toEqual(123);
        expect(server.getCustomerById).toHaveBeenCalledTimes(1);
        expect(server.getCustomerById).toHaveBeenCalledWith(90);
    });
    test('should handle failure', async () => {
        server.getCustomerById = jest.fn().mockRejectedValue(123);
        const customer = await api.getCustomerById(90);
        expect(customer).toBeNull();
        expect(server.getCustomerById).toHaveBeenCalledTimes(1);
        expect(server.getCustomerById).toHaveBeenCalledWith(90);
    });
});

describe('getAllTransactions', () => {
    test('should handle success', async () => {
        server.getTransactions = jest.fn().mockResolvedValue({ data: 123 });
        const transactions = await api.getAllTransactions();
        expect(transactions).toEqual(123);
        expect(server.getTransactions).toHaveBeenCalledTimes(1);
    });
    test('should handle failure', async () => {
        server.getTransactions = jest.fn().mockRejectedValue('anything');
        const transactions = await api.getAllTransactions();
        expect(transactions).toBeNull();
        expect(server.getTransactions).toHaveBeenCalledTimes(1);
    });
});
describe('getByCustomer', () => {
    test('should handle success', async () => {
        server.getTransactionsByCustomer = jest
            .fn()
            .mockResolvedValue({ data: 123 });
        // eslint-disable-next-line testing-library/no-await-sync-query
        const transaction = await api.getByCustomer('id');
        expect(transaction).toEqual(123);
        expect(server.getTransactionsByCustomer).toHaveBeenCalledTimes(1);
        expect(server.getTransactionsByCustomer).toHaveBeenCalledWith('id');
    });
    test('should handle failure', async () => {
        server.getTransactionsByCustomer = jest.fn().mockRejectedValue('anything');
        // eslint-disable-next-line testing-library/no-await-sync-query
        const transaction = await api.getByCustomer('id');
        expect(transaction).toBeNull();
        expect(server.getTransactionsByCustomer).toHaveBeenCalledTimes(1);
        expect(server.getTransactionsByCustomer).toHaveBeenCalledWith('id');
    });
});
