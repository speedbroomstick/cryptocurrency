import type { Meta, StoryObj } from '@storybook/react';

import ModalWindow from '../components/ModalWindow/ModalWindow';

const meta: Meta<typeof ModalWindow> = {
    component: ModalWindow,
  };

export default meta;
type Story = StoryObj<typeof ModalWindow>;

export const FirstStory: Story = {
  args: {
    open:true,
    title:"Example",
    children: <p>Some kind children</p>
  },
};