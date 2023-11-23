import React from 'react'
import LandingPage from '@/assets/imgs/landingPage.png'
import Image from 'next/image'
import Controller from './controller'
import { ImgIcon } from '@/components'

export const ProjectDisplay = (props) => {
  const controller = Controller.getInstance(props)
  if(!controller)
    return <></>
  const {
    getStyle,
    getProject
  } = controller
  return (
    <div style={{ display: 'flex', gap: '2.5rem', flexDirection: 'column' }}>
      <article style={{ display: 'flex', gap: '1rem' }}>
        <a>
          <span style={{ width: '20rem', height: '10rem', background: 'rgba(59,130,246,.2)', display: 'block', overflow: 'hidden', padding: '50px 50px', borderRadius: '10px' }}>
            <Image width={465} height={320} src={getProject().img} alt={''} style={{ height: '20rem', borderRadius: '10px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)' }} />
          </span>
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '.5rem' }}>
          <h3 style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}>{getProject().name}</h3>
          <p>
            {getProject().desc}
          </p>
          <div style={{ display: 'flex', gap: '.5rem' }}>
            {getProject().tools.map(tool => <><ImgIcon size={25} name={tool}/></>)}
          </div>
        </div>
      </article>
    </div>
  )
}
