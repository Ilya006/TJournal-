import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout className='main-layout-white'  >
      <Post title={'title5'} id={0} description={'af ffaf fa f'} />
      <Post title={'title4'} id={35} description={'ffffff'} />
      <Post title={'title1'} id={555} description={'ggggg'} />
      <Post title={'title2'} id={24} description={'hhhhh'} />
    </MainLayout>
  )
}
  

export default Home;
