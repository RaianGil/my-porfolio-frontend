import style from './style.module.css'
class Controller {
  static instance: Controller
  private style: string
  private text: string
  private type: string
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
  refreshData({text, type}) {
    this.text = text
    this.style = `${style.container}`
    this.icon = type
  } 

  public getStyle = () => this.style
  public getText = () => this.text
  public getIcon = () => this.icon
  public getOnClick = () => this.onClick
}

export default Controller