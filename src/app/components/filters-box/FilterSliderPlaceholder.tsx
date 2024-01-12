import { useState } from 'react';
import ArrowOpen from '@/app/components/arrow-open/ArrowOpen';
import SliderComponent from '@/app/components/slider/Slider';

type SliderValue = number;
interface ISliderFilterPlaceholder {
  title: string;
  minValue: number;
  maxValue: number;
  step: number;
  dispatchMinFn: (value: SliderValue) => void;
  dispatchMaxFn: (value: SliderValue) => void;
  changeValueMax: number;
  changeValueMin: number;
}
export default function FilterSliderPlaceholder({
  title,
  maxValue,
  minValue,
  step,
  dispatchMinFn,
  dispatchMaxFn,
  changeValueMax,
  changeValueMin,
}: ISliderFilterPlaceholder) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`bg-[#201a28] text-base font-bold w-full ${
          isOpen ? 'rounded-t-lg' : 'rounded-lg'
        }  flex justify-between p-3 items-center ease-linear duration-300 hover:bg-[#4c3862]`}
      >
        <span>{title}</span>
        <ArrowOpen isOpen={isOpen} />
      </button>

      {isOpen && (
        <div className="bg-[#201a28] flex justify-center items-center flex-col py-2">
          <SliderComponent
            maxValue={maxValue}
            minValue={minValue}
            step={step}
            dispatchMaxFn={(value: number) => dispatchMaxFn(value)}
            dispatchMinFn={(value: number) => dispatchMinFn(value)}
            changeValueMin={changeValueMin}
            changeValueMax={changeValueMax}
          />
        </div>
      )}
    </div>
  );
}
