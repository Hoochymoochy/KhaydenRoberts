// components/LoadingWrapper.js
"use client";
import { useEffect } from "react";

const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const isLoading = true;

  useEffect(() => {

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      {/* Global Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <div className="text-white text-lg font-medium">Loading...</div>
          </div>
        </div>
      )}
      
      {/* Page Content */}
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
};

export default LoadingWrapper;