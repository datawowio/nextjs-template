import InputPassword from './InputPassword'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof InputPassword> = {
  component: InputPassword,
  title: 'Components/InputPassword',
}

export default meta

type Story = StoryObj<typeof InputPassword>

export const Default: Story = {
  args: {
    outlinedInputProps: {
      id: 'input-password-default-example',
      label: 'Password',
    },
  },
}

export const Error: Story = {
  args: {
    errorMessage: 'Invalid Password',
    formControlProps: {
      error: true,
    },
    outlinedInputProps: {
      defaultValue: 'invalid password',
      id: 'input-password-error-example',
      label: 'Password',
    },
  },
}
