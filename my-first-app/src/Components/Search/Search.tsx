// import Button from "../Button/Button"
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '../../assets/search.svg?react'
import style from './Search.module.scss'
import { useEffect, useState } from "react"
import { FetchPosts, setPage, setSearchQuery } from '../../store/postSliceRTK';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    currentPage,
    itemsPerPage,
    searchQuery,
    ordering,
  } = useSelector((state:any) => state.posts);
  useEffect(() => {
    dispatch(
      FetchPosts({
        limit: itemsPerPage,
        offset: (currentPage - 1) * itemsPerPage,
        searchQuery: searchQuery,
        ordering: ordering,
      })
    );
  }, [currentPage, ordering]);
const handlerSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
  e.preventDefault();
  navigate('/search-results')
    dispatch(
      FetchPosts({
        limit: itemsPerPage,
        offset: 0,
        searchQuery: searchQuery,
        ordering: ordering,
      })
    );
    dispatch(setPage(1));
  };
  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setSearchQuery(value));
  };
  const [visibility, setVisibility] = useState(false)

  return (
    <div className={style.searchwrap}>
      <form className={visibility ? style.inputBox : style.hide} onSubmit={handlerSubmit}>
        <input type='search' placeholder="Search..." value={searchQuery} onChange={handlerInput} />
        <button className={style.submitBtn} type='submit'>Search</button>
      </form>
      <div className={style.buttonWrap}>
        <button className={style.button} onClick={() => setVisibility(!visibility)}><SearchIcon /></button>
      </div>
    </div>
  )
}
export default Search