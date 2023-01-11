import React, {
  ButtonHTMLAttributes,
  forwardRef,
  MouseEventHandler,
  ReactNode,
} from 'react';
import cn from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { color = 'primary', disabled = false, size = 'medium', onClick, children, ...rest },
    ref,
  ) => {
    const classNames = cn(
      'flex justify-start py-3 px-4 text-sm font-bold tracking-wider rounded transition-all ease-in-out duration-[250ms] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]',
      {
        'text-inherit bg-inherit': color === 'inherit',
        'hover:bg-[#1565C0] bg-[#1976D2]': color === 'primary',
        'hover:bg-[#7B1FA2] bg-[#9C27B0]': color === 'secondary',
        'hover:bg-[#1B5E20] bg-[#2E7D32]': color === 'success',
        'hover:bg-[#B71C1C] bg-[#D32F2F]': color === 'error',
        'hover:bg-[#00B8D4] bg-[#0DCAF0]': color === 'info',
        'hover:bg-[#FFB300] bg-[#FFC107]': color === 'warning',
        'hover:brightness-100 text-[#BDBDBD] bg-[#EEEEEE] cursor-auto pointer-events-auto':
          disabled,
        'py-1 px-2.5 text-[0.813rem]': size === 'small',
        'py-1.5 px-4 text-sm': size === 'medium',
        'py-[8px] px-[22px] text-[0.938rem]py-[8px] px-[22px] text-[0.938rem]':
          size === 'large',
      },
    );

    return (
      <button
        className={classNames}
        disabled={disabled}
        {...rest}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
export default Button;
