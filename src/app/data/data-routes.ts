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
interface IRoutes {
  id: number;
  name: string;
  link: string;
  icons: IconType;
  iconsActive: IconType;
}

export const ROUTES: IRoutes[] = [
  {
    id: 0,
    name: 'Home',
    link: '/',
    icons: IoHomeOutline,
    iconsActive: IoHome,
  },
  {
    id: 1,
    name: 'All games',
    link: '/games',
    icons: BiJoystick,
    iconsActive: BiSolidJoystick,
  },
  {
    id: 2,
    name: 'Popular',
    link: '/games/popular',
    icons: BsBarChartLine,
    iconsActive: BsBarChartLineFill,
  },
  {
    id: 3,
    name: 'Playing now',
    link: '/games/playing-now',
    icons: BsPlay,
    iconsActive: BsPlayFill,
  },
  {
    id: 4,
    name: 'Coming soon',
    link: '/games/coming-soon',
    icons: BsClock,
    iconsActive: BsClockFill,
  },
  {
    id: 5,
    name: 'Top 100',
    link: '/games/top-100',
    icons: BiCrown,
    iconsActive: BiSolidCrown,
  },
  {
    id: 6,
    name: 'Events',
    link: '/events',
    icons: IoTicketOutline,
    iconsActive: IoTicket,
  },
  {
    id: 7,
    name: 'Companies',
    link: '/companies',
    icons: FaRegBuilding,
    iconsActive: FaBuilding,
  },
];
