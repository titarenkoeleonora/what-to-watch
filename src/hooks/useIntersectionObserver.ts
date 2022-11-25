import { RefObject, useEffect } from 'react';

interface UseIntersectionObserverProps extends IntersectionObserverInit {
  enable: boolean;
  isLoading: boolean;
  target: RefObject<Element>;
  onIntersect: () => void;
}

export const useIntersectionObserver = ({
  enable,
  isLoading,
  target,
  onIntersect,
}: UseIntersectionObserverProps) => {
  useEffect(() => {
    if (isLoading || !enable) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.isIntersecting && onIntersect();
        }),
      {
        rootMargin: '0px',
      },
    );
    const element = target && target.current;

    if (!element) {
      return;
    }
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [enable, isLoading, target, onIntersect]);
};
