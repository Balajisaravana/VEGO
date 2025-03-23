import React from "react";
import { Sidebar } from "primereact/sidebar"; // Assuming you're using PrimeReact

interface SidebarUIProps {
  isVisible?: boolean;
  onClose?: () => void | undefined;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export const SidebarUI: React.FC<SidebarUIProps> = ({
  isVisible = false,
  onClose,
  title = "",
  children,
  className = "",
  ...props
  
},) => {
  return (
    <Sidebar visible={isVisible} onHide={ onClose} className={className} {...props} showCloseIcon={false} dismissable = {true}>

      {children}
    </Sidebar>
  );
};