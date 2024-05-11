import NavBar from "./NavBar";
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <div className="flex relative">
                <div className='flex items-center absolute left-0'>
                    <Image src="/logo.png" alt="Logo" width={100} height={100} />
                </div>
                <div className="flex ml-[200px]">
                    <NavBar />
                </div>
            </div>
        </header>
    );
}

export default Header;