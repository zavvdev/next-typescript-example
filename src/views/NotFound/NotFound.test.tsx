import { screen } from '@testing-library/react';
import render from 'src/tests/utils/render';
import NotFound from 'src/views/NotFound/NotFound.view';

describe('<NotFound />', () => {
  test('should render NotFound view (snapshot)', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should have http code', () => {
    render(<NotFound />);
    expect(screen.getByText('code')).toBeInTheDocument();
  });

  test('should have a text', () => {
    render(<NotFound />);
    expect(screen.getByText('text')).toBeInTheDocument();
  });

  test('should have a Home button', () => {
    render(<NotFound />);
    expect(screen.getByText('buttons.home')).toBeInTheDocument();
  });
});
