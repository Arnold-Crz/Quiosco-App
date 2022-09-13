const products = [
  {
      name: "Café Caramel con Chocolate",
      price: 59.9,
      img: "cafe_01",
      idCategoria: 1
    },
    {
      name: "Café Frio con Chocolate Grande",
      price: 49.9,
      img: "cafe_02",
      idCategoria: 1
    },
    {
      name: "Latte Frio con Chocolate Grande",
      price: 54.9,
      img: "cafe_03",
      idCategoria: 1
    },
    {
      name: "Latte Frio con Chocolate Grande",
      price: 54.9,
      img: "cafe_04",
      idCategoria: 1
    },
    {
      name: "Malteada Fria con Chocolate Grande",
      price: 54.9,
      img: "cafe_05",
      idCategoria: 1
    },
    {
      name: "Café Mocha Caliente Chico",
      price: 39.9,
      img: "cafe_06",
      idCategoria: 1
    },
    {
      name: "Café Mocha Caliente Grande con Chocolate",
      price: 59.9,
      img: "cafe_07",
      idCategoria: 1
    },
    {
      name: "Café Caliente Capuchino Grande",
      price: 59.9,
      img: "cafe_08",
      idCategoria: 1
    },
    {
      name: "Café Mocha Caliente Mediano",
      price: 49.9,
      img: "cafe_09",
      idCategoria: 1
    },
    {
      name: "Café Mocha Frio con Caramelo Mediano",
      price: 49.9,
      img: "cafe_10",
      idCategoria: 1
    },
    {
      name: "Café Mocha Frio con Chocolate Mediano",
      price: 49.9,
      img: "cafe_11",
      idCategoria: 1
    },
    {
      name: "Café Espresso",
      price: 29.9,
      img: "cafe_12",
      idCategoria: 1
    },
    {
      name: "Café Capuchino Grande con Caramelo",
      price: 59.9,
      img: "cafe_13",
      idCategoria: 1
    },
    {
      name: "Café Caramelo Grande",
      price: 59.9,
      img: "cafe_14",
      idCategoria: 1
    },
    {
      name: "Paquete de 3 donas de Chocolate",
      price: 39.9,
      img: "donas_01",
      idCategoria: 4
    },
    {
      name: "Paquete de 3 donas Glaseadas",
      price: 39.9,
      img: "donas_02",
      idCategoria: 4
    },
    {
      name: "Dona de Fresa ",
      price: 19.9,
      img: "donas_03",
      idCategoria: 4
    },
    {
      name: "Dona con Galleta de Chocolate ",
      price: 19.9,
      img: "donas_04",
      idCategoria: 4
    },
    {
      name: "Dona glass con Chispas Sabor Fresa ",
      price: 19.9,
      img: "donas_05",
      idCategoria: 4
    },
    {
      name: "Dona glass con Chocolate ",
      price: 19.9,
      img: "donas_06",
      idCategoria: 4
    },
    {
      name: "Dona de Chocolate con MÁS Chocolate ",
      price: 19.9,
      img: "donas_07",
      idCategoria: 4
    },
    {
      name: "Paquete de 3 donas de Chocolate ",
      price: 39.9,
      img: "donas_08",
      idCategoria: 4
    },
    {
      name: "Paquete de 3 donas con Vainilla y Chocolate ",
      price: 39.9,
      img: "donas_09",
      idCategoria: 4
    },
    {
      name: "Paquete de 6 Donas",
      price: 69.9,
      img: "donas_10",
      idCategoria: 4
    },
    {
      name: "Paquete de 3 Variadas",
      price: 39.9,
      img: "donas_11",
      idCategoria: 4
    },
    {
      name: "Dona Natural con Chocolate",
      price: 19.9,
      img: "donas_12",
      idCategoria: 4
    },
    {
      name: "Paquete de 3 Donas de Chocolate con Chispas",
      price: 39.9,
      img: "donas_13",
      idCategoria: 4
    },
    {
      name: "Dona Chocolate y Coco",
      price: 19.9,
      img: "donas_14",
      idCategoria: 4
    },
    {
      name: "Paquete Galletas de Chocolate",
      price: 29.9,
      img: "galletas_01",
      idCategoria: 6
    },
    {
      name: "Paquete Galletas de Chocolate y Avena",
      price: 39.9,
      img: "galletas_02",
      idCategoria: 6
    },
    {
      name: "Paquete de Muffins de Vainilla",
      price: 39.9,
      img: "galletas_03",
      idCategoria: 6
    },
    {
      name: "Paquete de 4 Galletas de Avena",
      price: 24.9,
      img: "galletas_04",
      idCategoria: 6
    },
    {
      name: "Galletas de Mantequilla Variadas",
      price: 39.9,
      img: "galletas_05",
      idCategoria: 6
    },
    {
      name: "Galletas de sabores frutales",
      price: 39.9,
      img: "galletas_06",
      idCategoria: 6
    },
    {
      name: "Hamburguesa Sencilla",
      price: 59.9,
      img: "hamburguesas_01",
      idCategoria: 2
    },
    {
      name: "Hamburguesa de Pollo",
      price: 59.9,
      img: "hamburguesas_02",
      idCategoria: 2
    },
    {
      name: "Hamburguesa de Pollo y Chili",
      price: 59.9,
      img: "hamburguesas_03",
      idCategoria: 2
    },
    {
      name: "Hamburguesa Queso y  Pepinos",
      price: 59.9,
      img: "hamburguesas_04",
      idCategoria: 2
    },
    {
      name: "Hamburguesa Cuarto de Libra",
      price: 59.9,
      img: "hamburguesas_05",
      idCategoria: 2
    },
    {
      name: "Hamburguesa Doble Queso",
      price: 69.9,
      img: "hamburguesas_06",
      idCategoria: 2
    },
    {
      name: "Hot Dog Especial",
      price: 49.9,
      img: "hamburguesas_07",
      idCategoria: 2
    },
    {
      name: "Paquete 2 Hot Dogs",
      price: 69.9,
      img: "hamburguesas_08",
      idCategoria: 2
    },
    {
      name: "4 Rebanadas de Pay de Queso",
      price: 69.9,
      img: "pastel_01",
      idCategoria: 5
    },
    {
      name: "Waffle Especial",
      price: 49.9,
      img: "pastel_02",
      idCategoria: 5
    },
    {
      name: "Croissants De la casa",
      price: 39.9,
      img: "pastel_03",
      idCategoria: 5
    },
    {
      name: "Pay de Queso",
      price: 19.9,
      img: "pastel_04",
      idCategoria: 5
    },
    {
      name: "Pastel de Chocolate",
      price: 29.9,
      img: "pastel_05",
      idCategoria: 5
    },
    {
      name: "Rebanada Pastel de Chocolate",
      price: 29.9,
      img: "pastel_06",
      idCategoria: 5
    },
    {
      name: "Pizza Spicy con Doble Queso",
      price: 69.9,
      img: "pizzas_01",
      idCategoria: 3
    },
    {
      name: "Pizza Jamón y Queso",
      price: 69.9,
      img: "pizzas_02",
      idCategoria: 3
    },
    {
      name: "Pizza Doble Queso",
      price: 69.9,
      img: "pizzas_03",
      idCategoria: 3
    },
    {
      name: "Pizza Especial de la Casa",
      price: 69.9,
      img: "pizzas_04",
      idCategoria: 3
    },
    {
      name: "Pizza Chorizo",
      price: 69.9,
      img: "pizzas_05",
      idCategoria: 3
    },
    {
      name: "Pizza Hawaiana",
      price: 69.9,
      img: "pizzas_06",
      idCategoria: 3
    },
    {
      name: "Pizza Tocino",
      price: 69.9,
      img: "pizzas_07",
      idCategoria: 3
    },
    {
      name: "Pizza Vegetales y Queso",
      price: 69.9,
      img: "pizzas_08",
      idCategoria: 3
    },
    {
      name: "Pizza Pepperoni y Queso",
      price: 69.9,
      img: "pizzas_09",
      idCategoria: 3
    },
    {
      name: "Pizza Aceitunas y Queso",
      price: 69.9,
      img: "pizzas_10",
      idCategoria: 3
    },
    {
      name: "Pizza Queso, Jamón y Champiñones",
      price: 69.9,
      img: "pizzas_11",
      idCategoria: 3
    }
]

export {
  products 
}