import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import api from "../../api/api";
import Customers from "./Customers.component";

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  };
});
describe('', () => {
test('should render a list of customers', async () => {
     const getAllCustomers = jest
    .fn()
    .mockResolvedValue([{ name: 'alibaba' }, { name: 'aladdin' }]);
  render(
    <BrowserRouter>
      <Customers />
    </BrowserRouter>
  );
  expect(await screen.findByText('Jay Patel')).toBeVisible();
  expect(await screen.findByText('John Shan')).toBeVisible();
  expect(getAllCustomers).toHaveBeenCalledTimes(0);
});
test('should navigate to customer transactions page', async () => {
  const getAllCustomers = jest
    .fn()
    .mockResolvedValue([{ id: 'idx', name: 'alibaba' }, { name: 'aladdin' }]);
  render(
    <BrowserRouter>
      <Customers />
    </BrowserRouter>
  );
  fireEvent.click(await screen.findByText('Jay Patel'));
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('/customers/1/transactions');
});
test('should navigate to all transactions page', async () => {
  const getAllCustomers = jest.fn().mockResolvedValue([]);
  render(
    <BrowserRouter>
      <Customers />
    </BrowserRouter>
  );
  fireEvent.click(await screen.findByText('View all transactions'));
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('/transactions');
});
});