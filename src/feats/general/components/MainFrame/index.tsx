import React from 'react'
import Controller from './controller'
import { useAppSelector } from '@/hooks'
import { selectAppReady, setUnsetDBMode, setUnsetDarkMode } from '@/data/state'
import { selectGeneral } from '../../state'
import style from './style.module.css'
import { Card, Icon, ImgIcon } from '@/components' 
import { JobDisplay } from '../JobDisplay'
import { ProjectDisplay } from '../ProjectDisplay'
import { FeedbackDisplay } from '../FeedbackDisplay'

const MainFrame = ({dispatch, router, darkMode, dbMode}) => {
  const controller = Controller.getInstance(dispatch, router, useAppSelector(selectGeneral), useAppSelector(selectAppReady))
  if(!controller)
    return <></>
  const {
    getVersion,
    getBackendVersion,
    getWaringMessage,
    getJobs,
    getProjects,
    getFeedbacks
  } = controller
  return <>
    <nav className={style.header}>
      <div style={{ display: 'flex', gap: '.25rem', alignItems: 'center' }}>
        <div className={`${style.icon} ${style.smallIcon}`}>
          <span>
            <Icon icon='raianIcon' color={darkMode ? '#ffffff96': '#000'} size={40} />
          </span>
        </div>
        <h3>Raian Gil</h3>
      </div>
      <button onClick={() => dispatch(setUnsetDarkMode())}>
        <Icon icon={darkMode ? 'sun': 'moon'} size='1.5rem'/>
      </button>
    </nav>
    <div className='mb-3'/>
    <section id="sectionHeader">
      <div className={style.content}>
        <div className={`${style.icon}`}>
          <span>
            <Icon icon='raianIcon' size={155} color={darkMode ? '#ffffff96': '#000'} />
          </span>
        </div>
        <div className={style.infoContainer}>
          <h1 className={style.title}>Raian Gil</h1>
          <p className={style.txt1}>Desarrollador Fullstack, Móvil & DevOps</p>
          <div>
            <a href='https://drive.google.com/uc?export=download&id=1xMZSd2RLPgDFhayUINUDxEnyxeiYcBgr' className='btn'>
              <Icon icon='paper' size='1em'/>
              <label>Resume</label>
            </a>
            <a href='https://www.linkedin.com/in/raian-michael-gil-del-rosario-8b0a55170' target='blank' className='btn'>
              <Icon icon='linkedin' size='1em'/>
              <label>Linkedin</label>
            </a>
            <a href='https://github.com/RaianGil' target='blank' className='btn'>
              <Icon icon='github' size='1em'/>
              <label>Github</label>
            </a>
            <button className='btn' onClick={() => dispatch(setUnsetDBMode())}>{'Dragon Ball Mode'}</button>
          </div>
        </div>
      </div>
      <Card type='warning'>
        <label>
          {`Pagina web en desarrollo version: `}
          <a href='https://github.com/RaianGil/my-porfolio-frontend' target='blank'>{getVersion()}</a>
          {getBackendVersion() ? ', ': ''}
          {getBackendVersion() ? <a href='https://github.com/RaianGil/my-porfolio-backend' target='blank'>{getBackendVersion()}</a> : ''}
        </label>
      </Card> 
    </section>
    <hr />
    <section>
      <header className={style.content}>
        <h2>Experiencia</h2>
        {dbMode ? <ImgIcon name={'dbSevenStart'} size={30}/> : <Icon icon='work' size={30} />}
      </header>
      <div style={{display: 'flex', gap: '1rem', flexDirection: 'column-reverse'}}>
        {getJobs().map(job => <JobDisplay job={job} key={job._id}/>)}
      </div>
    </section>
    <section>
      <header className={style.content}>
        <h2>Proyectos</h2>
        {dbMode ? <ImgIcon name={'dbSixStart'} size={30}/> : <Icon icon='star' size={30} />}
      </header>
      <div style={{display: 'flex', gap: '1rem', flexDirection: 'column'}}>
        {getProjects().map(project => <ProjectDisplay project={project} key={project._id}/>)}
      </div>
    </section>
    <section style={{display: 'none'}}>
      <header className={style.content}>
        <h2>Redes Sociales</h2>
        {dbMode ? <ImgIcon name={'dbFiveStart'} size={30}/> : <Icon icon='socialNetwork' size={30} />}
      </header>
      <div className={style.socialNetwork}>
      </div>
    </section>
    <section>
      <header className={style.content}>
        <h2>Contacto</h2>
        {dbMode ? <ImgIcon name={'dbFourStart'} size={30}/> : <Icon icon='mail' size={30} />}
      </header>
      <div style={{display: 'flex', gap: '.5rem'}} className={style.contact}>
        <label>raian.gdr@gmail.com</label>
        <button><Icon icon='copy' size='1rem'/></button>
      </div>
    </section>
    <section>
      <header className={style.content}>
        <h2>Feedback</h2>
        {dbMode ? <ImgIcon name={'dbThreeStart'} size={30}/> : <Icon icon='comments' size={30} /> }
      </header>
      <div style={{display: 'flex', gap: '1rem', flexDirection: 'column', marginBottom: '4rem'}}>
        {getFeedbacks().map(feedback => <FeedbackDisplay feedback={feedback} key={feedback._id}/>)}
      </div>
    </section>
  </>
}

export default MainFrame