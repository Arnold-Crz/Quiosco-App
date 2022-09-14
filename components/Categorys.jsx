import Image from 'next/image';
import React from 'react';
import useQuiosco from '../hooks/useQuiosco';

function Categorys({ categorys }) {
  const { id, name, icon } = categorys;

  const { currentCategory, handleCurrentCategory } = useQuiosco();

  return (
    <div
      className={`${
        currentCategory?.id === id ? 'bg-amber-400 text-white' : ''
      } flex items-center gap-5 w-full border p-5 hover:bg-amber-400 hover:text-white`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        alt="img-icon"
      />

      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleCurrentCategory(id)}
      >
        {name}
      </button>
    </div>
  );
}

export default Categorys;
