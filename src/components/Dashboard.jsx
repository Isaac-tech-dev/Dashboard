import React from "react";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div className={`flex flex-col space-y-10 py-12 px-14`}>
      <h2>Dashboard</h2>

      <div className={`flex space-x-8`}>
        <div
          className={`w-[400px] h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600`}
        >
          <span>Isaac Ayeni</span>
          <span className={`text-gray-500`}>Your Balane : N 20,000</span>
        </div>
        <div
          className={`w-[400px] h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600`}
        >
          <span>Isaac Ayeni</span>
          <span className={`text-gray-500`}>Your Expenses : N 5,000</span>
        </div>
        <div></div>
      </div>

      <div className={`flex space-x-8 w-4/5 flex-col`}>
        <h2>Expense Chat</h2>
        <Chart/>
      </div>

      <div className={`flex space-x-8`}>
        <div
          className={`w-[400px] h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600`}
        >
          <span>Your Activity</span>
          <li className={`mt-4`}>You sent N2,000 to your sister</li>
        </div>
        <div
          className={`w-[400px] h-[150px] border rounded flex flex-col justify-center p-4 text-gray-600`}
        >
          <span>Panding Bils</span>
          <li className={`mt-4`}>Internet Subscription: N10,000</li>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
