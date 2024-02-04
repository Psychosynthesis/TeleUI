import { useEffect, useRef, useState } from "react";
import clsx from 'clsx';
import './style.scss';

import type { OptionType }  from '../types';
import type { DotSliderProps }  from './types';

// const minSwipeDistance = 15; 	// Расстояние между touchStart и touchEnd, чтобы оно было определено как свайп

export const DotSlider: React.FC<DotSliderProps> = ({ values, valueSetter, className, lineColor }) => {
	const currentDot = values.filter((item: OptionType) => item.selected === true).length;
	const lastActiveLine = currentDot - 1; // Последняя выделенная цветом линия
	const containerRef = useRef<HTMLDivElement>(null);

	const dotClick = (index: number) => {
		if (index === currentDot) return;
		const newValues = values.map((opt, i) => {
			if (i <= index) return { ...opt, selected: true };
			if (i > index) return { ...opt, selected: false };
		});
	  valueSetter(newValues);
	}

	const [touchStart, setTouchStart] = useState<number|undefined>(0);
	const [touchEnd, setTouchEnd] = useState<number|undefined>(0);
	const [oneSectionWidth, setSectionWidth] = useState(0);

	const getClientXFromEvent = (eve: React.SyntheticEvent) => {
		if (('TouchEvent' in window) && (eve.nativeEvent instanceof TouchEvent)) {
				return eve.nativeEvent.touches[0].clientX;
		} else if (eve.nativeEvent instanceof MouseEvent) {
				return eve.nativeEvent.clientX;
		}
	}

	const onTouchStart = (eve: React.SyntheticEvent) => {
	  setTouchEnd(undefined); // Чтобы избежать обработки свайпа при обычных касаниях
		setTouchStart(getClientXFromEvent(eve));
	};

	const onTouchMove = (eve: React.SyntheticEvent) => setTouchEnd(getClientXFromEvent(eve));

	const onTouchEnd = () => {
	  if (!touchStart || !touchEnd) return;
	  const distance = touchEnd - touchStart;
		// Здесь при желании можно добавить сравнение с minSwipeDistance
		const rawDotsToSwipe = ~~(distance/oneSectionWidth);

		const dotsToSwipe =
			(rawDotsToSwipe > 0) ?
			((currentDot + rawDotsToSwipe >= values.length) ? values.length : rawDotsToSwipe) :
			((currentDot - rawDotsToSwipe <= 0) ? 0 : rawDotsToSwipe);

		dotClick(currentDot + dotsToSwipe);
	}

	const mainClass = clsx({ 'dots-slider': true, [className!]: className });
	let lineStyle: React.CSSProperties = {};
	if (lineColor) { lineStyle.background = lineColor; }

	useEffect(() => {
		containerRef.current && setSectionWidth(containerRef.current.offsetWidth / values.length);
	}, [containerRef.current])

	return (
		<div
			className={mainClass}
			onTouchStart={onTouchStart}
			onMouseDown={onTouchStart}
			onTouchMove={onTouchMove}
			onMouseMove={onTouchMove}
			onTouchEnd={onTouchEnd}
			onMouseUp={onTouchEnd}
			ref={containerRef}
		>
			{values.map((option, index) => {
				const dotClass = clsx({ 'dots-slider-point': true, 'active-dot': option.selected, 'current-dot': (index === currentDot) });
				const lineClass = clsx({ 'dots-slider-line': true, 'active-line': (index <= lastActiveLine) });
				const showLine = (index < values.length-1);
				return (
				<div key={`${option.value}-slider-caption`} onClick={() => dotClick(index)}>
					<div className={dotClass} style={lineStyle} onClick={() => dotClick(index)}>
						<div className="dots-slider-caption" onClick={() => dotClick(index)}>{option.caption}</div>
					</div>
					{showLine && <div className={lineClass} style={lineStyle} />}
				</div>
			)})}
		</div>
	);
};
