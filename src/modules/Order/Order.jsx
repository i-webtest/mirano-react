import cn from 'classnames';
import s from './Order.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/orderSlice';

export const Order = () => {
  const dispatch = useDispatch();
  const isOrder = false;
  const isOpen = useSelector((state) => state.order.isOpen);

  const handlerClose = ({ target }) => {
    if (target.matches(`.${s.order}`) || target.closest(`.${s.order__close}`)) {
      dispatch(closeModal());
    }
  };

  if (!isOpen) return null;

  return (
    <div className={s.order} onClick={handlerClose}>
      <div className={s.order__wrapper}>
        {isOrder ? (
          <>
            <h2 className={s.order__title}>Заказ оформлен!</h2>
            <p className={s.order__id}>Ваш номер заказа: 971f365a-caa1-4cdb-9446-bad2eff047e1</p>
          </>
        ) : (
          <>
            <h2 className={s.order__title}>Оформить заказ</h2>
            <form className={s.order__form} id='order'>
              <fieldset className={s.order__fieldset}>
                <legend className={s.order__legend}>Данные заказчика</legend>
                <div className={s['order__input-group']}>
                  <input className={s.order__input} type='text' name='name-buyer' placeholder='Имя' />
                  <input className={s.order__input} type='text' name='phone-buyer' placeholder='Телефон' />
                </div>
              </fieldset>
              <fieldset className={s.order__fieldset}>
                <legend className={s.order__legend}>Данные получателя</legend>
                <div className={s['order__input-group']}>
                  <input className={s.order__input} type='text' name='name-recipient' placeholder='Имя' />
                  <input className={s.order__input} type='text' name='phone-recipient' placeholder='Телефон' />
                </div>
              </fieldset>
              <fieldset className={s.order__fieldset}>
                <legend className={s.order__legend}>Адрес</legend>
                <div className={s['order__input-group']}>
                  <input className={s.order__input} type='text' name='street' placeholder='Улица' />
                  <input
                    className={cn(s.order__input, s.order__input_min)}
                    type='text'
                    name='house'
                    placeholder='Дом'
                  />
                  <input
                    className={cn(s.order__input, s.order__input_min)}
                    type='text'
                    name='apartment'
                    placeholder='Квартира'
                  />
                </div>
              </fieldset>
              <fieldset className={s.order__fieldset}>
                <div className={s.order__payment}>
                  <label className={s['order__label-radio']}>
                    <input className={s.order__radio} type='radio' name='payment-online' value='true' defaultChecked />
                    Оплата онлайн
                  </label>
                </div>
                <div className={s.order__delivery}>
                  <label htmlFor='delivery'>Доставка 01.07</label>
                  <input type='hidden' name='delivery-date' value='01.07' />
                  <div className={s['order__select-wrapper']}>
                    <select className={s.order__select} name='delivery-time' id='delivery'>
                      <option value='9-12'>с 9:00 до 12:00</option>
                      <option value='12-15'>с 12:00 до 15:00</option>
                      <option value='15-18'>с 15:00 до 18:00</option>
                      <option value='18-21'>с 18:00 до 21:00</option>
                    </select>
                  </div>
                </div>
              </fieldset>
            </form>
            <div className={s.order__footer}>
              <p className={s.order__total}>92100&nbsp;₽</p>
              <button className={s.order__button} type='submit' form='order'>
                Заказать
              </button>
            </div>
          </>
        )}
      </div>

      <button className={s.order__close} type='button'>
        ×
      </button>
    </div>
  );
};
