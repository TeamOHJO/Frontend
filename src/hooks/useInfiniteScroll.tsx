import { useEffect, useRef } from 'react';

const useInfiniteScroll = (callback: () => void, loading: boolean, canLoadMore: boolean) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          // eslint-disable-next-line
          canLoadMore ? callback() : null;
        }
      },
      { threshold: 1 },
    );

    if (!loading && targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, [loading, canLoadMore]);

  return targetRef;
};

export default useInfiniteScroll;
