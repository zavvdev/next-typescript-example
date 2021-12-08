import React from 'react';
import { Provider } from 'react-redux';
import { AppProvidersProps } from 'src/components/AppProviders/AppProviders.types';

const AppProviders = (props: AppProvidersProps) => {
  const {
    children,
    store,
  } = props;

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default AppProviders;
