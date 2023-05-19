import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: [
    "../Lista 1 - Components e Props/**/*.stories.@(js|jsx|ts|tsx)",
    "../Lista 2 - Renderização Condicional/**/*.stories.@(js|jsx|ts|tsx)",
    "../Lista 3 - Manipulação de Eventos/**/*.stories.@(js|jsx|ts|tsx)",
    "../Lista 4 - Listas e Chaves/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
