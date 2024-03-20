import type { Meta, StoryObj } from '@storybook/react';

import CustomInput from '../components/CustomInput/CustomInput';

const meta: Meta<typeof CustomInput> = {
  component: CustomInput,
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

export const FirstStory: Story = {
  args: {
    placeholder:"Write this..."
  },
};