import style from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p>©2022 Blogfolio</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}
export default Footer