import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full px-4 p-1 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Term Of Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
