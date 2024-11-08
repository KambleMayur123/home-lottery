export {};

declare global {
  interface Window {
    google: any; // Customize this with a specific type if available
    googleTranslateElementInit: () => void;
  }
}
