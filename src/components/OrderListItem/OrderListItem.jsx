import './OrderListItem.css';

export default function OrderListItem({ order, setActiveOrder }) {
  return (
    <div className="OrderListItem" >
      <div>
        <div>Order Id: 
          <span class="smaller">{order.orderId}</span>
        </div>
        <div class="smaller">{order.orderDate}</div>
      </div>
      <div class="align-rt">
        <div>${order.orderTotal.toFixed(2)}</div>
        <div class="smaller">{order.totalQty} Items</div>
      </div>
    </div>
  );
}



