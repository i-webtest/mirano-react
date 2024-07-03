import s from './Goods.module.scss';
import { Cart } from '../Cart/Cart';
import { goodsArray } from '../../goodsArray';
import { Card } from '../Card/Card';
import cn from 'classnames';
import { Container } from '../Container/Container';

export const Goods = () => (
  <section className={s.goods}>
    <Container className={cn(s.container, s.goods__container)}>
      <div className={s.goods__box}>
        <h2 className={s.goods__title}>Цветы</h2>

        <ul className={s.goods__list}>
          {goodsArray.map((item) => (
            <li className={s.goods__item} key={item.id}>
              <Card className={s.goods__card} {...item} />
            </li>
          ))}
        </ul>
      </div>

      <Cart />
    </Container>
  </section>
);
