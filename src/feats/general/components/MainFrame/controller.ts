import { setReady, unsetReady } from "../../../../data/state"
import { setDelay } from "../../../../utils"

let dispatch:any
class Controller {
  static instance: Controller
  private router: any
  private state: any

  constructor(inDispatch:any, router:any, appReady: boolean) {
    dispatch = inDispatch
    this.router = router
    this.setAppReadyDelay(appReady)
  }

  public static getInstance(inDispatch:any, router:any, state:any, appReady: boolean) {
    if(!this.instance)
      this.instance = new Controller(inDispatch, router, appReady)
    this.instance.refreshData(state)
    return this.instance
  }

  private async setAppReadyDelay(appReady:boolean) {
    if(!appReady){
      await setDelay(.2)
      await dispatch(setReady())
    }
  }

  private async refreshData(state:any) {
    this.state = state
  }

  private static async redirectAndDestroy(router:any, path:string) {
    router.push(path)
    if(this.instance)
      delete this.instance
  }
  public redirect = async (name: string) => {
    await dispatch(unsetReady())
  }
  public getMainText = () => this.state.mainText
  public getMainTitle = () => this.state.mainTitle
  public getVersion = () => this.state.version 

}

export default Controller