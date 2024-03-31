import { data } from "./data/orders.json";
import OrderTable from "./components/OrdersTable";

/**
 * Renders the main application component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div className="my-12 font-sans">
      <div className="w-[1110px] mx-auto">
        {/* HEADER */}
        <div className="flex justify-between bg-white p-4 text-xs leading-[14.63px] font-[500] ">
          {/* HEADER LEFT SECTION  */}
          <div className="flex gap-6 items-center ">
            <div className="flex gap-3 items-center">
              <span>Show</span>
              <div className="flex rounded-lg border py-2 px-[9px] gap-1 border-black cursor-pointer">
                <span>10</span>
                <img src="./assets/caret-down.svg" alt="down" />
              </div>
              <span>entries</span>
            </div>
            <div className="flex items-center py-2 px-[9px] rounded-lg border border-[rgb(158,158,158,0.2)] gap-2 cursor-pointer">
              <img src="./assets/search.svg" alt="search" />
              <input
                placeholder="Search..."
                type="text"
                name="search"
                className="outline-none"
              />
            </div>
          </div>
          {/* HEADER RIGHT SECTION  */}
          <button className="bg-[#00B562] text-[#FFFFFF] py-2 px-3 gap-2 rounded-lg flex items-center">
            <img src="./assets/plus.svg" alt="add icon" />
            <span>Add Customer</span>
          </button>
        </div>

        {/* TABLE */}
        <OrderTable orders={data} />

        {/* PAGINATION */}
        <div className="flex p-4 justify-center items-center bg-white text-xs leading-[14.63px] font-[500]">
          <div className="flex gap-3 text-[#9E9E9E]  items-center">
            <span className="cursor-pointer">Previous</span>
            <button className="border py-2 px-[9px] rounded-lg bg-[#00B562] text-white flex justify-center items-center gap-1 cursor-pointer">
              <span className=" flex items-center justify-center w-[13px] h-[15px]">
                1
              </span>
            </button>
            <button className="border py-2 px-[9px] rounded-lg border-[#00B562] text-[#00B562] flex justify-center items-center gap-1 cursor-pointer">
              <span className=" flex items-center justify-center w-[13px] h-[15px]">
                2
              </span>
            </button>
            <button className="border py-2 px-[9px] rounded-lg border-[#00B562] text-[#00B562] flex justify-center items-center gap-1 cursor-pointer">
              <span className=" flex items-center justify-center w-[13px] h-[15px]">
                3
              </span>
            </button>
            <span className="cursor-pointer">Next</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
