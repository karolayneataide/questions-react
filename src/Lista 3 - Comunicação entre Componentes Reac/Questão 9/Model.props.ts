export type ModelItems = {
  id: string;
  title: string;
  text: string;
};

export interface ModelsProps {
  models: ModelItems[];
}

export interface ModelProps {
  model: ModelItems;
}
