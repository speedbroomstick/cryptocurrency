import type { Meta, StoryObj } from '@storybook/react';

import Chart from '../components/Chart/Chart';

const meta: Meta<typeof Chart> = {
  component: Chart,
};

export default meta;
type Story = StoryObj<typeof Chart>;

export const ChartIncreasing: Story = {
  args: {
    data:[
        {
            priceUsd:"87",
            date:"15:00"
        },
        {
            priceUsd:"104",
            date:"16:00"
        },
        {
            priceUsd:"200",
            date:"17:00"
        },
    ]
  },
};

export const ChartFalling: Story = {
  args: {
    data:[
        {
            priceUsd:"87",
            date:"15:00"
        },
        {
            priceUsd:"85",
            date:"16:00"
        },
        {
            priceUsd:"81",
            date:"17:00"
        },
    ]
  },
};