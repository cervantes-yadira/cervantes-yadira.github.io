import NavLink from "./NavLink"

export default function NavList({ links }) {
  const list = links.map(link => <NavLink href={link.href} label={link.label} />)

  return (
    <nav>
      {list}
    </nav>
  )
}