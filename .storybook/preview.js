import International from "../src";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      const locale = {
        type: 'de',
        dictionary: {
          text: 'Hallo!',
          nested: {
            text: 'Hallo nochmal!',
          },
          substitution: 'I have come here to chew %{variable_1} and kick %{variable_2}... and I\'m all out of %{variable_1}.',
        },
      };
      return (
          <International locale={locale}><Story /></International>
      )
    }
  ],
};

export default preview;
