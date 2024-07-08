import s from './Cart.module.scss';
import { goodsArray } from '../../goodsArray';
import { CartItem } from '../CartItem/CartItem';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/cartSlice';
import { openModal } from '../../redux/orderSlice';

export const Cart = () => {
  const isOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  const handlerCartClose = () => {
    dispatch(toggleCart());
  };

  const handlerOrderOpen = () => {
    dispatch(openModal());
  };

  if (!isOpen) return null;

  return (
    <section className={cn(s.cart, s.cart_open)}>
      <div className={s.cart__container}>
        <div className={s.cart__header}>
          <h3 className={s.cart__title}>Ваш заказ</h3>

          <button className={s.cart__close} onClick={handlerCartClose}>
            <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect x='5' y='5.70715' width='1' height='25' transform='rotate(-45 5 5.70715)' fill='#D17D2F' />
              <rect x='22.6777' y='5' width='1' height='25' transform='rotate(45 22.6777 5)' fill='#D17D2F' />
            </svg>
          </button>
        </div>

        <p className={s['cart__date-delivery']}>сегодня в 14:00</p>

        <ul className={s.cart__list}>
          {goodsArray.map((item) => (
            <CartItem className={s.cart__item} {...item} key={item.id} />
          ))}
        </ul>

        <div className={s.cart__footer}>
          <button className={s['cart__order-btn']} onClick={handlerOrderOpen}>
            Оформить
          </button>
          <p className={cn(s.cart__price, s['cart__price_total'])}>0&nbsp;₽</p>
        </div>
      </div>
    </section>
  );
};
