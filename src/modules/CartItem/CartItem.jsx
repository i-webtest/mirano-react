import s from '../Cart/Cart.module.scss';

export const CartItem = ({ img, title, price }) => (
  <li className={s.cart__item}>
    <img className={s.cart__img} src={img} alt='Букет из роз Grand Avalanche (101 шт)' />
    <h4 className={s['cart__item-title']}>{title}</h4>
    <div className={s.cart__counter}>
      <button className={s['cart__counter-btn']}>-</button>
      <input className={s['cart__counter-input']} type='number' max='99' min='0' value='1' />
      <button className={s['cart__counter-btn']}>+</button>
    </div>
    <p className={s.cart__price}>{price}&nbsp;₽</p>
  </li>
);
