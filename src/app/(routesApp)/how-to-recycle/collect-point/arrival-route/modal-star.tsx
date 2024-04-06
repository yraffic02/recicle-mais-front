import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function ModalStars() {
  const [starsSelected, setStarsSelected] = useState(0);

  const handleClickVote = (starIndex: number) => {
    setStarsSelected(starIndex + 1);
  };

  return (
    <div className="flex flex-col items-center justify-end absolute bg-cinzaBackGround h-[70%] w-[100vw] rounded-t-[32px] pb-[20px] bottom-[-100px]">
      <div className="flex flex-col h-full justify-center">
        <h1 className="font-medium mb-4 text-center">Foi fácil chegar?</h1>
        <div className="flex gap-2">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              src={index < starsSelected ? '/icons/iconStar.svg' : '/icons/iconStarWhite.svg'}
              alt="Stars"
              height={30}
              width={30}
              className="cursor-pointer"
              onClick={() => handleClickVote(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-full pl-[24px] pr-[24px] mb-4">
        <Link href="/home">
          <Button typeButton="primary">Início</Button>
        </Link>
      </div>
    </div>
  );
}