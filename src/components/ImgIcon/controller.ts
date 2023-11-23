import style from './style.module.css'
class Controller {
  static instance: Controller
  private name: string
  private size: number
  constructor() {
  }

  public static getInstance(props) {
    if(!this.instance)
      this.instance = new Controller()
    this.instance.refreshData(props)
    return this.instance
  }
  refreshData({name, size}) {
    this.name = name
    this.size = size
  }

  public getName = () => this.name
  public getSize = () => this.size
}

export default Controller