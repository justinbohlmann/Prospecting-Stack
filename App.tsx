
import React, { useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import StackDiagram from './components/StackDiagram';
import WorkflowGuide from './components/WorkflowGuide';
import { CompanySize } from './types';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CompanySize | 'any'>('any');

  return (
    <div className="bg-[#101010] min-h-screen font-sans p-4 md:p-8 lg:p-12 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <Header />
        <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <StackDiagram activeFilter={activeFilter} />
        <WorkflowGuide />
      </div>
    </div>
  );
};

export default App;
