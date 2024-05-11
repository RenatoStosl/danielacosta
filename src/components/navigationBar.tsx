import Link from 'next/link'

export default function NavigationBar() {
  return (
    <nav>
      <ul className="flex p-4 gap-10">
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p>Sobre</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p>Áreas de Atuação</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p>Contato</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}