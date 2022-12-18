import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { useEffect, useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




 const App = () => {

  const localStorageFavorites = localStorage.getItem('@currenSaleList:')
  const [product, setProduct] = useState([])
  const [currentSale, setCurrentSale] = useState(localStorageFavorites ? JSON.parse(localStorageFavorites) : [])
  const [cartTotal, setCartTotal] = useState(0)
  const [listProductReset,setListProductReset] = useState([])
  


   const showProducts = (inputData) => {
    
    if(inputData.trim() !== ''){
      
        const filteredProductsFiltered = product.filter((element)=>{
          return element.name.toLowerCase().includes(inputData.toLowerCase())
        })
        setProduct(filteredProductsFiltered)
    }
     
   }
  


   const inputVoid = (inputData) => {

    if(inputData.trim() === ''){
      setProduct(listProductReset)
   }
  }





    const handleClick =  (id) => {
    
      const findProduct = product.find((element)=>{
         return element.id === id
      })
    
      if(!currentSale.some((element)=> element.id === id)){
        
        setCurrentSale([...currentSale, findProduct])
       
        toast.success("Item adicionado com sucesso !", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
       
      }else{
        toast.error("Ops, esse item já está no carrinho!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
      }



    const totalCart = () => {
      const sumTotalCart = currentSale.reduce((acumulator, currentValue) => {
        return acumulator + Number(currentValue.price);
      }, 0)
      return sumTotalCart
    }
   
    
    const removeItemCart = (productId) => {
     
      const newListCart = currentSale.filter((element)=> element.id !==  productId)
      setCurrentSale(newListCart)
      toast.success("Item removido com sucesso !", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }



    const removeAllOfCart = () => {
      setCurrentSale([])
      setCartTotal(0)
      toast.success("Todos os itens foram removidos!", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }



    useEffect(()=>{
      localStorage.setItem('@currenSaleList:', JSON.stringify(currentSale))
    },[currentSale])




  return (
    <div className="App">
        <Header showProducts={showProducts} inputVoid={inputVoid}  />
        <ProductList product={product} setProduct={setProduct} handleClick={handleClick} setListProductReset={setListProductReset}  />
        <Cart currentSale={currentSale}  removeItemCart={removeItemCart} removeAllOfCart={removeAllOfCart} totalCart={totalCart} />
      
          <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
          />
        
    </div>
  );
}

export default App;
