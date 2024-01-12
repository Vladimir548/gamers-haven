import { IconType } from 'react-icons';
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
import { FaBuilding, FaClock, FaRegBuilding, FaRegClock } from 'react-icons/fa';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { FaFaceGrinStars, FaRegFaceGrinStars } from 'react-icons/fa6';

interface IPrivateRoutes {
  id: number;
  name: string;
  link: string;
  icons: IconType;
  iconsActive: IconType;
}
export const ROUTESPRIVATE: IPrivateRoutes[] = [
  {
    id: 0,
    name: 'Favorite',
    link: '/favorite',
    icons: MdFavoriteBorder,
    iconsActive: MdFavorite,
  },
  {
    id: 1,
    name: 'Wishlist',
    link: '/wishlist',
    icons: FaRegFaceGrinStars,
    iconsActive: FaFaceGrinStars,
  },
  {
    id: 2,
    name: 'Watchlist',
    link: '/watchlist',
    icons: FaRegClock,
    iconsActive: FaClock,
  },
];
