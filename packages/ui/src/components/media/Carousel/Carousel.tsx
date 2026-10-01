"use client";
import { Children, forwardRef, memo, useEffect, useState } from "react";
import type { CarouselProps } from "./Carousel.types";
import { carouselDefaultProps } from "./config";
import { getCarouselAriaProps, getCarouselRadius, getCarouselSize, getCarouselState, getCarouselVariant, isCarouselAutoplay, isCarouselDisabled } from "./utils";
const Carousel = forwardRef<HTMLDivElement, CarouselProps>(function Carousel(props, ref) {
  const { id, className = "", style, size = carouselDefaultProps.size, variant = carouselDefaultProps.variant, radius = carouselDefaultProps.radius, state = carouselDefaultProps.state, disabled = carouselDefaultProps.disabled, autoplay = carouselDefaultProps.autoplay, loop = carouselDefaultProps.loop, interval = carouselDefaultProps.interval, showArrows = carouselDefaultProps.showArrows, showIndicators = carouselDefaultProps.showIndicators, children, ...rest } = props;
  const slides = Children.toArray(children); const [current, setCurrent] = useState(0); const isDisabled = isCarouselDisabled(disabled, state);
  const next = () => setCurrent((value) => value === slides.length - 1 ? (loop ? 0 : value) : value + 1); const previous = () => setCurrent((value) => value === 0 ? (loop ? Math.max(slides.length - 1, 0) : 0) : value - 1);
  useEffect(() => { if (!isCarouselAutoplay(autoplay, state) || isDisabled || slides.length < 2) return; const timer = window.setInterval(next, interval); return () => window.clearInterval(timer); }, [autoplay, state, isDisabled, interval, loop, slides.length]);
  if (!slides.length) return null;
  return <div ref={ref} id={id} style={style} className={["shivanya-carousel", getCarouselSize(size), getCarouselVariant(variant), getCarouselRadius(radius), getCarouselState(state), isDisabled ? "carouselDisabled" : "", className].filter(Boolean).join(" ")} data-disabled={isDisabled || undefined} {...getCarouselAriaProps()} {...rest}>
    <div className="carouselTrack" style={{ transform: `translateX(-${current * 100}%)` }}>{slides.map((slide, index) => <div key={index} className="carouselSlide">{slide}</div>)}</div>
    {showArrows && slides.length > 1 && <><button type="button" className="carouselArrow carouselArrowPrev" onClick={previous} aria-label="Previous slide">‹</button><button type="button" className="carouselArrow carouselArrowNext" onClick={next} aria-label="Next slide">›</button></>}
    {showIndicators && slides.length > 1 && <div className="carouselIndicators">{slides.map((_, index) => <button key={index} type="button" className={["carouselIndicator", current === index ? "carouselIndicatorActive" : ""].filter(Boolean).join(" ")} onClick={() => setCurrent(index)} aria-label={`Go to slide ${index + 1}`} aria-current={current === index ? "true" : undefined} />)}</div>}
  </div>;
});
Carousel.displayName = "Carousel"; export default memo(Carousel);

