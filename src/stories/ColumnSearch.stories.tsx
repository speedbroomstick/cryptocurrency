import type { Meta, StoryObj } from '@storybook/react';

import ColumnSearch from '../components/ColumnSearch/ColumnSearch';

const meta: Meta<typeof ColumnSearch> = {
  component: ColumnSearch,
};

export default meta;
type Story = StoryObj<typeof ColumnSearch>;

export const FirstStory: Story = {
  args: {

  },
};