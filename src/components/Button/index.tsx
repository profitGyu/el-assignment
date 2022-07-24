import { ReactNode, MouseEventHandler, FormEventHandler } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface IProps {
  children: ReactNode
  onClick?: MouseEventHandler
  primary: boolean
}

const Button = ({ children, onClick, primary }: IProps) => {
  return (
    <button type='button' className={cx(styles.button, { [styles.primary]: primary })} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
