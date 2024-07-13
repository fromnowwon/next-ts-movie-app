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
    <div className="flex gap-7">
      {tabData &&
        tabData.map((tab, index) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer text-3xl hover:text-primary ${
              selectedTab === index ? "text-primary" : ""
            }`}
          >
            {tab.title}
          </div>
        ))}
    </div>
  );
}
