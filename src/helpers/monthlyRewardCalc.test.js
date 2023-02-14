import monthlyRewardCalc from './monthlyRewardCalc';

describe('<MonthlyRewardCalc />', () => {
  test('should split transactions per month', () => {
    const transactions = [
      {date: '02/19/2023', amount: 50},
      {date: '02/12/2023', amount: 100},
      {date: '01/10/2023', amount: 75},
      {date: '12/20/2022', amount: 45},
      {date: '12/15/2022', amount: 25},
      {date: '11/11/2022', amount: 120},
    ];
    const result = monthlyRewardCalc(transactions);
    expect(result).toEqual([
      {
        label: 'Feb 2023',
        list: [
          {date: '02/19/2023', amount: 50},
          {date: '02/12/2023', amount: 100},
        ],
        reward: '50.00',
      },
      {
        label: 'Jan 2023',
        list: [{date: '01/10/2023', amount: 75}],
        reward: '25.00',
      },
      {
        label: 'Dec 2022',
        list: [
          {date: '12/20/2022', amount: 45},
          {date: '12/15/2022', amount: 25},
        ],
        reward: '0.00',
      },
      {
        label: 'Nov 2022',
        list: [{date: '11/11/2022', amount: 120}],
        reward: '90.00',
      },
    ]);
  });
});