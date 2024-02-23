import React, { createContext, useContext } from "react";
import * as productApi from "../../../api/product";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../auth/contexts/AuthContext";
import { data } from "autoprefixer";

// Create an empty context
const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [productsImages, setProductsImages] = useState([]);
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

  const updateStock = async (id, stock) => {
    const newStock = { newStock: stock };
    const response = await productApi.updateStock(id, newStock);
    return response;
  };

  //cart handler
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState(null);
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

  const updateCartItemAttribute = async (id, attribute) => {
    const data = { attribute };
    const response = await productApi.updateCartItem(id, data);
    return response;
  };

  const deleteCartItem = async (id) => {
    const response = await productApi.deleteCartItem(id);
    return response;
  };

  const deleteCart = async (cartId) => {
    const response = await productApi.deleteCart(cartId);
    setCart([]);
    return response;
  };

  const getProductsData = async () => {
    try {
      const response = await fetchProducts();
      // console.log(response.data);
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
    return stocks;
  };

  const getCartData = async () => {
    if (authUser) {
      const res = await getCartByUserId(authUser.id);
      setCartId(res.data.id);
      setCart(res.data.shoppingCartItem);
    }
  };

  const getAllProductsImages = async () => {
    const response = await productApi.getAllProductsImages();
    setProductsImages(response.data);
    console.log(response.data, "products images in product context");
    return response;
  };

  useEffect(() => {
    getCartData();
  }, [authUser]);

  useEffect(() => {
    const fetchProductsAndStocks = async () => {
      try {
        const productsImages = await getAllProductsImages();
        const productsData = await getProductsData();
        console.log(productsData, "products data in product context");
        const stocksData = getStocks(productsData);
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
        getStocks,
        stocks,
        setStocks,
        updateCartItemAttribute,
        getCartData,
        updateStock,
        cartId,
        deleteCart,
        productsImages,
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
