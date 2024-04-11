import React from "react";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-slate-100 flex items-center justify-center">
      {children}
    </div>
  );
};

export default ClerkLayout;
