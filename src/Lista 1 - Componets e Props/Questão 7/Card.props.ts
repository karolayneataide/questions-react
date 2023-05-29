export type CardItems = {
  id: string;
  image: string;
  label: string;
  price: number;
};

export interface CardProps {
  items: CardItems[];
}
