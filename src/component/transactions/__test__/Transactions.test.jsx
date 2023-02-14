import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import api from "../../../api/api";
import Transactions from "../TransactionsComponent";

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  };
});
describe('Transactions', ()=> {

test('should render a list of transactions', async () => {
  const getAllTransactions = jest.fn().mockResolvedValue([
    { date: 'date___1', amount: 132 },
    { date: 'date___2', amount: 90 },
  ]);
  render(
    <BrowserRouter>
      <Transactions />
    </BrowserRouter>
  );
  expect(await screen.findByText('Date')).toBeVisible();
  expect(await screen.findByText('Date')).toBeVisible();
  expect(await screen.findByText('517.7')).toBeVisible();
  expect(await screen.findByText('901.35')).toBeVisible();
});
test('should navigate to customers page', async () => {
  const getAllTransactions = jest.fn().mockResolvedValue([]);
  render(
    <BrowserRouter>
      <Transactions />
    </BrowserRouter>
  );
  fireEvent.click(await screen.findByText('View All Customers'));
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('/customers');
});

});