import s from './Notfound.module.css'

export default function Notfound (){
    return(

    <>
        <h1 className={s.err_title}>404 : NOT FOUND</h1>
        <h1 className={s.err_title}></h1>
        <h3 className={s.err_title}>再次搜索</h3>
    </>    
    )
}