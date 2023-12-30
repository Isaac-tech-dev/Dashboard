import React, { useCallback, useState } from "react";
import Logo from "../assets/logo.png";
import RightArrow from "../assets/icons/rightArrow.svg";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "Dashboard",
    icons: LayoutDashboard,
  },
  {
    name: "Activity",
    icons: Clock3,
  },
  {
    name: "Analytics",
    icons: BarChart2,
  },
  {
    name: "Transactions",
    icons: ArrowRightLeft,
  },
  {
    name: "Help Center",
    icons: HelpCircleIcon,
  },
];

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" },
};

function NavigationBar() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={
        "py-12 border-r-1 flex flex-col border border-r-1 w-1/5 h-screen relative" +
        (isExpanded ? "px-10 relative" : "px-4 relative")
      }
    >
      <div className={`logo-div flex space-x-3 items-center`}>
        <img src={Logo} />
        <span className={isExpanded ? `block` : `hidden`}>Money Tracker</span>
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 bg-[#ff8c8c] rounded-full absolute -right-[10px] top-14 flex items-center justify-center"
      >
        <img src={RightArrow} className="w-[8px]" />
      </div>

      <div className={`mt-10 flex flex-col space-y-8`}>
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex space-x-3 p-2 rounded-sm cursor-pointer" +
              (activeNavIndex === index
                ? " bg-[#ff8c8c] text-white font-semibold"
                : "")
            }
            onClick={() => setActiveNavIndex(index)}
          >
            <item.icons />
            <span className={isExpanded ? `block` : `hidden`}>{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default NavigationBar;
