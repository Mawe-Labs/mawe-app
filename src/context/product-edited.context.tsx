import React, {createContext, useState, useContext, ReactNode} from 'react';

interface Product {
  id: number;
  name: string;
  value: string;
  category: string;
}

interface ProductContextType {
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{product, setProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
