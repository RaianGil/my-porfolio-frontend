import { setReady, unsetReady } from "../../../../data/state"
import { setDelay } from "../../../../utils"
import { useGetBackendVersion, useGetJobs, useGetProjects } from "../../hooks"

let dispatch:any
class Controller {
  static instance: Controller
  private router: any
  private state: any

  constructor(inDispatch:any, router:any, appReady: boolean) {
    dispatch = inDispatch
    this.router = router
    this.initApp(appReady)
  }

  public static getInstance(inDispatch:any, router:any, state:any, appReady: boolean) {
    if(!this.instance)
      this.instance = new Controller(inDispatch, router, appReady)
    this.instance.refreshData(state)
    return this.instance
  }

  private async initApp(appReady:boolean) {
    if(!appReady){
      await dispatch(useGetBackendVersion())
      await dispatch(useGetJobs())
      await dispatch(useGetProjects())
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
  // public getVersion = () => this.state.version ? `frontend ${this.state.version.split('-')[0]}` : undefined
  public getVersion = () => this.state.version ? `frontend ${this.state.version}` : undefined
  public getBackendVersion = () => this.state.backendVersion ? `, backend ${this.state.version.split('-')[0]}` : undefined
  public getWaringMessage = () => this.state.version || this.state.backendVersion ? 
    `Pagina web en desarrollo version: ${this.getVersion() || ''}${this.getBackendVersion() || ''}` : ''
  public getJobs = () => this.state.jobs
  public getProjects = () => this.state.projects

}

export default Controller