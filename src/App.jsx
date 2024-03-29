
import {data} from './data/orders.json'
import OrderTable from './components/OrdersTable';

function App() {
console.log(data);
  return (
    <div className='bg-[#F7F7F7]'>
      <div className='w-[1110px] mx-auto'>
      <OrderTable orders={data} />  
      </div>
    </div>
  )
}

export default App
