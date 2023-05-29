export type NavItems = {
  id: string;
  label: string;
  link: string;
};

export interface NavProps {
  items: NavItems[];
}
