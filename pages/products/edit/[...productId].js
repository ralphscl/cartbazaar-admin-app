
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import axios from 'axios';


const EditProduct = () => {
  const router = useRouter();
  const {productId} = router.query;

  useEffect(() => {
    if(!productId) return;

    axios.get('/api/products?id='+productId).then(response => {
      console.log(response.data)
    })
  }, [productId])
  
  return (
    <Layout>
      <>1</>
    </Layout>
  )
}

export default EditProduct;
