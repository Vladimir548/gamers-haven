import * as Slider from '@radix-ui/react-slider';
import { useEffect, useState } from 'react';
type SliderValue = number;
interface ISlider {
  minValue: number;
  maxValue: number;
  step: number;
  dispatchMinFn: (value: SliderValue) => void;
  dispatchMaxFn: (value: SliderValue) => void;
  changeValueMax: number;
  changeValueMin: number;
}
export default function SliderComponent({
  minValue,
  maxValue,
  step,
  dispatchMinFn,
  dispatchMaxFn,
  changeValueMax,
  changeValueMin,
}: ISlider) {
  const [val, setVal] = useState<number[]>([changeValueMin, changeValueMax]);
  const [resetKey, setResetKey] = useState(0);
  useEffect(() => {
    setVal([changeValueMin, changeValueMax]);
    if (changeValueMin === minValue && changeValueMax === maxValue) {
      setResetKey((prev) => prev + 1);
    }
  }, [changeValueMin, changeValueMax, maxValue, minValue]);
  const handlerSliderChange = (value: number[]) => {
    dispatchMinFn(value[0]);
    dispatchMaxFn(value[1]);
  };

  return (
    <>
      <Slider.Root
        key={resetKey}
        className="relative flex items-center select-none touch-none w-[240px]  h-5"
        defaultValue={[changeValueMin, changeValueMax]}
        max={maxValue}
        min={minValue}
        step={step}
        onValueChange={(value) => setVal(value)}
        onValueCommit={(value) => handlerSliderChange(value)}
      >
        <Slider.Track className="bg-[#636164] relative grow w-full rounded-full h-[3px]">
          <Slider.Range className="absolute bg-[#c786ff] rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-3 h-3 bg-[#bc7ff8]  rounded-[10px]  focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-[#561e8d]/60"
          aria-label="Volume"
        />
        <Slider.Thumb
          className="block w-3 h-3 bg-[#bc7ff8]   rounded-[10px] focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-[#561e8d]/60"
          aria-label="Volume"
        />
      </Slider.Root>
      <div className="flex justify-between items-center pt-2 px-3 w-full">
        <span className={'bg-[#2e2638] rounded-md px-3 py-1 border-2 border-[#4c3862]'}>
          {val[0]}
        </span>
        <span className={'bg-[#2e2638] rounded-md px-3 py-1 border-2 border-[#4c3862]'}>
          {val[1]}
        </span>
      </div>
    </>
  );
}
