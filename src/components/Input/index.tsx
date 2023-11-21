import React from 'react'
import style from './style.module.css'
import { Icon } from '../Icon'
import { Div } from '../Div'
import { Label } from '../Label'

export const Input = 
  ({icon, placeholder, className, title, value, onChange, password, disabled}:any) => <>
      {
        title ?           
          <Label 
            text={title}
            capitalize /> : <></>
      }
      <form className={`${style.container} ${className}`}>
        <input 
          className={`${style.input} ${icon ? style.inputIcon : ''}`} 
          value={value}
          onChange={({target}:any) => onChange ? onChange(target.value) : undefined}
          type={password ? 'password' : ''}
          disabled={disabled}/>
        {
          icon ? 
            <i className={style.icon}>
              <Icon icon={icon} size={20} />
            </i> : <></>
        }
      </form>
    </>