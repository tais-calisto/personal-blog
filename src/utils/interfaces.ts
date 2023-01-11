export interface Categories {
  name: string;
}

export interface Posts {
  id: string;
  created_at: string;
  title: string;
  resume: string;
  paragraphs: Array<string>;
  category_id: string;
  image: string;
  path: string;
}
