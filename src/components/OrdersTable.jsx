function OrderTable({ orders }) {
    return (
        <table className="text-sm w-full">
            <thead>
                <tr className="p-4 grid grid-cols-8 w-full justify-between gap-4 bg-white">
                    <th className="">Tracking ID</th>
                    <th className=" flex justify-between"><span>Product</span><span><img src="./assets/caret-up-down.svg" className="h-4 w-4" alt="caret-up-down" /></span></th>
                    <th className="flex justify-between"><span>Customer</span><span><img src="./assets/caret-up-down.svg" className="h-4 w-4" alt="caret-up-down" /></span></th>
                    <th className="flex justify-between"><span>Date</span><span><img src="./assets/caret-up-down.svg" className="h-4 w-4" alt="caret-up-down" /></span></th>
                    <th className="text-left">Amount</th>
                    <th className="text-left">Payment Mode</th>
                    <th className="flex justify-between"><span>Status</span><span><img src="./assets/caret-up-down.svg" className="h-4 w-4" alt="caret-up-down" /></span></th>
                    <th className="">Action</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.id} className="p-4 grid grid-cols-8 gap-4 w-full justify-between">
                        <td className="text-center">{order.trackingId}</td>
                        <td className=""><div className="flex gap-2 justify-normal items-center"><img src={order.product.img} className="h-8 w-8 rounded-lg" alt={order.product.name} />{order.product.name}</div></td>
                        <td className="">{order.customer}</td>
                        <td className="">{order.date}</td>
                        <td className="">{order.ammount}</td>
                        <td className="">{order.paymentMode}</td>
                        <td><span className={(order.status==="Delivered" ? "bg-[#EBF9F1] text-[#1F9254]" : order.status === "Process" ? "bg-[#FEF2E5] text-[#CD6200]" : order.status === "Canceled" ? "bg-[#FBE7E8] text-[#000000]" : "") + "w-max px-3 py-2 rounded-[22px]"}>{order.status}</span></td>
                        <td className="flex justify-evenly">
                    <img src="./assets/edit.svg" className="h-6 w-6" alt="edit" />
                    <img src="./assets/trash.svg" className="h-6 w-6" alt="trash" />
</td>
                    </tr>   
                ))}
            </tbody>
        </table>
    );
}

export default OrderTable;
