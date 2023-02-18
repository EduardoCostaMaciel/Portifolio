export type IPropsData = {
  id: number;
  name: string;
  html_url: string;
  homepage?: string;
  topics: object[] | null;
};

export type IPropsRepo = {
  id: number;
  name: string;
  urlPage?: string;
  urlRepo: string;
  tags: object[] | null;
};
