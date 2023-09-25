import React, { useEffect } from 'react';
import { useLocation, Switch, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import CustomFooter from 'components/CustomFooter/CustomFooter';
import LayoutRoutes from 'routes/layout.routes';
import RoutesHelper from 'helpers/routes.helper';
import { selectTheme } from 'store/theme/theme.slice';
import classnames from 'classnames';
import { useAppSelector } from 'store/hooks';
import styles from './MainLayout.module.scss';

const MainLayout: any = () => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const themeSelected = useAppSelector(selectTheme);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [location]);

  return (
    <>
      <div
        className={classnames(
          styles.MainLayout,
          `${styles.MainLayout} ${styles[themeSelected]}`
        )}
        ref={mainContent}
      >
        <Container className={classnames(styles.MainLayout, 'px-0')} fluid>
          <Switch>
            {RoutesHelper.getRoutes(LayoutRoutes.main.root)}
            <Redirect from="*" to={LayoutRoutes.main.home} />
          </Switch>
        </Container>
      </div>
      <CustomFooter
        className={`${styles.MainLayout} ${styles[themeSelected]}`}
      />
    </>
  );
};

export default MainLayout;
