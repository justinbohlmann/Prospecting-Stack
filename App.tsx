import React, { useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import StackDiagram from "./components/StackDiagram";
import WorkflowGuide from "./components/WorkflowGuide";
import { CompanySize } from "./types";

const App: React.FC = () => {
  console.log("App component rendering...");

  const [activeFilter, setActiveFilter] = useState<CompanySize | "any">("any");

  try {
    return (
      <div className="bg-[#101010] min-h-screen font-sans p-4 md:p-8 lg:p-12 flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <Header />
          <Filter
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <StackDiagram activeFilter={activeFilter} />
          <WorkflowGuide />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in App component:", error);
    return (
      <div
        style={{
          color: "red",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>Error in App component</h2>
        <p>{error.message}</p>
      </div>
    );
  }
};

export default App;
