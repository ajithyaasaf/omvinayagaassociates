// TypeScript declarations for firebase-operations.js
export declare function getDataFromFirebase(path: string, useCache?: boolean): Promise<any[]>;
export declare function getPaginatedDataFromFirebase(path: string, options: any): Promise<{data: any[], pagination: any}>;
export declare function deleteFromFirebase(path: string, id: string | number): Promise<{success: boolean, message?: string}>;
export declare function createDataInFirebase(path: string, data: any): Promise<{success: boolean, data?: any, message?: string}>;
export declare function withRetry<T>(fn: () => Promise<T>): Promise<T>;
export declare function clearCache(path: string): void;