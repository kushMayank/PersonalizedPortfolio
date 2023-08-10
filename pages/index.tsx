import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     <div className="hover:shadow-indigo-500/40 text-center text-5xl sm:text-8xl relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      >
        <div className='font-mono'>MAYANK KUSHWAHA</div>
        <div className='font-mono py-10'>X</div>
        <div className='font-mono'>WEB DEVELOPER</div>
        <Link href="/about-me">
          <h2 className={` animate-bounce p-20 sm:p30 text-2xl font-semibold`}>
            About Me{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>
    </main>
  )
}
