import style from './style.module.css'
class Controller {
  static instance: Controller
  private style: string
  private text: string
  private children: any
  private icon: string
  private onClick: any
  constructor() {
  }

  public static getInstance(props) {
    if(!this.instance)
      this.instance = new Controller()
    this.instance.refreshData(props)
    return this.instance
  }
  refreshData({children, type}) {
    this.children = children
    this.style = `${style.container}`
    this.icon = type
  } 

  public getStyle = () => this.style
  public getChildren = () => this.children
  public getIcon = () => this.icon
  public getOnClick = () => this.onClick
}

export default Controller