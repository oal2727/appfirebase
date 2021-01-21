export interface ISnackbar{
    message:string,
    type:string,
}
export interface IUsuario{
    firstName:string,
    lastName:string,
    email:string,
    password:string
}
export interface IState{
    open:boolean,
    snackbar:ISnackbar,
    authenticated:boolean
    usuario:IUsuario,
}
