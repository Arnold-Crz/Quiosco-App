import Image from 'next/image';
import React from 'react';
import useQuiosco from '../hooks/useQuiosco';
import Categorys from './Categorys';

function Sidebar() {
  const { categorys } = useQuiosco();
  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="img-logo"
      />

      <nav className="mt-10">
        {categorys.map((category) => (
          <Categorys key={category.id} categorys={category} />
        ))}
      </nav>
    </>
  );
}

export default Sidebar;
