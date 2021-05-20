import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const variantColors = {
  default: 'bg-measure-dark-blue',
  warning: 'bg-measure-dark-red',
};

const StyledButton = styled.button.attrs(
  ({ variant }: { variant: ButtonVariants }) => ({
    className: `px-6 h-9 font-measure font-normal text-xs text-white ${variantColors[variant]} rounded`,
  })
)<{ variant: ButtonVariants }>``;

type ButtonVariants = 'default' | 'warning';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}

export const Button = ({ text, variant = 'default', ...rest }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {text}
    </StyledButton>
  );
};
