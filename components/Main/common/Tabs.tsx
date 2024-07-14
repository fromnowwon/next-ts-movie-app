"use client";
import { useState } from "react";
import { Tab } from "@/types/MovieTypes";

interface TabsProps {
  tabData: Tab[];
  onSelect: (index: number) => void;
}

export default function Tabs({ tabData, onSelect }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    onSelect(index);
  };

  return (
    <div className="flex gap-4">
      {tabData &&
        tabData.map((tab, index) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(index)}
            className={`relative pr-5 cursor-pointer text-3xl hover:text-primary transition-colors ease-linear ${
              selectedTab === index ? "text-primary" : ""
            }`}
          >
            {tab.title}
            {index !== tabData.length - 1 ? (
              <span className="absolute right-0 top-[6px] w-[2px] h-7 bg-slate-300"></span>
            ) : null}
          </div>
        ))}
    </div>
  );
}
