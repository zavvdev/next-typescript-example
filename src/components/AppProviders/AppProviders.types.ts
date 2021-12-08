import { ReactNode } from 'react';
import { configureStore } from 'src/store';

export interface AppProvidersProps {
  children: ReactNode;
  store: ReturnType<typeof configureStore>;
}
