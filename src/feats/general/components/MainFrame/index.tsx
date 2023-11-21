import React from 'react'
import Controller from './controller'
import { useAppSelector } from '@/hooks'
import { selectAppReady } from '@/data/state'
import { selectGeneral } from '../../state'
import style from './style.module.css'
import { Card, Div, Icon, Label } from '@/components' 
const MainFrame = ({dispatch, router}) => {
  const controller = Controller.getInstance(dispatch, router, useAppSelector(selectGeneral), useAppSelector(selectAppReady))
  if(!controller)
    return <></>
  const {
    getVersion
  } = controller
  return <>
    <nav className={style.header}>
      <div style={{ display: 'flex', gap: '.25rem', alignItems: 'center' }}>
        <div className={`${style.icon}`} style={{border: '4px white solid', padding: '0 2px'}}>
          <span>
            <Icon icon='raianIcon' size={40} />
          </span>
        </div>
        <h3>Raian Gil</h3>
      </div>
      <button>
        <Icon icon='moon' size='1.5rem'/>
      </button>
    </nav>
    <div className='mb-1'/>
    <section>
      <div className={style.content}>
        <div className={`${style.icon}`}>
          <span>
            <Icon icon='raianIcon' size={155} />
          </span>
        </div>
        <div>
          <h1 className={style.title}>Raian Gil</h1>
          <p className={style.txt1}>Desarrollador Frontend hijo de la creatividad</p>
        </div>
      </div>
      <Card text={`Pagina web en desarrollo version: ${getVersion()}`} type='warning'/> 
    </section>
    <hr />
    <section>
      <header className={style.content}>
        <h2>Experiencia</h2>
        <Icon icon='work' size={30} />
      </header>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', gap: '.25rem', flexDirection: 'column' }}>
          <h2>{`Front-End Developer • Prueba`}</h2>
          <p style={{ color: 'rgb(100, 116, 139)' }}>Jun 2022 — Jul 2023</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
          <ul style={{ marginLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
            <li style={{color: 'rgba(71, 85, 105, 1)'}}>Administration Dashboard with React and NextJs for the management of patients, appointments, and services performed daily by a physiotherapy center.</li>
            <li style={{color: 'rgba(71, 85, 105, 1)'}}>Administration Dashboard with React and NextJs for the management of patients, appointments, and services performed daily by a physiotherapy center.</li>
            <li style={{color: 'rgba(71, 85, 105, 1)'}}>Administration Dashboard with React and NextJs for the management of patients, appointments, and services performed daily by a physiotherapy center.</li>
            <li style={{color: 'rgba(71, 85, 105, 1)'}}>Administration Dashboard with React and NextJs for the management of patients, appointments, and services performed daily by a physiotherapy center.</li>
          </ul>
          <span style={{display: 'flex', gap: '.25rem'}}>
            <label className={style.pending1}>NextJs</label>
            <label className={style.pending1}>ReactJs</label>
            <label className={style.pending1}>ReduxJs</label>
            <label className={style.pending1}>NodeJs</label>
          </span>
        </div>
      </div>
    </section>
    <section>
      <header className={style.content}>
        <h2>Proyectos</h2>
        <Icon icon='work' size={30} />
      </header>
      <div style={{display: 'flex', gap: '2.5rem', flexDirection: 'column'}}>
        <article style={{display: 'flex', gap: '1rem'}}>
          <a>
            <span style={{width: '20rem', height: '10rem', background: 'rgba(59,130,246,.2)', display: 'block', overflow: 'hidden', padding:'50px 50px', borderRadius: '10px'}}>
              <img src='./imgs/landingPage.png' style={{height: '20rem', borderRadius: '10px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)'}}/>
            </span>
          </a>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '.5rem'}}>
            <h3 style={{fontSize: '1.875rem', lineHeight: '2.25rem'}}>Prueba</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div style={{display: 'flex', gap: '.5rem'}}>
              <img style={{width: '1.5rem', height: '1.5rem', background: 'blue', borderRadius: '50%'}}/>
              <img style={{width: '1.5rem', height: '1.5rem', background: 'blue', borderRadius: '50%'}}/>
              <img style={{width: '1.5rem', height: '1.5rem', background: 'blue', borderRadius: '50%'}}/>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section>
      <header className={style.content}>
        <h2>Redes Sociales</h2>
        <Icon icon='work' size={30} />
      </header>
      <div style={{display: 'flex', gap: '.5rem'}}>
        <a style={{display: 'flex', gap: '.25rem', alignItems: 'center', border: '2px solid rgba(0,0,0,.08)', padding: '.5rem 1rem', borderRadius: '7px', color: '#0384c6'}}>
          <Icon icon='linkedin' size='1em'/>
          <label>Linkedin</label>
        </a>
        <a style={{display: 'flex', gap: '.25rem', alignItems: 'center', border: '2px solid rgba(0,0,0,.08)', padding: '.5rem 1rem', borderRadius: '7px', color: '#353434'}}>
          <Icon icon='github' size='1em'/>
          <label>Github</label>
        </a>
      </div>
    </section>
    <section>
      <header className={style.content}>
        <h2>Contacto</h2>
        <Icon icon='work' size={30} />
      </header>
      <div style={{display: 'flex', gap: '.5rem'}} className={style.contact}>
        <label>raian.gdr@gmail.com</label>
        <button><Icon icon='copy' size='1rem'/></button>
      </div>
    </section>
    <section>
      <header className={style.content}>
        <h2>Feedback</h2>
        <Icon icon='work' size={30} />
      </header>
      <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
        <article>
          <h2>Anónimo</h2>
          <p style={{color: 'rgba(71, 85, 105, .8)'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam veritatis ad beatae quibusdam id, voluptatem assumenda unde nulla culpa quas! Molestias doloremque nemo sed fugiat laboriosam corporis deserunt iusto voluptatum.</p>
        </article>
        <article>
          <h2>Anónimo</h2>
          <p style={{color: 'rgba(71, 85, 105, .8)'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam veritatis ad beatae quibusdam id, voluptatem assumenda unde nulla culpa quas! Molestias doloremque nemo sed fugiat laboriosam corporis deserunt iusto voluptatum.</p>
        </article>
        <article>
          <h2>Anónimo</h2>
          <p style={{color: 'rgba(71, 85, 105, .8)'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam veritatis ad beatae quibusdam id, voluptatem assumenda unde nulla culpa quas! Molestias doloremque nemo sed fugiat laboriosam corporis deserunt iusto voluptatum.</p>
        </article>
      </div>
    </section>
  </>
}

export default MainFrame