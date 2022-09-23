import React, { FC, PropsWithChildren } from 'react';
import Styled from './KeyItem.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IKey } from '../../types/types';

const KeyItem: FC<PropsWithChildren<IKey>> = ({
  icon,
  name,
  action,
  children,
}) => {
  return (
    <Styled.Wrapper onClick={action}>
      {icon ? <FontAwesomeIcon icon={icon} /> : children}
    </Styled.Wrapper>
  );
};

export default KeyItem;
