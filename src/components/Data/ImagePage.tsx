import React, { useEffect, useState } from 'react';

interface Item {
  id: string;
  image: string;
  name: string;
  value: number;
}

const ImagePage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  
  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await fetch('/items.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar o arquivo JSON');
        }
        const data: Item[] = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    loadItems();
  }, []);

  return (
    <div>
      <h1>Imagens</h1>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={`/path/to/images/${item.image}.jpg`} alt={item.name} />
          <p>Valor: {item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ImagePage;

