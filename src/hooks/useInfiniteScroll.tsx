import { useEffect, useRef } from 'react';

const useInfiniteScroll = (callback: () => void, loading: boolean, loadMore: boolean) => {
  const targetRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          // eslint-disable-next-line
          loadMore ? callback() : null;
        }
      },
      { threshold: 1 },
    );

    if (!loading) {
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, [loading, loadMore]);

  return targetRef;
};

export default useInfiniteScroll;
