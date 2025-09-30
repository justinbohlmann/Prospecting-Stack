
import React from 'react';
import { CompanySize } from '../types.ts';

interface FilterProps {
  activeFilter: CompanySize | 'any';
  setActiveFilter: (filter: CompanySize | 'any') => void;
}

const FilterButton: React.FC<{
  label: string;
  sublabel: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, sublabel, isActive, onClick }) => {
  const activeClasses = 'bg-fuchsia-600/80 ring-2 ring-fuchsia-400';
  const inactiveClasses = 'bg-gray-800/80 hover:bg-gray-700/80';

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-all duration-300 text-white ${isActive ? activeClasses : inactiveClasses}`}
    >
      <span className="font-bold">{label}</span>
      {sublabel && <span className="text-xs text-gray-300 ml-2">{sublabel}</span>}
    </button>
  );
};


const Filter: React.FC<FilterProps> = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
      <span className="text-lg text-gray-400">Best tools for:</span>
      <div className="flex items-center justify-center flex-wrap gap-2">
        <FilterButton label="Any" sublabel="" isActive={activeFilter === 'any'} onClick={() => setActiveFilter('any')} />
        <FilterButton label="Startup" sublabel="< 2 reps" isActive={activeFilter === CompanySize.Startup} onClick={() => setActiveFilter(CompanySize.Startup)} />
        <FilterButton label="Scaleup" sublabel="2-25 reps" isActive={activeFilter === CompanySize.Scaleup} onClick={() => setActiveFilter(CompanySize.Scaleup)} />
        <FilterButton label="Enterprise" sublabel="25+ reps" isActive={activeFilter === CompanySize.Enterprise} onClick={() => setActiveFilter(CompanySize.Enterprise)} />
      </div>
    </div>
  );
};

export default Filter;