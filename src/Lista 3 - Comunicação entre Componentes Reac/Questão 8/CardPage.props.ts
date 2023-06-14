export type ContentItems = {
  id: string;
  title: string;
  text: string;
};

export interface ContentsProps {
  contents: ContentItems[];
}

export interface ContentProps {
  content: ContentItems;
}
