
export enum CompanySize {
  Startup = 'startup',
  Scaleup = 'scaleup',
  Enterprise = 'enterprise',
}

export interface Tool {
  name: string;
  note?: string;
  sizes: CompanySize[];
}

export interface Category {
  title: string;
  tools: Tool[];
  gridArea: string;
  bgColor: string;
  textColor: string;
  shadowColor: string;
}
