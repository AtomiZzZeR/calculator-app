import { FC, PropsWithChildren } from 'react';
import { IKey } from '../../types/types';
import { KeyItem } from '../KeyItem';

interface IKeyListProps {
  keys: IKey[];
}

const KeyList: FC<IKeyListProps> = ({ keys }) => {
  return (
    <>
      {keys.map((key) => (
        <KeyItem
          icon={key.icon!}
          action={key.action}
          name={key.name}
          key={key.name}
        >
          {key.content}
        </KeyItem>
      ))}
    </>
  );
};

export default KeyList;
