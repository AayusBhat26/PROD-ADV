"use client";

import { redirect } from "next/navigation";
import { useConvexAuth } from "convex/react";
// since this is implemented inside the main folder, therefore we need not to do it for all the pages explicitly, as this works as the layout for every page inside the main folder or subfolders.

// components imports
import { Spinner } from "@/components/spinner";

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
      return (<div>
            {children}
      </div>);
}

export default MainLayout;
// because of this our complete main application is authenticated protected.