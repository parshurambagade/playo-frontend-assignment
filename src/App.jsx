
import {data} from './data/orders.json'
import OrderTable from './components/OrdersTable';

function App() {
console.log(data);
  return (
    <div className='bg-[#F7F7F7]'>
      <div className='w-[1110px] mx-auto'>
        <div className='flex justify-between bg-white p-4'>
          <div className='flex gap-6 items-center'>
            <div className='flex gap-3 items-center'>
              <span>Show</span>
              <div className='flex rounded-lg border py-2 px-[9px] gap-1 border-black'>
                <span>10</span>
                <img src="./assets/caret-down.svg" alt="down" />  
              </div>
              <span>entries</span>
            </div>
            <div className='flex items-center py-2 px-[9px] rounded-lg border border-[rgb(158,158,158,0.2)] gap-2'>
              <img src="./assets/search.svg" alt="search" />
              <input placeholder="Search..." type="text" name="search" /></div>
          </div>
          <button className='bg-[#00B562] text-[#FFFFFF] py-2 px-3 gap-2 rounded-lg flex items-center'>
            <img src="./assets/plus.svg" alt="add icon" />
            <span>Add Customer</span>
          </button>
        </div>
      <OrderTable orders={data} />
      <div className='flex p-4 justify-center items-center bg-white'>
        <div className='flex gap-3 text-[#9E9E9E]  items-center'>
          <span>Previous</span>
          <span className='border py-2 px-[9px] rounded-lg bg-[#00B562] text-white flex justify-center items-center gap-1'>1</span>
          <span className='border py-2 px-[9px] rounded-lg border-[#00B562] text-[#00B562] flex justify-center items-center gap-1'>2</span>
          <span className='border py-2 px-[9px] rounded-lg border-[#00B562] text-[#00B562] flex justify-center items-center gap-1'>3</span>
          <span>Next</span>
        </div>
      </div>  
      </div>
    </div>
  )
}

export default App
