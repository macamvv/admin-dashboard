import classnames from 'classnames';
import React from 'react';
import { Col, Nav, NavItem, NavLink, Row } from 'reactstrap';
import styles from './CustomFooter.module.scss';

const CustomFooter: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (customFooterProps: any) => {
  const { className, ...res } = customFooterProps;

  const itens = [
    {
      text: 'About Us',
      link: 'https://learn.factoryfour.com/features/platform/',
    },
    {
      text: 'Help',
      link: 'https://learn.factoryfour.com/user-guides/getting-started/',
    },
    {
      text: 'FAQ',
      link: 'https://learn.factoryfour.com/user-guides/faqs/',
    },
  ];
  return (
    <footer
      data-testid="CustomFooter"
      className={classnames(
        'py-3 position-fixed container justify-content-end ',
        styles.CustomFooter,
        className
      )}
      {...res}
    >
      <Row className="align-items-center justify-content-xl-between m-0">
        <Col md="6" xs="5" className="pl-md-4">
          <div className={classnames('copyright text-left  text-md-left')}>
            © {new Date().getFullYear()}{' '}
            <a
              className="font-weight-bold ml-1"
              href="https://learn.factoryfour.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Factory
            </a>
          </div>
        </Col>

        <Col md="6" xs="7" className="pr-md-4 ">
          <Nav
            className={classnames(
              'nav-footer  justify-content-end justify-content-md-end  m-0 '
            )}
          >
            {itens.map((item, index) => (
              <NavItem key={`custom-footer-item-${index}`}>
                <NavLink
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="p-0 "
                >
                  <p className=" m-0 pr-xs-1 pr-md-2 text-muted">
                    {' '}
                    {item.text}
                  </p>
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default React.memo(CustomFooter);
