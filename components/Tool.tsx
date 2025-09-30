import React from "react";
import { Tool as ToolType, CompanySize } from "../types";

interface ToolProps {
  tool: ToolType;
  activeFilter: CompanySize | "any";
}

const Tool: React.FC<ToolProps> = ({ tool, activeFilter }) => {
  const isVisible = activeFilter === "any" || tool.sizes.includes(activeFilter);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-40"
      }`}
    >
      <span>{tool.name}</span>
      {tool.note && (
        <span className="text-gray-400 text-xs ml-1">{tool.note}</span>
      )}
    </div>
  );
};

export default Tool;
