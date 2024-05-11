import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex items-center w-8/12">
      <div className='flex flex-col gap-3'>
        <p className="font-light text-[30px] text-primary-color">Olá, eu sou</p>
        <h1 className="text-9xl font-black">Daniela<br></br>Costa</h1>
        <span className="font-light text-[#A9ADB8] text-[36px]">Advogada</span>
        <button className='text-left'>Entre em contato</button>
      </div>
      <Image src="/daniela.png" alt="Daniela Costa" width={600} height={500} />
    </div>
  );
}

export default Home;