import type { Meta, StoryObj } from '@storybook/react';

import InfoSection from '../components/InfoSection/InfoSection';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const meta: Meta<typeof InfoSection> = {
    component: InfoSection,
    decorators: [
      (Story) => (
        <Provider store={store}>
        <Story />
      </Provider>
      ),
    ],
  };

export default meta;
type Story = StoryObj<typeof InfoSection>;

export const FirstStory: Story = {
  args: {
    dataCurrency: {
        icon:"https://assets.coincap.io/assets/icons/btc@2x.png",
        name:"Bitcoin",
        id:"bitcoin",
        marketCapUsd:"2000",
        maxSupply:"2221",
        priceUsd:10000,
        rank:"1",
        supply:"2939",
        symbol:"btc"
    }
  },
};