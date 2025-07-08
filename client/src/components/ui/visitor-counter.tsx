import { useVisitorCounter } from '@/hooks/use-visitor-counter';
import { Eye, Users } from 'lucide-react';

/**
 * Visitor Counter Component following Google engineering principles:
 * - Clean, accessible UI
 * - Graceful error handling
 * - Loading states
 * - Semantic HTML
 */

interface VisitorCounterProps {
  className?: string;
  showIcon?: boolean;
  variant?: 'default' | 'minimal';
}

export const VisitorCounter = ({ 
  className = '', 
  showIcon = true, 
  variant = 'default' 
}: VisitorCounterProps) => {
  const { visitorStats, isLoading, error } = useVisitorCounter();

  // Don't render if there's an error or no data
  if (error) {
    console.warn('Visitor counter error:', error);
    return null;
  }

  // Loading state
  if (isLoading) {
    return (
      <div className={`flex items-center gap-2 ${className}`} aria-label="Loading visitor count">
        {showIcon && <Eye className="h-4 w-4 animate-pulse" />}
        <span className="text-sm animate-pulse">Loading...</span>
      </div>
    );
  }

  // Format visitor count with comma separators for better readability
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const visitorCount = visitorStats?.totalVisits || 0;

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        {showIcon && <Users className="h-3 w-3" />}
        <span className="text-xs">{formatNumber(visitorCount)}</span>
      </div>
    );
  }

  return (
    <div 
      className={`flex items-center gap-2 ${className}`}
      role="status"
      aria-label={`${formatNumber(visitorCount)} total visitors`}
    >
      {showIcon && <Eye className="h-4 w-4 text-gray-400" />}
      <span className="text-sm text-gray-400">
        {formatNumber(visitorCount)} visitors
      </span>
    </div>
  );
};