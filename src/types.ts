export type ViewMode = 'guidelines' | 'curriculum';

export interface Module {
  id: string;
  category?: 'css' | 'tailwind' | 'html';
  title: string;
  description: string;
  content: string; // Markdown or simple HTML
  examples: Example[];
  challenge: Challenge;
  groupId?: string;
  groupTitle?: string;
  subModules?: Module[];
}

export interface Example {
  label: string;
  classes: string;
}

export interface Challenge {
  description: string;
  targetClasses: string[]; // classes that must be present (or regex)
}

export interface TaxonomyCategory {
  name: string;
  classes: string[];
}
