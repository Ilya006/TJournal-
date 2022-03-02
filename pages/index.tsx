import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';

const post1 = {
  id: 1,
  title: 'title Post',
  description: 'hello text post', 
  imageUrl: 'https://b1.filmpro.ru/c/822850.700xp.jpg'
}

const post2 = {
  id: 2,
  title: 'title Post',
  description: 'hello text post', 
  imageUrl: 'https://b1.filmpro.ru/c/822850.700xp.jpg'
}

const post3 = {
  id: 3,
  title: 'title Post',
  description: 'hello text post', 
  imageUrl: 'https://b1.filmpro.ru/c/822850.700xp.jpg'
}

const Home = ({ posts }) => {
  return (
    <MainLayout>
      <Post 
        id={1} 
        description='hello text post' 
        title='title post'
        imageUrl={'https://b1.filmpro.ru/c/822850.700xp.jpg'}
      />
      
    </MainLayout>
  );
};


export default Home;
