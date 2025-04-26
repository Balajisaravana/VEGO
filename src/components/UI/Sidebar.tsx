import React from "react";
import { Sidebar } from "primereact/sidebar"; // Assuming you're using PrimeReact

interface SidebarUIProps {
  isVisible?: boolean;
  onHide ?: () => void
  title?: string;
  children?: React.ReactNode;
  className?: string;
  icons ?: React.ReactNode;
  header ?: React.ReactElement;
  position ?:"top" | "bottom" | "left" | "right" | undefined
}

export const SidebarUI: React.FC<SidebarUIProps> = ({
  isVisible = false,
  title = "",
  children,
  className = "",
  onHide,
  ...props
  
},) => {
  return (
    <Sidebar visible={isVisible} title={title} onHide={onHide as () => void}  className={className} {...props} showCloseIcon={false} dismissable = {true}>

      {children}
    </Sidebar>
  );
};