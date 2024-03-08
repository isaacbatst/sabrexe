'use client';
import { First } from '@/components/first'
import Second from '@/components/second';
import Third from '@/components/third';
import React from 'react'

type Props = {}

const getChallenge = (index: number, nextChallenge: () => void) => {
  switch (index) {
    case 0:
      return <First nextChallenge={nextChallenge} />
    case 1:
      return <Second nextChallenge={nextChallenge} />
    case 2:
      return <Third />
    default:
      return <First nextChallenge={nextChallenge} />;
  }
}

const Challenges = (props: Props) => {
  const [challengeIndex, setChallengeIndex] = React.useState(0)
  const nextChallenge = () => {
    setChallengeIndex(challengeIndex + 1)
  }

  const challenge = getChallenge(challengeIndex, nextChallenge)
  const bg = challengeIndex === 0 ? 'bg-black' : 'bg-white'
  const textColor = challengeIndex === 0 ? 'text-white' : 'text-black'

  return (
    <div
      className={`${bg} px-4 flex-1 flex flex-col items-center justify-center space-y-4 text-center`}
    >
      <h1
        className={`${textColor} text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none`}
      >
        Para @sabrexe
      </h1>
      {challenge}
    </div>
  );
}

export default Challenges