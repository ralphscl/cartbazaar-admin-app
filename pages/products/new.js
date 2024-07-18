import { useState } from 'react';
import Layout from '@/components/Layout';
import axios from 'axios';

const NewProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    sku: '',
  })
  
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = product;
    axios.post('/api/products', data)
  }

  return (
    <Layout className="bg-gray-100 m-8 rounded-md shadow-lg lg:w-8/12 xl:w-6/12">
      <h1 className='text-accent text-xl font-bold my-4'>New Product</h1>
      <form onSubmit={handleOnSubmit}>
        <div className='sm:flex gap-2'>
          <div className='sm:w-1/2'>
            <label>Product Name</label>
            <input 
              type="text" 
              placeholder='Name' 
              name='name' 
              value={product.name} 
              onChange={handleOnChange} 
            />
          </div>
          
          <div className='sm:w-1/2' >
            <label>Product Category</label>
            <input 
              type="text" 
              placeholder='Category' 
              name='category' 
              value={product.category} 
              onChange={handleOnChange} 
            />
          </div>
        </div>

        <label>Product Description</label>
        <textarea 

          placeholder='Description' 
          className='h-24'  
          name='description' 
          value={product.description}
          onChange={handleOnChange} 
        />

        <div className='sm:flex gap-2'>
          <div className='sm:w-1/2'>
            <label>Product Price</label>
            <input 
              type="text" 
              placeholder='Price' 
              name='price' 
              value={product.price}
              onChange={handleOnChange} />
          </div>

          <div className='sm:w-1/2' >
            <label>SKU</label>
            <input 
              type="text" 
              placeholder='SKU' 
              name='sku' 
              value={product.sku}
              onChange={handleOnChange} />
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>Save</button>
      </form>

    </Layout>
  )
}

export default NewProduct;
