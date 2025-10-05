import Pill from './Pill'

export default function PillList({items, className}) {
    const list = items.map(item => 
        <Pill text={item.text} pillClass={item.className}/>
    )
    
    return (
        <ul className={`pill-list flex ${className ? className : ''}`}>
            {list}
        </ul>
    )
}