import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const QuioscoContext = createContext();

export const QuioscoProvider = ({ children }) => {
  const [categorys, setCategorys] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const getCategorys = async () => {
    try {
      const { data } = await axios.get('/api/categorys');
      setCategorys(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategorys();
  }, []);

  useEffect(() => {
    setCurrentCategory(categorys[0]);
  }, [categorys]);

  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => product.price * product.count + total,
      0
    );

    setTotal(newTotal);
  }, [order]);

  const handleCurrentCategory = (id) => {
    const category = categorys.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
    router.push('/');
  };

  const handleProduct = (product) => {
    setProduct(product);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleOrder = ({ idCategoria, ...product }) => {
    if (order.some((ps) => ps.id === product.id)) {
      const productUpdate = order.map((p) =>
        p.id === product.id ? product : p
      );
      setOrder(productUpdate);
      toast.success('Pedido Actualizado');
    } else {
      setOrder([...order, product]);
      toast.success('Agregado al Pedido');
    }
    setModal(false);
  };

  const handleEditCount = (id) => {
    const productUpdate = order.filter((p) => p.id === id);
    setProduct(productUpdate[0]);
    setModal(!modal);
  };

  const handleDeleteOrder = (id) => {
    const productDelete = order.filter((p) => p.id !== id);
    setOrder(productDelete);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const DATA = {
      name,
      pedido: order,
      fecha: Date.now().toString(),
      total,
    };
    try {
      const { data } = await axios.post('/api/ordenes', DATA);
      console.log(data);
      toast.success('Tu Pedido se realizo con exito.');
      setCurrentCategory(categorys[0]);
      setOrder([]);
      setName('');
      setTotal(0);

      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const DATA = {
    categorys,
    currentCategory,
    product,
    modal,
    order,
    name,
    total,
    setName,
    handleCurrentCategory,
    handleProduct,
    handleModal,
    handleOrder,
    handleEditCount,
    handleDeleteOrder,
    handleSubmit,
  };
  return (
    <QuioscoContext.Provider value={DATA}>{children}</QuioscoContext.Provider>
  );
};

export default QuioscoContext;
