
// components/Footer.tsx
import React from "react";

const LinksFooter: React.FC = () => {
  return (
    <footer className="mt-8 text-center text-xs text-gray-300/60">
      <div>© {new Date().getFullYear()} ERINHQ. All rights reserved.</div>
    </footer>
  );
};

export default LinksFooter;