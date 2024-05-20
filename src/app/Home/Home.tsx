import { Title } from '@/components/Title';
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex items-center w-8/12 flex-col lg:flex-row">
      <Title />
      <Image src="/daniela.png" alt="Daniela Costa" width={600} height={500} />
    </div>
  );
}

export default Home;