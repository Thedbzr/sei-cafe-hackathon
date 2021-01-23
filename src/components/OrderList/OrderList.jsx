import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orderHistory, setActiveOrder, activeOrder}) {
  const orders = orderHistory.map(order =>
    <div onClick={() => setActiveOrder(order)}>
      <OrderListItem
      key={order._id}
      order={order}
      className={order === activeOrder ? 'active' : ''}
      />
    </div>

  )

  return (
    <main className="OrderList">
      
      {orders}

    </main>
  );
}

