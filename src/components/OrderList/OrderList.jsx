import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ order }) {
  // const orders = order.map(order =>
  //   <OrderListItem
  //     key={order._id}
  //     order={order}
  //   />
  // )

  return (
    <main className="OrderList">
      <OrderListItem
      key={order._id}
      order={order}
      />
    </main>
  );
}



