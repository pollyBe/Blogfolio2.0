import style from "./Tablist.module.scss";
const Tablist = ({
  selectedTab,
  setShowTab,
}: {
  selectedTab: number;
  setShowTab: (index: number) => void;
}) => {
  const tabs: string[] = ["All", "My Favourites", "Popular"];
  const tabsMarkup = tabs.map((el, index) => (
    <div className={style.tabsWrap} key={index}>
      <button
        className={selectedTab == index ? style.active : style.tab}
        key={index}
        onClick={() => setShowTab(index)}
      >
        {el}
      </button>
    </div>
  ));
  return tabsMarkup;
};
export default Tablist;
