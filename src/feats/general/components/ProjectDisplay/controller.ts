import style from './style.module.css'
class Controller {
  static instance: Controller
  private style: string
  private project:any = {
    id: "",
    img: "",
    name: "",
    desc: "",
    tools: [],
    tags: [],

  }
  constructor() {
  }

  public static getInstance(props) {
    if(!this.instance)
      this.instance = new Controller()
    this.instance.refreshData(props)
    return this.instance
  }
  refreshData({project}) {
    this.style = `${style.container}`
    console.log(project._id)
    this.project.id = project._id
    this.project.img = project.imgSrc
    this.project.name = project.name
    this.project.desc = project.desc
    this.project.tools = project.tools
    this.project.tags = project.tags
  }

  public getStyle = () => this.style
  public getProject = () => this.project
}

export default Controller