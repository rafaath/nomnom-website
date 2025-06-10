"use client";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { ToggleTheme } from "@/components/layout/toogle-theme";

export const NavigationWrapper = () => {
  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Features", link: "#features" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <FloatingNavbar 
      navItems={navItems}
      logoUrl="/logo-nomnom.png"
      showLogoOnMobile={true}
    >
      <ToggleTheme />
    </FloatingNavbar>
  );
}; 