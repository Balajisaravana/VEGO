import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MainErrorFallback } from '../components/errors/main';

type AppProviderProps = {
  children: React.ReactNode;
};

 export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div>
          {/* <Spinner /> */}
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback} >
      {children}
      </ErrorBoundary>
    </React.Suspense>
  );
};


