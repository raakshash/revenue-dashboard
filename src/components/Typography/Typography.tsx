import classNames from 'classnames';
import React from 'react';

const tagMap: any = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'display-1': 'h1',
  'display-2': 'h1',
  'display-3': 'h1',
  'display-4': 'h1',
  p: 'p',
  lead: 'p',
  blockquote: 'blockquote',
};

const types = Object.keys(tagMap);

interface Props {
  tag?: any,
  className?: string,
  type?: any,
}

const Typography: React.FC<Props> = ({ tag: Tag, className, type = 'p', ...restProps }) => {
  const classes = classNames({ [type]: !!type }, className);
  let TypoComp;

  if (Tag) {
    TypoComp = Tag;
  } else if (!Tag && tagMap[type]) {
    TypoComp = tagMap[type];
  } else {
    TypoComp = 'p';
  }

  return <TypoComp {...restProps} className={classes} />;
};

export default Typography;
