import style from './style.module.css'
import { ReactCompareSlider, ReactCompareSliderImage, styleFitContainer } from 'react-compare-slider';
import type { SelectedEventType } from '../../types';
import { ImageSquare } from '@phosphor-icons/react';

type ImageComparissonProps = {
  selectedEvents: SelectedEventType
}

function ImageComparisson({ selectedEvents }: ImageComparissonProps) {
  return (
    <div className={style.image_slider__container}>
      <h2 className={style.image_slider__title}>
        <ImageSquare size={32} color="#1f1f1f" weight="fill" />
        Slider
      </h2>
      {(selectedEvents.eventOne || selectedEvents.eventTwo) && (
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={selectedEvents.eventOne?.imageUrl} alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={selectedEvents.eventTwo?.imageUrl} alt="Image two" />}
          style={styleFitContainer({
            objectFit: 'contain',
            objectPosition: 'center',
          })}
        />
      )}
    </div>
  );
}

export default ImageComparisson;