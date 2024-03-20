import type { Meta, StoryObj } from '@storybook/react';

import ProductItem from '../components/ProductItem/ProductItem';

const meta: Meta<typeof ProductItem> = {
  component: ProductItem,
};

export default meta;
type Story = StoryObj<typeof ProductItem>;

export const FirstStory: Story = {
  args: {
    cost:200,
    count:2,
    icon:"https://assets.coincap.io/assets/icons/btc@2x.png",
    name:"Bitcoin"
  },
};