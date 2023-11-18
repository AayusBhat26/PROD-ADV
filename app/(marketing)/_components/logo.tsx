import Image from "next/image";
import { Poppins } from "next/font/google";
import {cn} from "@/lib/utils";
const font = Poppins({
      subsets:['latin'], 
      weight:['400', '600']
});
export const Logo = () => {
      return ( <div className="hidden md:flex items-center gap-x-2 ">
            <Image src ="/favicon.ico" alt="LOGO" height={'40'} width={'40'}/>
            <p className={cn("font-semibold", font.className)}>NORD - PRODUCTIVITY AND NOTE TAKING</p>
      </div> );
}
 
