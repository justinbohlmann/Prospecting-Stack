
import React from 'react';
import { Category, CompanySize } from '../types.ts';
import Tool from './Tool.tsx';

interface CategoryCardProps {
  category: Category;
  activeFilter: CompanySize | 'any';
}

const TAILWIND_COLOR_MAP: { [key: string]: string } = {
  'fuchsia-500': '#d946ef',
  'violet-500': '#8b5cf6',
  'indigo-500': '#6366f1',
  'indigo-400': '#818cf8',
  'blue-400': '#60a5fa',
  'gray-500': '#6b7280',
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category, activeFilter }) => {
  const shadowColorValue = TAILWIND_COLOR_MAP[category.shadowColor] || 'transparent';

  const cardStyle: React.CSSProperties = {
    gridArea: category.gridArea,
    boxShadow: `0 0 15px -3px ${shadowColorValue}, inset 0 0 8px -2px ${shadowColorValue}`,
  };

  return (
    <div
      style={cardStyle}
      className={`rounded-xl p-4 flex flex-col gap-2 border border-white/10 ${category.bgColor}`}
    >
      <h3 className={`font-bold text-lg ${category.textColor}`}>{category.title}</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-x-4 gap-y-1 text-sm text-gray-300">
        {category.tools.length > 0 ? (
          category.tools.map((tool) => (
            <Tool key={tool.name} tool={tool} activeFilter={activeFilter} />
          ))
        ) : (
          <div className="h-full w-full min-h-[1rem]"></div> // Empty state for categories with no tools
        )}
      </div>
    </div>
  );
};

export default CategoryCard;