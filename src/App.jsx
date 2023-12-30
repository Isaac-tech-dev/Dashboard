import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  return (
    <>
      <div className="w-full flex">
        {/* Navigation Bar */}
        <NavigationBar />
        {/* Main Component  */}
        <main className="flex grow">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
