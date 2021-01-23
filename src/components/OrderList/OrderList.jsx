import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orderHistory, setActiveOrder, activeOrder}) {
  const orders = orderHistory.map(order =>
    <OrderListItem
      key={order._id}
      order={order}
      className={order === activeOrder ? 'active' : ''}
      //onClick={() => setActiveOrder(order)}
    />

  )

  return (
    <main className="OrderList">
      
      {orders}

    </main>
  );
}

