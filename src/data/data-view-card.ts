import { IconType } from 'react-icons';
import { CiGrid41 } from 'react-icons/ci';
import { LuLayoutList } from 'react-icons/lu';

interface ICardViewType {
  icon: IconType;

  type: string;
}

export const CARDVIEWTYPE: ICardViewType[] = [
  {
    icon: CiGrid41,

    type: 'card-one',
  },
  {
    icon: LuLayoutList,

    type: 'card-two',
  },
];
