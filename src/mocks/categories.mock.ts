import banana from '../assets/products/banana.png';
import detergent from '../assets/products/detergent.png';
import limon from '../assets/products/limon.png';
import corn from '../assets/products/corn.png';
import meat from '../assets/products/meat.png';
import sausage from '../assets/products/sausage.png';
import gratedCheese from '../assets/products/grated-cheese.png';
import popcorn from '../assets/products/popcorn.png';
import coca from '../assets/products/coca.png';
import carrot from '../assets/products/carrot.png';
import bread from '../assets/products/bread.png';

export const categories = [
  {
    id: 1,
    name: 'Todos',
    products: [
      {
        id: 1,
        image: banana,
        name: 'Banana',
        value: 20,
      },
      {
        id: 2,
        image: limon,
        name: 'Limão',
        value: 20,
      },
      {
        id: 3,
        image: corn,
        name: 'Milho',
        value: 20,
      },
      {
        id: 4,
        image: meat,
        name: 'Carne',
        value: 20,
      },
      {
        id: 5,
        image: sausage,
        name: 'Salsicha',
        value: 20,
      },
      {
        id: 6,
        image: carrot,
        name: 'Cenoura',
        value: 20,
      },
      {
        id: 7,
        image: detergent,
        name: 'Detergente',
        value: 20,
      },
      {
        id: 8,
        image: coca,
        name: 'Coca',
        value: 20,
      },
      {
        id: 9,
        image: popcorn,
        name: 'Pipoca',
        value: 20,
      },
      {
        id: 10,
        image: gratedCheese,
        name: 'Queijo ralado',
        value: 20,
      },
    ],
  },
  {
    id: 2,
    name: 'Bazar e Limpeza',
    products: [
      {
        id: 1,
        image: detergent,
        name: 'Detergente',
        value: 20,
      },
    ],
  },
  {
    id: 3,
    name: 'Bebidas',
    products: [
      {
        id: 1,
        image: coca,
        name: 'Coca',
        value: 20,
      },
    ],
  },
  {
    id: 4,
    name: 'Geladeira',
    products: [
      {
        id: 1,
        image: meat,
        name: 'Carne',
        value: 20,
      },
      {
        id: 2,
        image: sausage,
        name: 'Salsicha',
        value: 20,
      },
    ],
  },
  {
    id: 5,
    name: 'Frutas, Vegetais e Legumes',
    products: [
      {
        id: 1,
        image: banana,
        name: 'Banana',
        value: 20,
      },
      {
        id: 2,
        image: limon,
        name: 'Limão',
        value: 20,
      },
      {
        id: 3,
        image: carrot,
        name: 'Cenoura',
        value: 20,
      },
      {
        id: 4,
        image: corn,
        name: 'Milho',
        value: 20,
      },
    ],
  },
  {
    id: 6,
    name: 'Higiene pessoal',
    products: [],
  },
  {
    id: 7,
    name: 'Importados',
    products: [],
  },
  {
    id: 8,
    name: 'Mercearia',
    products: [
      {
        id: 1,
        image: popcorn,
        name: 'Pipoca',
        value: 20,
      },
      {
        id: 2,
        image: gratedCheese,
        name: 'Queijo ralado',
        value: 20,
      },
    ],
  },
  {
    id: 9,
    name: 'Padaria',
    products: [
      {
        id: 1,
        image: bread,
        name: 'Pão',
        value: 20,
      },
    ],
  },
  {
    id: 10,
    name: 'Saúde e Beleza',
    products: [],
  },
];
