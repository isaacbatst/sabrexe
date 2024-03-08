'use client';
import { Initial } from '@/components/initial'
import Second from '@/components/second';
import React from 'react'

type Props = {}

const getChallenge = (index: number, nextChallenge: () => void) => {
  switch (index) {
    case 0:
      return <Initial nextChallenge={nextChallenge} />
    case 1:
      return <Second nextChallenge={nextChallenge} />
    default:
      return <Initial nextChallenge={nextChallenge} />
  }
}

const Challenges = (props: Props) => {
  const [challengeIndex, setChallengeIndex] = React.useState(0)
  const nextChallenge = () => {
    setChallengeIndex(challengeIndex + 1)
  }

  const challenge = getChallenge(challengeIndex, nextChallenge)

  return (
    <div className=" bg-white px-4 flex-1 flex flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none text-[#000000]">
        Para @sabrexe
      </h1>
      {challenge}
    </div>
  );
}

export default Challenges