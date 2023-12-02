import { IconType } from 'react-icons';
import { IoHome, IoHomeOutline } from 'react-icons/io5';
import { HiOutlineViewGrid, HiViewGrid } from 'react-icons/hi';
import { RiSearchFill, RiSearchLine } from 'react-icons/ri';
import { TiUser, TiUserOutline } from 'react-icons/ti';

export interface IRoutesBottomMenu {
  id: number;
  name: string;
  link: string;
  icons: IconType;
  iconsActive: IconType;
}

export const ROUTESBOTTOM: IRoutesBottomMenu[] = [
  {
    id: 0,
    name: 'Home',
    link: '/',
    icons: IoHomeOutline,
    iconsActive: IoHome,
  },
  {
    id: 1,
    name: 'Catalog',
    link: '/catalog',
    icons: HiOutlineViewGrid,
    iconsActive: HiViewGrid,
  },
  {
    id: 2,
    name: 'Search',
    link: '/search',
    icons: RiSearchLine,
    iconsActive: RiSearchFill,
  },
  {
    id: 3,
    name: 'User',
    link: '/user',
    icons: TiUserOutline,
    iconsActive: TiUser,
  },
];
