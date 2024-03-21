import type { Meta, StoryObj } from '@storybook/react';

import CustomButton from '../components/CustomButton/CustomButton';
import { QqOutlined } from '@ant-design/icons';

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const LargeButton: Story = {
  args: {
    content:"Click",
    icon:<QqOutlined />,
    size:"large"
  },
};
export const MiddleButton: Story = {
  args: {
    content:"Click",
    icon:<QqOutlined />,
    size:"middle"
  },
};
export const SmallButton: Story = {
  args: {
    content:"Click",
    icon:<QqOutlined />,
    size:"small"
  },
};