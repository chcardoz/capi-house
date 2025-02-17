

import { Jersey_15 } from "next/font/google"
import LandingPage from "./components/RotatingFlags"

const jersey15 = Jersey_15({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const metadata = {
  title: 'Capi House',
  description: 'Home for immigrant founders',
}


export default function Home() {
  return (
    <main className={`${jersey15.className}`}>
      <LandingPage />
    </main>
  )
}

