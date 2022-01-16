import React from 'react';
import bn from '../../utils/bemnames';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
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
  }[],
}

const Page: React.FC<Props> = ({
  breadcrumbs,
  className,
  children,
  tag: Tag = 'div',
  title = '',
  ...restProps
}) => {
  const classes = bem.b('px-3', className);

  return (
    <Tag className={classes} {...restProps}>
      <div className={bem.e('header')}>
        {title && typeof title === 'string' ? (
          <Typography type="h1" className={bem.e('title')}>
            {title}
          </Typography>
        ) : (
          title
        )}
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
      </div>
      {children}
    </Tag>
  );
};

export default Page;
