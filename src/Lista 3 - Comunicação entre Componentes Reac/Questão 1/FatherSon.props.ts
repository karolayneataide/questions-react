export interface TextsProps {
  texts: TextItems[];
}

export interface TextProps {
  text: TextItems;
}

export type TextItems = {
  id: string;
  name: string;
};
