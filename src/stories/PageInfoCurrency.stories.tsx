import type { Meta, StoryObj } from '@storybook/react';

import PageInfoCurrency from '../components/PageInfoCurrency/PageInfoCurrency';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const meta: Meta<typeof PageInfoCurrency> = {
    component: PageInfoCurrency,
    decorators: [
      (Story) => (
        <Provider store={store}>
        <Story />
      </Provider>
      ),
    ]
  };
export default meta;
type Story = StoryObj<typeof PageInfoCurrency>;

export const ErorPage: Story = {
  args: {

  },
};