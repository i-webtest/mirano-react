import s from './Card.module.scss';
import cn from 'classnames';
import React from 'react';

export const Card = ({ className, img, title, dateDelivery, price }) => (
  <article className={cn(className, s.card)}>
    <img className={s.card__image} src={img} alt={title} />
    <div className={s.card__content}>
      <h3 className={s.card__title}>{title}</h3>
      <div className={s.card__footer}>
        <p className={s['card__date-delivery']}>{dateDelivery}</p>
        <button className={s.card__button}>{price}&nbsp;₽</button>
      </div>
    </div>
  </article>
);
