export default function SocialList({ socials }) {
  const list = socials.map(social => 
    <li>
      <img className='icon' src={social.src} alt={social.alt}></img>
      <a href={social.href}>{social.label}</a>
    </li>
  )

  return (
    <ul className='social-list'>
      {list}
    </ul>
  )
}