import React from 'react';
import bn from '../../utils/bemnames';
import { Breadcrumb, BreadcrumbItem, Button, Navbar } from 'reactstrap';
import Typography from '../Typography/Typography';

const bem = bn.create('page');

interface Props {
  tag?: any;
  title?: string | React.ReactElement;
  className?: string;
  children?: any;
  breadcrumbs?: {
    name: string,
    active: boolean,
  }[];
  handleLogout: (event: any) => void;
}

const Page: React.FC<Props> = ({
  breadcrumbs,
  className,
  children,
  tag: Tag = 'div',
  title = '',
  handleLogout,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);

  return (
    <Tag className={classes} {...restProps}>

      <div className={bem.e('header')}>
        {breadcrumbs && (
          <Breadcrumb className={bem.e('breadcrumb')}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            {breadcrumbs.length &&
              breadcrumbs.map(({ name, active }, index) => (
                <BreadcrumbItem key={index} active={active}>
                  {name}
                </BreadcrumbItem>
              ))}
          </Breadcrumb>
        )}
        <Navbar>
          {title && typeof title === 'string' ? (
            <Typography type="h1" className={bem.e('title')}>
              {title}
            </Typography>
          ) : (
            title
          )}
          <Button style={{ float: "right" }} onClick={handleLogout}>
            Logout
          </Button>
        </Navbar>
      </div>
      {children}
    </Tag>
  );
};

export default Page;
