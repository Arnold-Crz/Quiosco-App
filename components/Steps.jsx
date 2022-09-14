import Link from 'next/link';
import { useRouter } from 'next/router';

const STEPS = [
  {
    steps: 1,
    name: 'Menu',
    url: '/',
  },
  {
    steps: 2,
    name: 'Resumen',
    url: '/resumen',
  },
  {
    steps: 3,
    name: 'Total',
    url: '/total',
  },
];

function Steps() {
  const router = useRouter();
  const calcSteps = () => {
    let value;
    if (router.pathname === '/') {
      value = 2;
    } else if (router.pathname === '/resumen') {
      value = 50;
    } else {
      value = 100;
    }

    return value;
  };
  return (
    <>
      <div className="flex justify-between mb-5">
        {STEPS.map((step) => (
          <Link href={step.url} key={step.steps} className="text-2xl font-bold">
            {step.name}
          </Link>
        ))}
      </div>
      <div className="bg-gray-100 mb-10  ">
        <div
          className="rounded-full transition duration-1000 ease-in-out bg-green-500 text-xs leading-none h-2 text-center"
          style={{ width: `${calcSteps()}%` }}
        ></div>
      </div>
    </>
  );
}

export default Steps;
