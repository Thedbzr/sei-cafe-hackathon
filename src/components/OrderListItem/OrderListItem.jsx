import './OrderListItem.css';

export default function OrderListItem({ order }) {
  return (
    <div className="OrderListItem">
      <div>
        <div>Order Id: 
          <span class="smaller">{order.orderId}</span>
        </div>
        <div class="smaller">{order.orderDate}</div>
      </div>
      <div class="align-rt">
        <div>${order.orderTotal}</div>
        <div class="smaller">{order.totalQty}</div>
      </div>
    </div>
  );
}



// order id: 
// total cost:
// order date:
// # items:

