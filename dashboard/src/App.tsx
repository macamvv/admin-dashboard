import classnames from 'classnames';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutRoutes from 'routes/layout.routes';
import styles from 'scss/App.module.scss';
import { useAppSelector } from 'store/hooks';
import { selectTheme } from 'store/theme/theme.slice';

const App: React.FC = () => {
  const themeSelected = useAppSelector(selectTheme);
  const removeLoaderIndex = (): void => {
    const divLoaderIndex = document.getElementById('divLoaderIndex');
    if (divLoaderIndex) {
      divLoaderIndex.classList.add('available');
      setTimeout(() => {
        if (divLoaderIndex.parentNode) {
          divLoaderIndex.outerHTML = '';
        }
      }, 2000);
    }
  };

  React.useEffect(() => {
    removeLoaderIndex();
  }, []);

  return (
    <div
      className={classnames(
        styles.App,
        `${styles.MainLayout} ${styles[themeSelected]}`
      )}
      data-testid="App"
    >
      <Router>
        <Switch>
          <Route path={LayoutRoutes.main.root} render={() => <MainLayout />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
