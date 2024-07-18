import Layout from '@/components/Layout'
import Link from 'next/link'

const Products = () => {

  return (
    <Layout>
      <Link 
        href={'/products/new'} 
        className='btn btn-primary'
      >
        Add Product
      </Link>
    </Layout>
  )
}

export default Products
