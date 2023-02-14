import {getCustomerById, getCustomers, getTransactions, getTransactionsByCustomer} from "./server";

export default class api {
    static async getAllCustomers() {
        try {
            const result = await getCustomers();
            return result.data;
        } catch (e) {
            return null;
        }
    }
    static async getCustomerById(id) {
        try {
            const result = await getCustomerById(id);
            return result.data;
        } catch (e) {
            return null;
        }
    }
    static async getAllTransactions() {
        try {
            const result = await getTransactions();
            return result.data;
        } catch (e) {
            return null;
        }
    }
    static async getByCustomer(id) {
        try {
            const result = await getTransactionsByCustomer(id);
            return result.data;
        } catch (e) {
            return null;
        }
    }
}
