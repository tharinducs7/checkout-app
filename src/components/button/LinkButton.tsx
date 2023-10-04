import { ElementType, ReactNode } from 'react';

import { iSharedButton } from '../../types/components';
import { clsxm } from '../../utils';

import Button  from './Button';
import styles from './LinkButton.module.css';

type Props = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  target?: string;
  name?: string;
  role?: string;
  ariaLabel?: string;
  href?: string;
} & iSharedButton

const LinkButton = ({
  className,
  disabled,
  iconOnly,
  small,
  children,
  rounded,
  variant,
  mode,
  name,
  role,
  ariaLabel,
  href,
  ...rest
}: Props) => {
  const renderButton = (as?: ElementType) => (
    <Button
      as={as}
      small={small}
      iconOnly={iconOnly}
      variant={variant}
      rounded={rounded}
      mode={mode}
      disabled={disabled}
      name={name}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  )

  return disabled ? (
    renderButton()
  ) : (
    <a href={href} className={clsxm(styles.linkButton, mode === 'dark' && styles.dark, className)} {...rest}>
      {renderButton('span')}
    </a>
  );
};

export default LinkButton;
