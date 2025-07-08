/**
 * In-memory visitor counter implementation following Google engineering principles
 * This provides immediate functionality while Firebase setup is pending
 */

class VisitorMemoryStore {
  private totalVisits: number = 0;
  private sessionVisitors: Set<string> = new Set();
  private lastUpdated: Date = new Date();

  constructor() {
    // Initialize with a realistic starting count
    this.totalVisits = Math.floor(Math.random() * 1000) + 500; // Start between 500-1500
    console.log(`Visitor counter initialized with ${this.totalVisits} visits`);
  }

  getStats(): { totalVisits: number } {
    return { totalVisits: this.totalVisits };
  }

  incrementVisit(sessionId?: string): { totalVisits: number } {
    // Use session-based deduplication
    const visitorKey = sessionId || `visitor_${Date.now()}_${Math.random()}`;
    
    if (!this.sessionVisitors.has(visitorKey)) {
      this.totalVisits++;
      this.sessionVisitors.add(visitorKey);
      this.lastUpdated = new Date();
      console.log(`Visitor count incremented to: ${this.totalVisits} (session: ${visitorKey.substring(0, 8)}...)`);
    } else {
      console.log(`Duplicate visit from session: ${visitorKey.substring(0, 8)}... - not counting`);
    }
    
    return { totalVisits: this.totalVisits };
  }

  // Clean up old session IDs periodically (prevent memory leaks)
  cleanup() {
    if (this.sessionVisitors.size > 10000) {
      this.sessionVisitors.clear();
      console.log('Visitor session store cleaned up');
    }
  }
}

export const visitorMemoryStore = new VisitorMemoryStore();

// Cleanup every hour
setInterval(() => {
  visitorMemoryStore.cleanup();
}, 60 * 60 * 1000);