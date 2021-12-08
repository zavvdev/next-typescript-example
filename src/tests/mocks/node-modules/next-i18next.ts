jest.mock('next-i18next', () => {
  const originalModule = jest.requireActual('next-i18next');
  return {
    ...originalModule,
    withTranslation: () => (Component: {
      defaultProps: Record<string, unknown>
    }) => {
      const NextComponent = { ...Component };

      NextComponent.defaultProps = {
        ...Component.defaultProps,
        t: (key: string) => key,
        i18n: {
          language: 'en',
          changeLanguage: jest.fn(),
        },
      };

      return NextComponent;
    },
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        language: 'en',
        changeLanguage: jest.fn(),
      },
    }),
  };
});

const defExp: never[] = [];
export default defExp;
