import { lazy, Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import LoadingSkeleton from "./LoadingSkeleton";

interface LazySectionProps {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  skeletonType?: "hero" | "projects" | "card" | "gallery" | "skills";
  skeletonCount?: number;
  threshold?: number;
  id?: string;
  className?: string;
}

const LazySection = ({ 
  component, 
  fallback, 
  skeletonType = "card",
  skeletonCount = 3,
  threshold = 0.1,
  id,
  className
}: LazySectionProps) => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasTriggered) {
      setHasTriggered(true);
    }
  }, [inView, hasTriggered]);

  const LazyComponent = hasTriggered ? lazy(component) : null;

  const defaultFallback = (
    <div className="animate-pulse">
      <LoadingSkeleton type={skeletonType} count={skeletonCount} />
    </div>
  );

  return (
    <div ref={ref} id={id} className={className}>
      {hasTriggered && LazyComponent ? (
        <Suspense fallback={fallback || defaultFallback}>
          <LazyComponent />
        </Suspense>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  );
};

export default LazySection;