export type ViewMode = 'curriculum' | 'reference';

export interface Module {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown or simple HTML
  examples: Example[];
  challenge: Challenge;
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
