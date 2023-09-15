import Image from 'next/image'
import Navber from './componants/Navber'
import Board from './componants/Board'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <>
      <Navber />
      <Suspense fallback={<Loading />}>
        <Board />
      </Suspense>
    </>
  )
}
