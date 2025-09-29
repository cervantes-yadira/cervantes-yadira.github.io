export default function SocialList({ socials, isTab, className }) {
  let list 

  if(isTab) {
    list = socials.map(social => 
      <li>
        <a href='social.href'><img className='icon' src={social.src} alt={social.alt}></img></a>
      </li>
    )
  } else {
    list = socials.map(social => 
      <li>
        <img className='icon' src={social.src} alt={social.alt}></img>
        <a href={social.href}>{social.label}</a>
      </li>
    )
  }

  return (
    <ul className={className}>
      {list}
    </ul>
  )
}