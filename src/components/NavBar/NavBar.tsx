'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBar = () => {
    const path = usePathname();
  return (
    <nav className="navbar">
        <Link className="" href="/">Home</Link>
        <Link className="" href="/character">Character</Link>
        <Link className="" href="/fruits">Fruits</Link>
    </nav>
  )
}

export default NavBar