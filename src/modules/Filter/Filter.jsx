import cn from 'classnames';
import s from './Filter.module.scss';
import styles from './Choices.module.scss';
import { Container } from '../Container/Container';

export const Filter = () => (
  <section className={s.filter}>
    <h2 className='visually-hidden'></h2>

    <Container>
      <form className={s.filter__form}>
        <fieldset className={s.filter__group}>
          <input className={s.filter__radio} type='radio' name='type' value='bouquets' id='flower' defaultChecked />
          <label className={cn(s.filter__label, s.filter__label_flower)} htmlFor='flower'>
            Цветы
          </label>

          <input className={s.filter__radio} type='radio' name='type' value='toys' id='toys' />
          <label className={cn(s.filter__label, s.filter__label_toys)} htmlFor='toys'>
            Игрушки
          </label>

          <input className={s.filter__radio} type='radio' name='type' value='postcards' id='postcard' />
          <label className={cn(s.filter__label, s.filter__label_postcard)} htmlFor='postcard'>
            Открытки
          </label>
        </fieldset>

        <fieldset className={cn(s.filter__group, s.filter__group_choices)}>
          <div className={cn(s.filter__choices, styles.choices)}>
            <button className={cn(s.filter__select, styles.choices__btn)} type='button'>
              Цена
            </button>

            <div className={cn(styles.choices__box, s['filter__choices-box'])}>
              <fieldset className={s.filter__price}>
                <input className={s['filter__input-price']} type='text' name='minPrice' placeholder='от' />
                <input className={s['filter__input-price']} type='text' name='maxPrice' placeholder='до' />
              </fieldset>
            </div>
          </div>

          <div className={cn(s.filter__choices, s.filter__choices_type, styles.choices)}>
            <button className={cn(s.filter__select, styles.choices__btn)} type='button'>
              Тип товара
            </button>

            <div className={cn(styles.choices__box, s['filter__choices-box'], s['filter__choices-box_type'])}>
              <ul className={s['filter__type-list']}>
                <li className={s['filter__type-item']}>
                  <button className={s['filter__type-button']} type='button'>
                    Монобукеты
                  </button>
                </li>
                <li className={s['filter__type-item']}>
                  <button className={s['filter__type-button']} type='button'>
                    Авторские букеты
                  </button>
                </li>
                <li className={s['filter__type-item']}>
                  <button className={s['filter__type-button']} type='button'>
                    Цветы в коробке
                  </button>
                </li>
                <li className={s['filter__type-item']}>
                  <button className={s['filter__type-button']} type='button'>
                    Цветы в корзине
                  </button>
                </li>
                <li className={s['filter__type-item']}>
                  <button className={s['filter__type-button']} type='button'>
                    Букеты из сухоцветов
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </fieldset>
      </form>
    </Container>
  </section>
);
