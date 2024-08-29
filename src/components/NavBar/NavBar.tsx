'use client'
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link className="" href="/">Home</Link>
        <Link className="" href="/character">Character</Link>
        <Link className="" href="/fruits">Fruits</Link>
    </nav>
  )
}

export default NavBar