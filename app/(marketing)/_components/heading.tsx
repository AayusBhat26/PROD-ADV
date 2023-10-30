"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Navbar } from "./navbar"

export const Heading =()=>{
      return(
            <div className="max-w-3xl space-y-4 ">
                  {/* <Navbar/> */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold"> Welcome TO <span className="underline">NORD</span></h1>
                  <h3 className="text-base sm:text-xl md:text-2xl font-medium">Workspace for creating notes, managing your time.<br /> Be Better than Yesterday!</h3>
                  <Button>
                        Enter your Personal Space
                        <ArrowRight className="h-4 w-4 ml-2"/>
                  </Button>
            </div>
      )
}
