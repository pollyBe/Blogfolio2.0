import style from './Footer.module.scss'
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <p>©{currentYear} Blogfolio</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}
export default Footer