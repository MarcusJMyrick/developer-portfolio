import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full text-center py-6">
      <p className="text-secondary text-[14px]">
        &copy; {new Date().getFullYear()} MarcusJMyrick. All Rights Reserved.
      </p>
    </footer>
  );
};
