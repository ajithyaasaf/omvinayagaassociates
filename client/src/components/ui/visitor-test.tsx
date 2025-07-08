import { useState } from 'react';
import { useVisitorCounter } from '@/hooks/use-visitor-counter';
import { Eye, RefreshCw, Plus } from 'lucide-react';

/**
 * Visitor Counter Test Component to verify dynamic functionality
 * This component allows you to manually test the visitor counter
 */

export const VisitorTest = () => {
  const { visitorStats, isLoading, incrementVisitorCount, isIncrementing } = useVisitorCounter();
  const [manualTests, setManualTests] = useState(0);

  const handleManualIncrement = () => {
    incrementVisitorCount();
    setManualTests(prev => prev + 1);
  };

  const handlePageRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border max-w-sm">
      <h3 className="font-semibold mb-3 text-sm">Visitor Counter Test</h3>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span>Current Count:</span>
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span className="font-mono">
              {isLoading ? 'Loading...' : visitorStats?.totalVisits || 0}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>Manual Tests:</span>
          <span className="font-mono">{manualTests}</span>
        </div>
        
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleManualIncrement}
            disabled={isIncrementing}
            className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
          >
            <Plus className="h-3 w-3" />
            {isIncrementing ? 'Adding...' : 'Add Visit'}
          </button>
          
          <button
            onClick={handlePageRefresh}
            className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
          >
            <RefreshCw className="h-3 w-3" />
            Refresh
          </button>
        </div>
        
        <div className="text-xs text-gray-500 mt-2">
          <p>• Click "Add Visit" to manually increment</p>
          <p>• Open in new tab to test auto-increment</p>
          <p>• Refresh to see persistence</p>
        </div>
      </div>
    </div>
  );
};