import { useContext } from 'react';
import QuioscoContext from '../context/QuioscoProvider';

const useQuiosco = () => {
  const context = useContext(QuioscoContext);
  if (!context) throw new Error('Not found the Provider');
  return context;
};

export default useQuiosco;
