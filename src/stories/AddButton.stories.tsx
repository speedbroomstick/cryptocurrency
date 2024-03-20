import type { Meta, StoryObj } from '@storybook/react';

import AddButton from '../components/AddButton/AddButton';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const meta: Meta<typeof AddButton> = {
  component: AddButton,
  decorators: [
    (Story) => (
      <Provider store={store}>
      <Story />
    </Provider>
    ),
  ],
};


export default meta;
type Story = StoryObj<typeof AddButton>;

export const FirstStory: Story = {
  args: {

  },
};