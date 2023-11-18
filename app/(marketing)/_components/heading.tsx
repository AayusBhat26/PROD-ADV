"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Navbar } from "./navbar"

import { useConvexAuth } from "convex/react"
import { Spinner } from "@/components/spinner"
import Link from "next/link"
import { SignInButton } from "@clerk/clerk-react"

export const Heading = () => {
      const { isAuthenticated, isLoading } = useConvexAuth()
      return (
            <div className="max-w-3xl space-y-4 ">
                  {/* <Navbar/> */}
                  {/* welcome text */}
                  <>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold"> Welcome TO <span className="underline">NORD</span></h1>
                  </>
                  {/* quote */}
                  <>
                        <h3 className="text-base sm:text-xl md:text-2xl font-medium">Workspace for creating notes, managing your time.
                              <br /> Be Better than Yesterday!</h3>

                  </>
                  {
                        isLoading && (
                              <div className="w-full flex items-center justify-center">
                                    <Spinner size={"lg"} />
                              </div>
                        )
                  }
                  {
                        isAuthenticated && !isLoading && (
                              <Button asChild>
                                    <Link href={'/documents'}>Enter your Personal Space
                                          <ArrowRight className="h-4 w-4 ml-2" />
                                    </Link>

                              </Button>

                        )
                  }
                  {!isAuthenticated &&!isLoading &&(
                        <SignInButton mode="modal">
                              <Button>JOIN NOW!!!
                                    <ArrowRight className="h-4 w-4 ml-2" />

                              </Button>

                        </SignInButton>
                  )}
            </div>
      )
}
