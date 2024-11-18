import {useState, useEffect} from 'react'
import getAllProducts from '../../src/Service/getAllProducts'
import CardList from '../Components/Fragments/Cardlist/Cardlist'
import RadioButton from '../Components/Elements/RadioButton/RadioButton'
import Navbar from '../Components/Elements/Navbar/Navbar'

export default function ProductPage() {
  const [filterValue, setFilterValue] = useState('all');
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let allProducts = getAllProducts()
    allProducts = allProducts.length > 0 ? allProducts : []
    // allProducts = []
    setProducts(allProducts)
  }, [])

  

  const RadioButtonOpts = [
    
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Kemeja',
      value: 'Kemeja'
    },
    {
      label: 'Celana',
      value: 'Celana'
    },
    {
      label: 'Pria',
      value: 'Pria'
    },
    {
      label: 'Wanita',
      value: 'Wanita'
    },
  ]

  const filteredProducts = products.filter((prod) => 
    (filterValue === 'all' || prod.Category.toLowerCase().includes(filterValue.toLowerCase())) && 
    prod.Namaproduct.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

 
  return (
    <>
     <Navbar onSearch={setSearchQuery} />
      <div className='px-[150px] py-4 gap-4 mt-[68px] flex-wrap'>
          <h3 className='font-medium mb-4'>Filter</h3>
          <div className='flex gap-2 flex-wrap'>
             <RadioButton options={RadioButtonOpts} defaultValue={'all'} onChange={(value) => setFilterValue(value)}/>
          </div>
      </div>
     <section className='flex justify-between px-[150px] py-4'>
      <main className='grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          <CardList products={filteredProducts}/>
      </main>

    </section>
    </>
   
  )
}
