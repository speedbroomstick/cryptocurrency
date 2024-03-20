import type { Meta, StoryObj } from '@storybook/react';

import Header from '../components/Header/Header';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const meta: Meta<typeof Header> = {
    component: Header,
    decorators: [
      (Story) => (
        <Provider store={store}>
        <Story />
      </Provider>
      ),
    ],
  };

export default meta;
type Story = StoryObj<typeof Header>;

export const FirstStory: Story = {
  args: {
    
  },
};