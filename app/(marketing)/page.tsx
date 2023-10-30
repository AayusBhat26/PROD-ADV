import { Button } from '@/components/ui/button'
import { Heading } from './_components/heading';
import { Heores } from './_components/heroes';
import { Footer } from './_components/footer';
const MarketingPage=()=> {
  return ( 
    <div className='flex min-h-full h-full  flex-col'>
      <div className="flex flex-col items-center text-center gap-y-8 flex-1 px-6 pb-10 justify-center md:justify-start lg:justify-around xl:justify-between">
        <Heading />
        <Heores / >
      </div>
      <Footer/>
    </div>
  )
}

export default MarketingPage;