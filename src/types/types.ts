import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IKey {
  name: string;
  icon?: IconProp;
  content?: string;
  action: () => void;
}
