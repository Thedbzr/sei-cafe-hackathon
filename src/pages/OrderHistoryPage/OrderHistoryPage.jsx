import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import './OrderHistoryPage.css';
import * as usersService from '../../utilities/users-service';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import * as ordersAPI from '../../utilities/orders-api';


export default function OrderHistoryPage({ user, setUser }) {
  const [cart, setCart] = useState([]);



  useEffect(function() {
    // Load cart (a cart is the unpaid order for the logged in user)
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);



  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList order={cart}/>
      <OrderDetail />
    </main>
  );
}