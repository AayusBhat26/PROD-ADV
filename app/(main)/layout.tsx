"use client";

import { redirect } from "next/navigation";
import { useConvexAuth } from "convex/react";
// since this is implemented inside the main folder, therefore we need not to do it for all the pages explicitly, as this works as the layout for every page inside the main folder or subfolders.

// components imports
import { Spinner } from "@/components/spinner";
import Navigation from "./_components/navigation";
// import { Navigation } from "@/"

const MainLayout = ({
      children
}: {
      children: React.ReactNode
}) => {
      const {isAuthenticated, isLoading} = useConvexAuth();

      if(isLoading) {
            return (
                  <div className="h-full flex items-center justify-center">
                        <Spinner size={'lg'}/>
                  </div>
            )
      }
      if(!isAuthenticated){
            return redirect('/')
      }
      return (<div className="h-full flex dark:bg-[#1F1F1F]">

            <main className="flex-1 h-full overflow-y-auto">
                  {children}
            </main>
            <Navigation />

            
      </div>);
}

export default MainLayout;
// because of this our complete main application is authenticated protected.