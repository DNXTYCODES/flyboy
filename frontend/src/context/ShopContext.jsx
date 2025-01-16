import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    const getCartCount = () => {
        return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    };

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);

        if (quantity > 0) {
            cartData[itemId] = quantity;
        } else {
            delete cartData[itemId];
        }

        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemId, quantity }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    const getCartAmount = () => {
        return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
            const itemInfo = products.find((product) => product._id === itemId);
            return total + (itemInfo?.price || 0) * quantity;
        }, 0);
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
        if (token) {
            getUserCart(token);
        }
    }, [token]);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
















// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = "$";
//   const delivery_fee = 10;
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItems, setCartItems] = useState({});
//   const [products, setProducts] = useState([]);
//   const [token, setToken] = useState("");
//   const navigate = useNavigate();

//   const addToCart = async (itemId) => {
//     let cartData = structuredClone(cartItems);

//     if (cartData[itemId]) {
//       cartData[itemId] += 1;
//     } else {
//       cartData[itemId] = 1;
//     }
//     setCartItems(cartData);

//     if (token) {
//       try {
//         await axios.post(
//           backendUrl + "/api/cart/add",
//           { itemId },
//           { headers: { token } }
//         );
//       } catch (error) {
//         console.log(error);
//         toast.error(error.message);
//       }
//     }
//   };

//   const getCartCount = () => {
//     return Object.values(cartItems).reduce((total, count) => total + count, 0);
//   };

//   const updateQuantity = async (itemId, quantity) => {
//     let cartData = structuredClone(cartItems);

//     if (quantity <= 0) {
//       delete cartData[itemId];
//     } else {
//       cartData[itemId] = quantity;
//     }

//     setCartItems(cartData);

//     if (token) {
//       try {
//         await axios.post(
//           backendUrl + "/api/cart/update",
//           { itemId, quantity },
//           { headers: { token } }
//         );
//       } catch (error) {
//         console.log(error);
//         toast.error(error.message);
//       }
//     }
//   };

//   const getCartAmount = () => {
//     let totalAmount = 0;
//     for (const itemId in cartItems) {
//       const itemInfo = products.find((product) => product._id === itemId);
//       if (itemInfo) {
//         totalAmount += itemInfo.price * cartItems[itemId];
//       }
//     }
//     return totalAmount;
//   };

