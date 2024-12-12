import { useState } from "react";
import Tablist from "./TabList/TabList";
import TabContent from "./TabContent/TabContent";
import style from './Tabs.module.scss'

const Tabs = () => {
  const [showTab, setShowTab] = useState(0);
  const handler = (index: number) => {
    setShowTab(index);
  };

  return (
    <>
      <div className={style.tabListWrap}>
        <Tablist selectedTab={showTab} setShowTab={handler} />
      </div>
      <TabContent />
    </>
  );
};
export default Tabs;
