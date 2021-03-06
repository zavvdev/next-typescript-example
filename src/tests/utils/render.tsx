import { ReactElement } from 'react';
import {
  render as rtlRender,
  RenderOptions,
} from '@testing-library/react';
import AppProviders from 'src/components/AppProviders/AppProviders';
import { configureStore } from 'src/store';

interface Options {
  renderOptions?: RenderOptions;
  store?: ReturnType<typeof configureStore>;
}

const createRenderWrapper = (
  options: Options = {},
) => {
  const defaultStore = configureStore();

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <AppProviders store={options.store || defaultStore}>
      {children}
    </AppProviders>
  );

  return wrapper;
};

const render = (
  ui: ReactElement,
  options: Options = {},
) => {
  return {
    ...rtlRender(ui, {
      wrapper: createRenderWrapper(options),
      ...options.renderOptions || {},
    }),
  };
};

export default render;
export { createRenderWrapper };
