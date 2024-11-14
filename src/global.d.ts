export {};

declare global {
  interface Window {
    google: any; // Customize this with a specific type if available
    googleTranslateElementInit: () => void;
  }
}

// src/global.d.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // Ensures the PrismaClient instance is globally typed
  var prisma: PrismaClient | undefined;
}
