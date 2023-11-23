import React from 'react'
import Controller from './controller'
import { useAppSelector } from '@/hooks'
import { selectAppReady } from '@/data/state'
import { selectGeneral } from '../../state'
import style from './style.module.css'
import { Card, Icon } from '@/components' 
import { JobDisplay } from '../JobDisplay'
import { ProjectDisplay } from '../ProjectDisplay'

const MainFrame = ({dispatch, router}) => {
  const controller = Controller.getInstance(dispatch, router, useAppSelector(selectGeneral), useAppSelector(selectAppReady))
  if(!controller)
    return <></>
  const {
    getVersion,
    getBackendVersion,
    getWaringMessage,
    getJobs,
    getProjects
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
    <div className='mb-2'/>
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
      <Card text={getWaringMessage()} type='warning'/> 
    </section>
    <hr />
    <section>
      <header className={style.content}>
        <h2>Experiencia</h2>
        <Icon icon='work' size={30} />
      </header>
      {getJobs().map(job => <JobDisplay job={job} />)}
    </section>
    <section>
      <header className={style.content}>
        <h2>Proyectos</h2>
        <Icon icon='work' size={30} />
      </header>
      {getProjects().map(project => <ProjectDisplay project={project} />)}
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