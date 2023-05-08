
import { Item } from "./Item"

export const Items = ({ items }) => {
    return (
        <div className="section-center">
            {items.map((item) => {
                return <Item key={item.id} {...item} />
            })}
        </div>
    );
}

