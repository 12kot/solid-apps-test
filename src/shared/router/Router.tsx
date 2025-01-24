import { ReactElement, Suspense, useState } from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import { routes } from './router.config';
import { ProtectedRoute } from './ProtectedRoute';

import { LoadingModal, PageLoader } from 'shared/components';

import styles from './styles.module.css';

export const Routes = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <main className={styles.container}>
      <LoadingModal setIsOpen={() => setIsOpen((v) => !v)} isOpen={isOpen} />
      <ReactRoutes>
        {Object.keys(routes).map((key) => {
          return (
            <Route
              key={key}
              path={key}
              element={
                <Suspense fallback={<PageLoader />}>
                  <ProtectedRoute>{routes[key].element}</ProtectedRoute>
                </Suspense>
              }
            />
          );
        })}
      </ReactRoutes>
    </main>
  );
};
