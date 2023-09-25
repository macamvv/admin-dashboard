/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classnames from 'classnames';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectTheme, setTheme } from 'store/theme/theme.slice';
import styles from './ThemeToggler.module.scss';

const ThemeToggler: React.FC = () => {
  const dispatch = useAppDispatch();
  const themeSelected = useAppSelector(selectTheme);

  useEffect(() => {
    document.documentElement.className = themeSelected;
  }, [themeSelected]);

  const themeToggler = (): void => {
    if (themeSelected === 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  };

  return (
    <div
      data-testid="ThemeToggler"
      className={classnames(
        styles.ThemeToggler,
        'd-flex justify-content-center px-3'
      )}
    >
      <i
        className={classnames(
          'd-flex justify-content-center align-items-center',
          themeSelected === 'light' ? 'fas fa-moon ' : 'fas fa-sun'
        )}
      />
      <i
        className="fas fa-toggle-on d-flex justify-content-center align-items-center cursor-pointer"
        onClick={themeToggler}
      />
    </div>
  );
};

export default React.memo(ThemeToggler);
