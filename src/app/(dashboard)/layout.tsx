import React, { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

// Corrigir o caminho dos componentes
const DashboardHeader = dynamic(() => import("./components/DashboardHeader"), { ssr: false });
const DashboardMain = dynamic(() => import("./components/DashboardMain"), { ssr: false });

const DashboardLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <DashboardHeader />
      <DashboardMain>{children}</DashboardMain>
    </>
  );
};

export default DashboardLayout;
