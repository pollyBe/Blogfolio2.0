import TabAllContent from './TabAllContent';
import TabFavouriteContent from './TabFavouriteContent';


const TabContent = ({ selectedTab }: { selectedTab: number }) => {
  const content = [
    <TabAllContent />,
    <TabFavouriteContent/>,
  ]

  return content[selectedTab]
};
export default TabContent;