//   const getProductsData = async () => {
//     try {
//       const response = await axios.get(backendUrl + "/api/product/list");
//       if (response.data.success) {
//         setProducts(response.data.products.reverse());
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const getUserCart = async (token) => {
//     try {
//       const response = await axios.post(
//         backendUrl + "/api/cart/get",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     getProductsData();
//   }, []);

//   useEffect(() => {
//     if (!token && localStorage.getItem("token")) {
//       setToken(localStorage.getItem("token"));
//       getUserCart(localStorage.getItem("token"));
//     }
//     if (token) {
//       getUserCart(token);
//     }
//   }, [token]);

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItems,
//     addToCart,
//     setCartItems,
//     getCartCount,
//     updateQuantity,
//     getCartAmount,
//     navigate,
//     backendUrl,
//     setToken,
//     token,
//   };

//   return (
//     <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;



















// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//     const currency = "$";
//     const delivery_fee = 10;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [search, setSearch] = useState("");
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState("");
//     const navigate = useNavigate();

//     const addToCart = async (itemId) => {
//         let cartData = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             cartData[itemId] += 1;
//         } else {
//             cartData[itemId] = 1;
//         }

//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(
//                     backendUrl + "/api/cart/add",
//                     { itemId },
//                     { headers: { token } }
//                 );
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const itemId in cartItems) {
//             try {
//                 if (cartItems[itemId] > 0) {
//                     totalCount += cartItems[itemId];
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//         return totalCount;
//     };

//     const updateQuantity = async (itemId, quantity) => {
//         let cartData = structuredClone(cartItems);
//         cartData[itemId] = quantity;
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(
//                     backendUrl + "/api/cart/update",
//                     { itemId, quantity },
//                     { headers: { token } }
//                 );
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const itemId in cartItems) {
//             let itemInfo = products.find((product) => product._id === itemId);
//             try {
//                 if (cartItems[itemId] > 0) {
//                     totalAmount += itemInfo.price * cartItems[itemId];
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//         return totalAmount;
//     };

//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + "/api/product/list");
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(
//                 backendUrl + "/api/cart/get",
//                 {},
//                 { headers: { token } }
//             );
//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         getProductsData();
//     }, []);

//     useEffect(() => {
//         if (!token && localStorage.getItem("token")) {
//             setToken(localStorage.getItem("token"));
//             getUserCart(localStorage.getItem("token"));
//         }
//         if (token) {
//             getUserCart(token);
//         }
//     }, [token]);

//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         setCartItems,
//         getCartCount,
//         updateQuantity,
//         getCartAmount,
//         navigate,
//         backendUrl,
//         setToken,
//         token,
//     };

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;

// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = '$';
//     const delivery_fee = 10;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('');
//     const navigate = useNavigate();

//     const addToCart = async (itemId) => {
//         let cartData = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             cartData[itemId] += 1;  // Increment quantity if the item is already in the cart
//         } else {
//             cartData[itemId] = 1;  // Add the item to the cart with quantity 1
//         }

//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/add', { itemId }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const item in cartItems) {
//             totalCount += cartItems[item];
//         }
//         return totalCount;
//     };

//     const updateQuantity = async (itemId, quantity) => {
//         let cartData = structuredClone(cartItems);

//         cartData[itemId] = quantity;

//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/update', { itemId, quantity }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             let itemInfo = products.find((product) => product._id === item);
//             if (itemInfo) {
//                 totalAmount += itemInfo.price * cartItems[item];
//             }
//         }
//         return totalAmount;
//     };

//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + '/api/product/list');
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         getProductsData();
//     }, []);

//     useEffect(() => {
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'));
//             getUserCart(localStorage.getItem('token'));
//         }
//         if (token) {
//             getUserCart(token);
//         }
//     }, [token]);

//     const value = {
//         products, currency, delivery_fee,
//         search, setSearch, showSearch, setShowSearch,
//         cartItems, addToCart, setCartItems,
//         getCartCount, updateQuantity,
//         getCartAmount, navigate, backendUrl,
//         setToken, token
//     };

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;





































// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = '$';
//     const delivery_fee = 10;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('')
//     const navigate = useNavigate();

//     const addToCart = async (itemId, size) => {

//         if (!size) {
//             toast.error('Select Product Size');
//             return;
//         }

//         let cartData = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             }
//             else {
//                 cartData[itemId][size] = 1;
//             }
//         }
//         else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }
//         setCartItems(cartData);

//         if (token) {
//             try {

//                 await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })

//             } catch (error) {
//                 console.log(error)
//                 toast.error(error.message)
//             }
//         }

//     }

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item];
//                     }
//                 } catch (error) {

//                 }
//             }
//         }
//         return totalCount;
//     }

//     const updateQuantity = async (itemId, size, quantity) => {

//         let cartData = structuredClone(cartItems);

//         cartData[itemId][size] = quantity;

//         setCartItems(cartData)

//         if (token) {
//             try {

//                 await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })

//             } catch (error) {
//                 console.log(error)
//                 toast.error(error.message)
//             }
//         }

//     }

//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const items in cartItems) {
//             let itemInfo = products.find((product) => product._id === items);
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalAmount += itemInfo.price * cartItems[items][item];
//                     }
//                 } catch (error) {

//                 }
//             }
//         }
//         return totalAmount;
//     }

//     const getProductsData = async () => {
//         try {

//             const response = await axios.get(backendUrl + '/api/product/list')
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse())
//             } else {
//                 toast.error(response.data.message)
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     const getUserCart = async ( token ) => {
//         try {

//             const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
//             if (response.data.success) {
//                 setCartItems(response.data.cartData)
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     useEffect(() => {
//         getProductsData()
//     }, [])

//     useEffect(() => {
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'))
//             getUserCart(localStorage.getItem('token'))
//         }
//         if (token) {
//             getUserCart(token)
//         }
//     }, [token])

//     const value = {
//         products, currency, delivery_fee,
//         search, setSearch, showSearch, setShowSearch,
//         cartItems, addToCart,setCartItems,
//         getCartCount, updateQuantity,
//         getCartAmount, navigate, backendUrl,
//         setToken, token
//     }

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     )

// }

// export default ShopContextProvider;
