export default function NavLink({href, label}) {
  return (
    <>
      <a className="nav-link" href={href}>{label}</a>
    </>
  )
}