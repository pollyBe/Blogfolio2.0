import TabAllContent from './TabAllContent';


const TabContent = ({ selectedTab }: { selectedTab: number }) => {
  const content = [
    <TabAllContent/>
  ]

  return content[selectedTab]
};
export default TabContent;
