import { useState } from 'react';
import s from './Choices.module.scss';
import cn from 'classnames';

export const Choices = ({ children, buttonLabel, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((oldIsOpen) => !oldIsOpen);
  };

  return (
    <div className={cn(s.choices, className)}>
      <button className={s.choices__btn} type='button' onClick={handleToggle}>
        {buttonLabel}
      </button>

      {isOpen && <div className={s.choices__box}>{children}</div>}
    </div>
  );
};
