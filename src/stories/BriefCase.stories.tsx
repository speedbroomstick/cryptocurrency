import type { Meta, StoryObj } from '@storybook/react';

import BriefCase from '../components/BriefCase/BriefCase';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const meta: Meta<typeof BriefCase> = {
    component: BriefCase,
    decorators: [
      (Story) => (
        <Provider store={store}>
        <Story />
      </Provider>
      ),
    ],
  };

export default meta;
type Story = StoryObj<typeof BriefCase>;

export const FirstStory: Story = {
  args: {

  },
};