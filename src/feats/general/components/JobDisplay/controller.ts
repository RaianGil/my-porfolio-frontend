import style from './style.module.css'
class Controller {
  static instance: Controller
  private style: string
  private job:any = {
    title: "",
    tools: [],
    datePeriod: "",
    descriptions: [],
    company: "",
    id: ""
  }
  constructor() {
  }

  public static getInstance(props) {
    if(!this.instance)
      this.instance = new Controller()
    this.instance.refreshData(props)
    return this.instance
  }
  refreshData({job}) {
    console.log(job._id)
    this.style = `${style.container}`
    const dateStart = `${job.dateStart}`.split('T')[0].replaceAll('-', '/')
    const dateStop = `${job.dateEnd || 'Actualidad'}`.split('T')[0].replaceAll('-', '/')
    this.job.title = job.name
    this.job.id = job._id
    this.job.tools = job.tools
    this.job.datePeriod = `${dateStart} - ${dateStop}`
    this.job.descriptions = job.desc
    this.job.company = job.companyName
  } 

  public getStyle = () => this.style
  public getJob = () => this.job
}

export default Controller