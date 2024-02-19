import React, { createContext, useContext } from "react";
import * as productApi from "../../../api/product";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../auth/contexts/AuthContext";

// Create an empty context
const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([{ id: 1, quantity: 0 }]);
  const { authUser } = useAuth();

  // product handler
  const fetchProducts = async () => {
    const response = await productApi.getAllProducts();
    return response;
  };

  const getProductById = async (id) => {
    const response = await productApi.getProductById(id);
    return response;
  };

  //cart handler
  const [cart, setCart] = useState([]);
  const createCart = async (data) => {
    const response = await productApi.createCart(data);
    return response;
  };

  const getCartByUserId = async (id) => {
    const response = await productApi.getCartByUserId(id);
    return response;
  };

  const getCartItemQuantity = async (id) => {
    const cart = await getCartByUserId(id);
    const quantity = cart.data.shoppingCartItem.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return quantity;
  };

  const addItemToCart = async (data) => {
    const response = await productApi.addItemToCart(data);
    return response;
  };

  const updateCartItem = async (id, quantity) => {
    const data = { quantity };
    const response = await productApi.updateCartItem(id, data);
    return response;
  };

  const deleteCartItem = async (id) => {
    const response = await productApi.deleteCartItem(id);
    return response;
  };

  const getProductsData = async () => {
    try {
      const response = await fetchProducts();
      console.log(response.data);
      setProducts(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getStocks = (productData) => {
   
    const stocks = productData.map((product) => {
      return { id: product.id, stock: product.stock };
    });
    console.log(stocks,"stock ********************");
    return stocks;
    
  };

  useEffect(() => {
    const getCartData = async () => {
      if (authUser) {
        const res = await getCartByUserId(authUser.id);
        console.log(res.data);
        console.log(res.data.shoppingCartItem);
        setCart(res.data.shoppingCartItem);
      }
    };
    getCartData();
  }, [authUser]);

  useEffect(() => {
    const fetchProductsAndStocks = async () => {
      try {
       const productsData = await getProductsData();
       const stocksData = getStocks(productsData)
       setStocks(stocksData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductsAndStocks();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        fetchProducts,
        getProductById,
        createCart,
        getCartByUserId,
        updateCartItem,
        deleteCartItem,
        addItemToCart,
        cart,
        setCart,
        getCartItemQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  return useContext(ProductContext);
}

export { ProductContextProvider, useProduct };
