import React, {createContext, useState, useContext, ReactNode} from 'react';

interface Products {
  id: number;
  image: any;
  name: string;
  value: number;
  category: string;
}

interface Categories {
  id: number;
  name: string;
  products: Products[];
}

interface ProductsContextType {
  products: Categories[] | null;
  setProducts: React.Dispatch<React.SetStateAction<Categories[] | null>>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [products, setProducts] = useState<Categories[] | null>(null);

  return (
    <ProductsContext.Provider value={{products, setProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductsProvider');
  }
  return context;
};
