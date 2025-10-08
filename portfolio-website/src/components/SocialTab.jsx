export default function SocialTab({ socials }) {
  const list = socials.map((social) => (
    <li>
      <a href="social.href">
        <img className="icon" src={social.src} alt={social.alt}></img>
      </a>
    </li>
  ));

  return <ul className="social-tab">{list}</ul>;
}
