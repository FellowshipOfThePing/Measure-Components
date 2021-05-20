import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

// This below import is what gives us the "toBeInTheDocument" method
import '@testing-library/jest-dom/extend-expect';

// As we are using the Component Story Format we can import it from our
// previously written story.
import { SCButton as TutorialButton } from '../stories/TutorialButton.stories';

describe('TutorialButton', () => {
  it('should render the button without crashing', () => {
    const { getByRole } = render(<TutorialButton text="test" />);
    expect(getByRole('tutorialButton')).toBeInTheDocument();
  });

  it('displays correct text', () => {
    const { getByRole } = render(<TutorialButton text="test" />);
    expect(getByRole('tutorialButton')).toHaveTextContent('test');
  });

  it('should call the onClick method when a user clicks on the button', () => {
    // Mock click event
    const mockClick = jest.fn();
    const { getByRole } = render(<TutorialButton text="test" onClick={mockClick} />);
    fireEvent.click(getByRole('tutorialButton'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('should have the right text color class name for variants', () => {
    const { getByRole, rerender } = render(<TutorialButton text="test" />);
    const buttonElement = getByRole('tutorialButton');

    // Default variant
    expect(buttonElement.classList.contains('text-white')).toBe(true);
    expect(buttonElement.classList.contains('text-red-700')).toBe(false);

    // Warning variant
    rerender(<TutorialButton text={'test'} variant="warning" />);
    expect(buttonElement.classList.contains('text-white')).toBe(false);
    expect(buttonElement.classList.contains('text-red-700')).toBe(true);
  });
});
