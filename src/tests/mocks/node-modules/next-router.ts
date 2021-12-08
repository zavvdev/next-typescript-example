jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: '',
    asPath: '',
  }),
}));

const defExp: never[] = [];
export default defExp;
