import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import './tailwind.css';

const StyledButton = styled.button.attrs(
  ({ variant }: { variant: TutorialButtonVariants }) => ({
    className: `px-8 py-2 font-semibold ${
      variant === 'default' ? 'text-white' : 'text-red-700'
    } transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`,
  })
)<{ variant: TutorialButtonVariants }>``;

type TutorialButtonVariants = 'default' | 'warning';
export interface TutorialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: TutorialButtonVariants;
}

export const TutorialButton: FC<TutorialButtonProps> = ({
  text,
  variant = 'default',
  ...rest
}) => {
  return (
    <StyledButton variant={variant} role="tutorialButton" {...rest}>
      {text}
    </StyledButton>
  );
};
