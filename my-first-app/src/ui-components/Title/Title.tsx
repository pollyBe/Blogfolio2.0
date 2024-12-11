import style from './Title.module.scss'

interface IProps{
  children: React.ReactNode,
}

const Title = ({children}:IProps) => {
  return <h1 className={style.title}>{children}</h1>
}
export default Title