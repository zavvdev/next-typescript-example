import { screen } from '@testing-library/react';
import render from 'src/tests/utils/render';
import Header from 'src/components/Header/Header';

describe('<Header />', () => {
  test('should render Header component (snapshot)', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should have language switch', () => {
    render(<Header />);
    expect(screen.getByText('en')).toBeInTheDocument();
    expect(screen.getByText('ru')).toBeInTheDocument();
  });
});
