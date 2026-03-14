import type { ComponentProps } from 'react';

import styles from './styles.module.css';

type BaseInputProps = {
  id: string;
  label?: string;
} & ComponentProps<'input'>;

export const BaseInput = ({ id, label, ...rest }: BaseInputProps) => {
  const labelText = label ?? 'Label Default'; // Se não manda label, padrão Label Default

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} {...rest} />
    </>
  );
};
