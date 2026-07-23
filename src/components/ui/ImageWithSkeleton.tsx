import React, { useState } from 'react';
import { cn } from '../../lib/utils';

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export function ImageWithSkeleton({ className, wrapperClassName, ...props }: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden w-full h-full bg-surface-soft", wrapperClassName)}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-border/50" />
      )}
      <img
        {...props}
        className={cn(className, "transition-opacity duration-300", isLoaded ? "opacity-100" : "opacity-0")}
        onLoad={(e) => {
          setIsLoaded(true);
          props.onLoad?.(e);
        }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
