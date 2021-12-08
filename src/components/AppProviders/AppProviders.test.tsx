import { screen } from '@testing-library/react';
import { configureStore } from 'src/store';
import render from 'src/tests/utils/render';
import AppProviders from 'src/components/AppProviders/AppProviders';
import { AppProvidersProps } from 'src/components/AppProviders/AppProviders.types';

const childrenMock = 'children_mock';

const appProvidersProps: AppProvidersProps = {
  store: configureStore(),
  children: (
    <div>{childrenMock}</div>
  ),
};

describe('<AppProviders />', () => {
  test('should render AppProviders component (snapshot)', () => {
    const { asFragment } = render(
      <AppProviders {...appProvidersProps} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should have a children', () => {
    render(<AppProviders {...appProvidersProps} />);
    expect(screen.getByText(childrenMock)).toBeInTheDocument();
  });
});
