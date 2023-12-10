import style from './style.module.css'
class Controller {
  static instance: Controller
  private style: string
  private feedback:any = {
    name: "",
    desc: "",
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
  refreshData({feedback}) {
    this.style = `${style.container}`
    this.feedback.name = feedback.name,
    this.feedback.desc = feedback.desc
    this.feedback.id = feedback._id
  } 

  public getStyle = () => this.style
  public getFeedback = () => this.feedback
}

export default Controller