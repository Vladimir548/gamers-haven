import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useTypedSelector } from '@/app/redux/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { cardTypeGames } from '@/app/redux/slice/card-type-slice';

import { CARDVIEWTYPE } from '@/data/data-view-card';

export default function CardView() {
  const { typeGamesCard } = useTypedSelector((state) => state.cardType);
  const dispatch = useDispatch();
  const cookieTypeCard = Cookies.get('typeCard');

  useEffect(() => {
    if (!cookieTypeCard) {
      dispatch(cardTypeGames(CARDVIEWTYPE[0].type));
    } else {
      dispatch(cardTypeGames(cookieTypeCard));
    }
  }, [typeGamesCard, cookieTypeCard, dispatch]);
  const saveTypeCard = (type: string) => {
    Cookies.set('typeCard', type, {
      domain: 'localhost',
      sameSite: 'strict',
      expires: 1,
    });
    dispatch(cardTypeGames(type));
  };

  return (
    <div className={'flex items-center gap-x-2 border-dark-violet border rounded-lg p-0.5 '}>
      {CARDVIEWTYPE.map((view, index) => (
        <span
          key={index}
          onClick={() => saveTypeCard(view.type)}
          className={`cursor-pointer ease-in-out p-1 duration-300 rounded-md ${
            typeGamesCard === view.type ? 'bg-dark-violet' : ''
          } hover:bg-dark-violet/50`}
        >
          <view.icon size={24} />
        </span>
      ))}
    </div>
  );
}
