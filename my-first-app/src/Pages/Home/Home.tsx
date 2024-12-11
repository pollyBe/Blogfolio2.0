import Tabs from '../../Components/Tabs/Tabs'
import style from './Home.module.scss'
import Title from '../../ui-components/Title/Title'

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Title>Blog</Title>
      <Tabs />
    </div>
  )
}
export default Home