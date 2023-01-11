import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button ui component', function () {
  it('should render a button ui element successfully', function () {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });

  it('should not disable the Button ui element by default and fire onClick successfully', async function () {
    const state = false;
    const fn = jest.fn();
    render(<Button disabled={state} onClick={fn} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(button).toBeEnabled();
    expect(fn).toBeCalledTimes(1);
  });

  it('should disable the Button ui element and prevent onClick from firing successfully', async function () {
    const state = true;
    const fn = jest.fn();
    render(<Button disabled={state} onClick={fn} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(button).toBeDisabled();
    expect(fn).toBeCalledTimes(0);
  });

  it('should change the size of the Button ui element successfully', function () {
    const sizeProps = 'small' || 'medium' || 'large';
    render(<Button size={sizeProps} />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });

  it('should fire onClick successfully', async function () {
    const fn = jest.fn();
    render(<Button onClick={fn} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(fn).toBeCalledTimes(1);
  });

  it('should pass a ref through the Button ui element to its child successfully', function () {
    const fn = jest.fn();
    render(<Button ref={fn} />);
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });
});
