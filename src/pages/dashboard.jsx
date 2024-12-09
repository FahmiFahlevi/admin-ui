import Card from "../components/Elements/Card";
import { Icon } from "../components/Elements/Icon";
import CardBalance from "../components/Fragment/Dashboard/CardBalance";
import CardGoal from "../components/Fragment/Dashboard/CardGoal";
import CardStatistic from "../components/Fragment/Dashboard/CardStatistic";
import MainLayout from "../components/Layouts/MainLayout";
import bills from "../data/bills";
import expensesBreakdowns from "../data/expense";
import transactions from "../data/transaction";

const DashboardPage = () => {
  const tabs = ["All", "Revenue", "Expense"];

  const billCard = bills.map((bill) => (
    <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
      <div className="flex">
        <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
          <span className="text-xs">{bill.month}</span>
          <span className="text-2xl font-bold">{bill.date}</span>
        </div>
        <div className="">
          <img className="h-6" src={`/images/${bill.logo}`} />
          <span className="font-bold">{bill.name}</span>
          <br />
          <span className="text-xs">Last Charge - {bill.lastCharge} </span>
        </div>
      </div>
      <div className="flex place-content-center flex-col">
        <span className="p-2 border rounded-lg font-bold text-center">${bill.amount}</span>
      </div>
    </div>
  ));

  const expenseCard = expensesBreakdowns.map((expensesBreakdowns) => (
    <div key={expensesBreakdowns.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">{expensesBreakdowns.icon}</div>
        <div className="ms-4">
          <span className="text-gray-02">{expensesBreakdowns.category}</span>
          <br />
          <span className="font-bold text-lg">${expensesBreakdowns.amount}</span>
          <div className="flex">
            <span className="text-gray-02">{expensesBreakdowns.percentage}%*</span>
            {""}
            {expensesBreakdowns.arrow}
          </div>
        </div>
      </div>
      <div className="flex place-content-center flex-col me-8">
        <Icon.ArrowRight />
      </div>
    </div>
  ));

  const transactionCard = transactions.map((transactions) => (
    <div key={transactions.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">{transactions.icon}</div>
        <div className="ms-4">
          <span className="text-xl font-bold">{transactions.transactionName}</span>
          <br />
          <span className="text-gray-02">{transactions.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">${transactions.amount}</span>
        <br />
        <span className="text-gray-02">{transactions.date}</span>
      </div>
    </div>
  ));

  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardBalance />
        <CardGoal />
        <Card title="Upcoming Bill" desc={billCard} />
        <div className="md:col-span-1">
          <Card
            variant="md:col-span-1 md:row-span-2"
            title="Recent Transaction"
            desc={
              <div>
                <div className="mb-4">
                  {tabs.map((tab) => (
                    <button key={tab} className="px-4 font-bold text-gray-01" value={tab}>
                      {tab}
                    </button>
                  ))}
                </div>
                {transactionCard}
              </div>
            }
          />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <CardStatistic />
          <Card variant="md:col-span-2" title="Expenses Breakdown" desc={<div className="lg:grid lg:grid-cols-3">{expenseCard}</div>} />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
