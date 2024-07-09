import s from './Goods.module.scss';
import { Cart } from '../Cart/Cart';
import { Card } from '../Card/Card';
import cn from 'classnames';
import { Container } from '../Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods } from '../../redux/goodsSlice';
import { useEffect } from 'react';
import { API_URL } from '../../const';

export const Goods = () => {
  const dispatch = useDispatch();
  const { items: goods, status: goodsStatus, error } = useSelector((state) => state.goods);

  useEffect(() => {
    if (goodsStatus === 'idle') {
      dispatch(fetchGoods());
    }
  }, [dispatch, goodsStatus]);

  let content = null;

  if (goodsStatus === 'loading') {
    content = <p>Loading...</p>;
  }

  if (goodsStatus === 'success') {
    content = (
      <ul className={s.goods__list}>
        {goods.map((item) => (
          <li className={s.goods__item} key={item.id}>
            <Card
              className={s.goods__card}
              id={item.id}
              img={`${API_URL}${item.photoUrl}`}
              title={item.name}
              dateDelivery='сегодня в 14:00'
              price={item.price}
            />
          </li>
        ))}
      </ul>
    );
  }

  if (goodsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section className={s.goods}>
      <Container className={cn(s.container, s.goods__container)}>
        <div className={s.goods__box}>
          <h2 className={s.goods__title}>Цветы</h2>
          {content}
        </div>

        <Cart />
      </Container>
    </section>
  );
};
