import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  type: "hero" | "projects" | "card" | "gallery" | "skills";
  count?: number;
}

const LoadingSkeleton = ({ type, count = 1 }: LoadingSkeletonProps) => {
  switch (type) {
    case "hero":
      return (
        <div className="min-h-screen flex items-center justify-center">
          <motion.div 
            className="text-center space-y-8 w-full max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Skeleton className="h-4 w-16 mx-auto loading-shimmer" />
            <Skeleton className="h-16 md:h-24 w-full loading-shimmer" />
            <Skeleton className="h-8 w-3/4 mx-auto loading-shimmer" />
            <div className="flex gap-4 justify-center">
              <Skeleton className="h-12 w-32 loading-shimmer" />
              <Skeleton className="h-12 w-32 loading-shimmer" />
            </div>
          </motion.div>
        </div>
      );

    case "projects":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: count }).map((_, i) => (
            <motion.div 
              key={i} 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Skeleton className="h-48 w-full rounded-lg loading-shimmer" />
              <Skeleton className="h-6 w-3/4 loading-shimmer" />
              <Skeleton className="h-4 w-full loading-shimmer" />
              <Skeleton className="h-4 w-2/3 loading-shimmer" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16 rounded-full loading-shimmer" />
                <Skeleton className="h-6 w-20 rounded-full loading-shimmer" />
                <Skeleton className="h-6 w-14 rounded-full loading-shimmer" />
              </div>
            </motion.div>
          ))}
        </div>
      );

    case "card":
      return (
        <div className="space-y-4 p-6 rounded-lg border bg-card">
          <Skeleton className="h-6 w-3/4 bg-muted/20" />
          <Skeleton className="h-4 w-full bg-muted/20" />
          <Skeleton className="h-4 w-2/3 bg-muted/20" />
        </div>
      );

    case "gallery":
      return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {Array.from({ length: count }).map((_, i) => (
            <Skeleton 
              key={i} 
              className={`w-full rounded-lg bg-muted/20 ${
                i % 3 === 0 ? 'h-64' : i % 3 === 1 ? 'h-48' : 'h-56'
              }`} 
            />
          ))}
        </div>
      );

    case "skills":
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="space-y-2 text-center">
              <Skeleton className="h-12 w-12 rounded-full mx-auto bg-muted/20" />
              <Skeleton className="h-4 w-16 mx-auto bg-muted/20" />
            </div>
          ))}
        </div>
      );

    default:
      return (
        <div className="space-y-4">
          {Array.from({ length: count }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full bg-muted/20" />
          ))}
        </div>
      );
  }
};

export default LoadingSkeleton;