import s from './Choices.module.scss';
import cn from 'classnames';

export const Choices = ({ children, buttonLabel, className, isOpen, onToggle }) => {
  return (
    <div className={cn(s.choices, className)}>
      <button className={s.choices__btn} type='button' onClick={onToggle}>
        {buttonLabel}
      </button>

      {isOpen && <div className={s.choices__box}>{children}</div>}
    </div>
  );
};
