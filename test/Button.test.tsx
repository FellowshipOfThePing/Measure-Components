import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

// This below import is what gives us the "toBeInTheDocument" method
import '@testing-library/jest-dom/extend-expect';

// As we are using the Component Story Format we can import it from our
// previously written story.
import { SCButton as Button } from '../stories/Button.stories';

describe('Button', () => {
  it('should render the button without crashing', () => {
    const { getByRole } = render(<Button text="test" />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('displays correct text', () => {
    const { getByRole } = render(<Button text="test" />);
    expect(getByRole('button')).toHaveTextContent('test');
  });

  it('should call the onClick method when a user clicks on the button', () => {
    // Mock click event
    const mockClick = jest.fn();
    const { getByRole } = render(<Button text="test" onClick={mockClick} />);
    fireEvent.click(getByRole('button'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('should have the right text color class name for variants', () => {
    const { getByRole, rerender } = render(<Button text="test" />);
    const buttonElement = getByRole('button', { name: 'test' });

    // Default variant
    expect(buttonElement.classList.contains('bg-measure-dark-blue')).toBe(true);
    expect(buttonElement.classList.contains('bg-measure-dark-red')).toBe(false);

    // Warning variant
    rerender(<Button text={'test'} variant="warning" />);
    expect(buttonElement.classList.contains('bg-measure-dark-red')).toBe(true);
    expect(buttonElement.classList.contains('bg-measure-dark-blue')).toBe(false);
  });
});
