import Link from 'next/link'
import { Roboto } from "next/font/google";
import { FaPhoneAlt } from 'react-icons/fa';

const roboto = Roboto({
  subsets: ["latin"],
  weight: '500',
});


export default function NavBar() {
  return (
    <div className={`${roboto.className} flex items-center gap-40`}>
      <nav>
        <ul className="flex p-4 gap-10 text-[15px]">
          <li>
            <Link href="/">
              <p>HOME</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>SOBRE</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p>ÁREAS DE ATUAÇÃO</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p>CONTATO</p>
            </Link>
          </li>
          <li>
            <>|</>
          </li>
          <li>
            <Link href="/contact" className='flex items-center gap-4'>
              <FaPhoneAlt />
              <p className='text-primary-color'>(83) 9 9173-8244</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}