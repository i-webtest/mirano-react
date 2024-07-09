import s from './Card.module.scss';
import cn from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';

export const Card = ({ className, id, img, title, dateDelivery, price }) => {
  const dispatch = useDispatch();

  const handlerAddToCart = () => {
    dispatch(addItemToCart({ id, img, title, dateDelivery, price }));
  };

  return (
    <article className={cn(className, s.card)}>
      <img className={s.card__image} src={img} alt={title} />
      <div className={s.card__content}>
        <h3 className={s.card__title}>{title}</h3>
        <div className={s.card__footer}>
          <p className={s['card__date-delivery']}>{dateDelivery}</p>
          <button className={s.card__button} onClick={handlerAddToCart}>
            {price}&nbsp;₽
          </button>
        </div>
      </div>
    </article>
  );
};
