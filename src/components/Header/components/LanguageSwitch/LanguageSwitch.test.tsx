import render from 'src/tests/utils/render';
import LanguageSwitch from 'src/components/Header/components/LanguageSwitch/LanguageSwitch';

describe('<LanguageSwitch />', () => {
  test('should render LanguageSwitch component (snapshot)', () => {
    const { asFragment } = render(<LanguageSwitch />);
    expect(asFragment()).toMatchSnapshot();
  });
});
