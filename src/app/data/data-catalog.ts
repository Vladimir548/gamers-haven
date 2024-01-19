import { IoHome, IoHomeOutline, IoTicket, IoTicketOutline } from 'react-icons/io5';
import { BiCrown, BiJoystick, BiSolidCrown, BiSolidJoystick } from 'react-icons/bi';
import {
  BsBarChartLine,
  BsBarChartLineFill,
  BsClock,
  BsClockFill,
  BsPlay,
  BsPlayFill,
} from 'react-icons/bs';
import { FaBuilding, FaRegBuilding } from 'react-icons/fa';

import { IconType } from 'react-icons';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { RiSearchFill, RiSearchLine } from 'react-icons/ri';
interface IRoutes {
  id: number;
  name: string;
  link: string;
  icons: IconType;
  iconsActive: IconType;
}

export const ROUTESCATALOG: IRoutes[] = [
  {
    id: 2,
    name: 'All games',
    link: '/games',
    icons: BiJoystick,
    iconsActive: BiSolidJoystick,
  },
  {
    id: 3,
    name: 'Popular',
    link: '/games/popular',
    icons: BsBarChartLine,
    iconsActive: BsBarChartLineFill,
  },
  {
    id: 4,
    name: 'Playing now',
    link: '/games/playing-now',
    icons: BsPlay,
    iconsActive: BsPlayFill,
  },
  {
    id: 5,
    name: 'Coming soon',
    link: '/games/coming-soon',
    icons: BsClock,
    iconsActive: BsClockFill,
  },
  {
    id: 6,
    name: 'Top 100',
    link: '/games/top-100',
    icons: BiCrown,
    iconsActive: BiSolidCrown,
  },
  {
    id: 7,
    name: 'Events',
    link: '/events',
    icons: IoTicketOutline,
    iconsActive: IoTicket,
  },
  {
    id: 8,
    name: 'Companies',
    link: '/companies',
    icons: FaRegBuilding,
    iconsActive: FaBuilding,
  },
];
