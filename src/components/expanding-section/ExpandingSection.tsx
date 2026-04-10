import React, { useState } from "react";
import { Button } from "primereact/button";

interface ExpandingSectionProps {
  title?: string;
  children: React.ReactNode;
  expandableContent: React.ReactNode;
}

export default function ExpandingSection({
  title = "Expanding Section",
  children,
  expandableContent,
}: ExpandingSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <Button
          icon={isExpanded ? "pi pi-chevron-up" : "pi pi-chevron-down"}
          rounded
          onClick={toggleExpand}
          className="p-button-text p-button-plain"
        />
      </div>

      {/* Always visible content */}
      <div className="text-gray-700 mb-4">{children}</div>

      {/* Expandable content with smooth height animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="text-gray-700 border-t border-gray-200 pt-4 overflow-y-auto max-h-[500px]">
          {expandableContent}
        </div>
      </div>
    </div>
  );
}
