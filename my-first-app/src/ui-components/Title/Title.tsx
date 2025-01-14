import style from './Title.module.scss'

interface IProps{
  title: string,
}

const Title = ({title}:IProps) => {
  return <h1 className={style.title}>{title}</h1>
}
export default Title