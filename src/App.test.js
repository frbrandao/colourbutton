import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button');
  
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('disabled=> Change to red');

});

test('button has been fired', () => {
  render(<App />);

  const onClick = jest.fn();

  // find an element with a role of button
  const colorButton = screen.getByRole('button');

  // click button
  fireEvent.click(colorButton);

  // expect the button have been called
  expect(onClick).toHaveBeenCalledTimes(1);

});
