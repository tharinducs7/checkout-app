import { ButtonHTMLAttributes, ElementType } from 'react';

import { iSharedButton } from '../../types/components';
import { clsxm } from '../../utils';

import styles from './Button.module.css';

type Props = {
  as?: ElementType;
} & iSharedButton &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  as: Component = 'button',
  children,
  className,
  iconOnly,
  small,
  type = 'button',
  variant = 'primary',
  mode = 'light',
  rounded,
  ...rest
}: Props) => {
  const classNames = clsxm(
    styles.btn,
    styles[variant],
    mode === 'dark' && styles.dark,
    small && styles.small,
    iconOnly && styles.iconOnly,
    rounded && styles.rounded,
    className
  );

  return (
    <Component type={Component === 'button' ? type : undefined} className={classNames} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
