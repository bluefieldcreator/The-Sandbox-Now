import type { NextPage } from 'next'
import Link from "next/link"
const Home: NextPage = () => {
  return (
    <div>
      <div className='text-5xl xl:text-8xl font-bold text-center  mt-5'>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-red-500  to-blue-600'>The Sandbox</div>
        <div>News</div>
      </div>

      <div className=' text-center xl:w-2/4 mx-auto text-gray-400  font-semibold text-lg'>We work on centralizing an uniting sandboxes towards a common objective; self-improvement, safety and establishment. We write news about the virtual space that&apos;s constantly evolving, and watch as it slowly evolves.</div>
      <div className='grid grid-cols-2 xl:w-1/6 mx-auto items-center gap-4 justify-center'>
        <Link href="/news">
          <button className='mt-5 bg-blue-600 rounded w-[100px] mx-auto text-center p-2 text-white font-semibold'>
            News
          </button>
        </Link>
        <Link href="https://discord.gg/jkNBXBeV2t">
          <button className='mt-5 bg-blue-600 rounded w-[150px] mx-auto text-center p-2 text-white font-semibold'>
            Join Discord
          </button>
        </Link>
      </div>
    </div>

  )
}

export default Home
