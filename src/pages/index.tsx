import * as React from "react"
import type { PageProps } from "gatsby"

import "./styles.css";

import Hero from "./components/hero";
import Info from "./components/info";
import Pricing from "./components/pricing";
import Contact from "./components/contact";

const IndexPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  return (
    <main className="w-screen h-screen" style={{ overflowX: 'hidden' }}>
      <Hero />
      <Info />
      <Pricing />
      <Contact />
      <div className="bg-gray-50 flex w-full pb-2 justify-center items-center">
        <div className="text-center text-gray-400 text-xs">
          made with ❤️ by <a className="text-gray-400 font-bold" href="https://bfar.xyz">Bernardo Rodrigues</a>
        </div>
      </div>
    </main>
  )
}

export default IndexPage