import { Button } from "@/components/ui/button";

import { Logo } from "./logo";
// dark:bg-[#1F1F1F] => ADD THIS IF FOOTER DO NOT LOOK GOOD/
export const Footer = () => {
      return (<div className="flex items-center w-full p-6 bg-background z-50 ">
            <Logo/>
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                  <Button variant={"ghost"} size={"sm"}>Terms & Conditions</Button>
                  <Button variant={"ghost"} size={"sm"}>Privacy Policy</Button>
            </div>
      </div>);
}
