import { fireEvent, render, screen } from '@testing-library/react';
import { LONG_TEXT } from '../../fixtures';
import ConvertInput from './';

describe('ConvertInput Component', () => {
  it('renders default state', () => {
    render(<ConvertInput />);

    const radioNumber = screen.getByTestId('radio-number');
    const numberInput = screen.getByTestId('user-input-number');
    const textInput = screen.getByTestId('user-input-text');

    expect(radioNumber).toBeChecked();
    expect(numberInput).toBeInTheDocument();
    expect(textInput).toBeDisabled();

    expect(screen.getByTestId('user-table-tokens')).toHaveTextContent('10,000');
    expect(screen.getByTestId('user-table-page-count')).toHaveTextContent(
      '16.7',
    );
    expect(screen.getByTestId('user-table-novel-count')).toHaveTextContent(
      '0.1',
    );
  });

  it('submits token input and displays results', () => {
    render(<ConvertInput />);

    const numberInput = screen.getByTestId('user-input-number');

    fireEvent.change(numberInput, {
      target: { value: '12300' },
    });

    fireEvent.blur(numberInput);

    expect(screen.getByTestId('user-table-tokens')).toHaveTextContent('12,300');
    expect(screen.getByTestId('user-table-page-count')).toHaveTextContent(
      '20.5',
    );
    expect(screen.getByTestId('user-table-novel-count')).toHaveTextContent(
      '0.1',
    );
  });

  it('submits text input and displays results', () => {
    const sampleText = 'This is a test text.';

    render(<ConvertInput />);

    const radioText = screen.getByTestId('radio-text');
    const textInput = screen.getByTestId('user-input-text');

    fireEvent.click(radioText);
    fireEvent.change(textInput, {
      target: { value: sampleText },
    });

    expect(screen.getByTestId('user-table-tokens')).toHaveTextContent('5');
    expect(screen.getByTestId('user-table-page-count')).toHaveTextContent(
      '0.0',
    );
    expect(screen.getByTestId('user-table-novel-count')).toHaveTextContent(
      '0.0',
    );
  });

  it('submits large text input and displays results', () => {
    render(<ConvertInput />);

    const radioText = screen.getByTestId('radio-text');
    const textInput = screen.getByTestId('user-input-text');

    fireEvent.click(radioText);
    fireEvent.change(textInput, {
      target: { value: LONG_TEXT },
    });

    const tokensValue = screen.getByTestId('user-table-tokens');
    expect(tokensValue).toHaveTextContent('5,373');

    const a4PageCountValue = screen.getByTestId('user-table-page-count');
    expect(a4PageCountValue).toHaveTextContent('9.0');

    const a5NovelCountValue = screen.getByTestId('user-table-novel-count');
    expect(a5NovelCountValue).toHaveTextContent('0.1');
  });
});
