import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import Layout from '@/components/Layout'
import { HiPencilSquare, HiTrash } from 'react-icons/hi2';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then( response => {
      setProducts(response.data);
    })
  }, [])

  return (
    <Layout>
      <Link 
        href={'/products/new'} 
        className='btn btn-primary'
      >
        Add Product
      </Link>

      <table>
        <thead>
          <tr>
            <td>Product Name</td>
            <td>Description</td>
            <td>Category</td>
            <td>Price</td>
            <td>SKU</td>
            <td></td>
          </tr>
        </thead>
        {products.map(product => (
          <tbody>
          {console.log(product)}
            <tr>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.sku}</td>
              <td className='flex gap-1 justify-center'>
                <Link href={'/products/edit/'+product._id} className='btn bg-green-300 text-white px-2'>
                  <HiPencilSquare />
                </Link>
                <button className='btn bg-red-300 text-white px-2'>
                  <HiTrash />
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

    </Layout>
  )
}

export default Products
