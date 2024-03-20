import type { Meta, StoryObj } from '@storybook/react';

import Table from '../components/Table/Table';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const meta: Meta<typeof Table> = {
    component: Table,
    decorators: [
      (Story) => (
        <Provider store={store}>
        <Story />
      </Provider>
      ),
    ],
  };

export default meta;
type Story = StoryObj<typeof Table>;

export const FirstStory: Story = {
  args: {

  },
};