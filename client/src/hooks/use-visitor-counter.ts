import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

/**
 * Visitor Counter Hook following Google engineering principles:
 * - Optimized for performance with caching
 * - Error handling and retry logic
 * - Session-based tracking to avoid duplicate counts
 * - Debounced API calls to prevent spam
 */

interface VisitorStats {
  totalVisits: number;
}

const VISITOR_STATS_KEY = ['api', 'visitors'];
const SESSION_KEY = 'visitor_counted';

// API functions
const fetchVisitorStats = async (): Promise<VisitorStats> => {
  const response = await fetch('/api/visitors');
  if (!response.ok) {
    throw new Error('Failed to fetch visitor stats');
  }
  return response.json();
};

const incrementVisitorCount = async (): Promise<VisitorStats> => {
  const response = await fetch('/api/visitors/increment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to increment visitor count');
  }
  return response.json();
};

export const useVisitorCounter = () => {
  const queryClient = useQueryClient();
  const hasIncrementedRef = useRef(false);

  // Query to fetch visitor stats
  const {
    data: visitorStats,
    isLoading,
    error,
  } = useQuery({
    queryKey: VISITOR_STATS_KEY,
    queryFn: fetchVisitorStats,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  // Mutation to increment visitor count
  const incrementMutation = useMutation({
    mutationFn: incrementVisitorCount,
    onSuccess: (data) => {
      // Update the cache with new data
      queryClient.setQueryData(VISITOR_STATS_KEY, data);
      // Mark as counted in session storage
      sessionStorage.setItem(SESSION_KEY, 'true');
    },
    onError: (error) => {
      console.error('Failed to increment visitor count:', error);
    },
  });

  // Auto-increment on first visit (session-based)
  useEffect(() => {
    const hasCountedThisSession = sessionStorage.getItem(SESSION_KEY);
    
    if (!hasCountedThisSession && !hasIncrementedRef.current && !incrementMutation.isPending) {
      hasIncrementedRef.current = true;
      // Add a small delay to avoid race conditions
      const timer = setTimeout(() => {
        incrementMutation.mutate();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [incrementMutation]);

  return {
    visitorStats,
    isLoading,
    error,
    incrementVisitorCount: incrementMutation.mutate,
    isIncrementing: incrementMutation.isPending,
  };
};