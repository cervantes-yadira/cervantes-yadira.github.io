export default function Pill({text, pillClass}) {
    return (
        <li className={`pill ${pillClass}`}>
            {text}
        </li>
    )
}