import CardSizeS from './CardSizeS/CardSizeS';
import CardSizeM from './CardSizeM/CardSizeM';
import CardSizeL from './CardSixeL/CardSizeL';

interface IProps {
  size: 'sizeL' | 'sizeM' | 'sizeS',
  date: string,
  title: string,
  description: string,
  image?: string,
  onClick: () => void,
}

const PostCard = ({size, date, title, description, image, onClick}:IProps) => {

  switch (size) {
    case 'sizeL':
      return <CardSizeL
        date={date}
        title={title}
        description={description}
        image={image}
        onClick={onClick} />
    case 'sizeM':
      return <CardSizeM
        date={date}
        title={title}
        image={image}
        onClick={onClick} />
    case 'sizeS':
      return <CardSizeS
        date={date}
        title={title}
        image={image}
        onClick={onClick} />;
  }
}
export default PostCard