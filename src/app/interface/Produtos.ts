export interface Produto {
    id: number;
    name: string;
    image: string;
    description: string;
    type: string;
    size: { size: string; value: string }[] | string;
    ingredients?: string[]; 
  }