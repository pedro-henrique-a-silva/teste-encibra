import style from './style.module.css'
import { ReactCompareSlider, ReactCompareSliderImage, styleFitContainer } from 'react-compare-slider';
import type { SelectedEventType } from '../../types';

type ImageComparissonProps = {
  selectedEvents: SelectedEventType
}

function ImageComparisson({ selectedEvents }: ImageComparissonProps) {
  return (
    <div className={style.image_slider__container}>
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