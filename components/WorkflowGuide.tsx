import React from 'react';

const ArrowRight: React.FC = () => (
  <svg
    className="w-6 h-6 text-gray-500 mx-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
  </svg>
);

const WorkflowStep: React.FC<{ bgColor: string; children: React.ReactNode }> = ({ bgColor, children }) => (
  <div className={`px-4 py-2 rounded-full font-semibold text-white ${bgColor}`}>
    {children}
  </div>
);


const WorkflowGuide: React.FC = () => {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="flex items-center justify-center flex-wrap gap-2">
        <WorkflowStep bgColor="bg-blue-600/80">Buy first</WorkflowStep>
        <ArrowRight />
        <WorkflowStep bgColor="bg-indigo-600/80">Then this</WorkflowStep>
        <ArrowRight />
        <WorkflowStep bgColor="bg-purple-600/80">Then this</WorkflowStep>
        <ArrowRight />
        <WorkflowStep bgColor="bg-fuchsia-600/80">Then this</WorkflowStep>
      </div>
      <div className="mt-4 p-4 rounded-3xl border border-white/10 bg-gray-800/80 flex flex-col text-sm text-gray-400">
        Marketing or Product Owned
      </div>
    </div>
  );
};

export default WorkflowGuide;