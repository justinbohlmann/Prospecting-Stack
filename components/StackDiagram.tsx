
import React from 'react';
import CategoryCard from './CategoryCard.tsx';
import { STACK_DATA } from '../constants.ts';
import { CompanySize } from '../types.ts';

interface StackDiagramProps {
  activeFilter: CompanySize | 'any';
}

const StackDiagram: React.FC<StackDiagramProps> = ({ activeFilter }) => {
  return (
    <div
      className="grid gap-4 w-full responsive-grid"
      style={{
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridAutoRows: 'minmax(40px, auto)',
        gridTemplateAreas: `
          ". . video video email-warming email-warming ai-emails . li-automation li-automation job-changers job-changers"
          ". warm-intros warm-intros dialers dialers linkedin signals signals signals deanonymize deanonymize deanonymize"
          "scheduling scheduling conv-intel conv-intel sales-engagement sales-engagement sales-engagement sales-engagement data data intent-data intent-data"
          "lead-routing lead-routing conv-intel conv-intel sales-engagement sales-engagement sales-engagement sales-engagement data data scoring scoring"
          "chat chat crm crm crm crm crm crm crm crm . ."
          "map map crm crm crm crm crm crm crm crm . ."
          "map map reverse-etl reverse-etl data-warehouse data-warehouse data-warehouse data-warehouse bi bi . ."
        `,
      }}
    >
      {STACK_DATA.map((category) => (
        <CategoryCard key={category.title} category={category} activeFilter={activeFilter} />
      ))}
    </div>
  );
};

export default StackDiagram;