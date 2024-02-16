//note either do import {Fragment} from "react"; and after return call <Fragment and close or just do <> after return this also shows import Fragment from react

import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
// import { MouseEvent } from "react";
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1); //hook

  // event handler
  // const handleClick=(event:MouseEvent) => console.log(event)
  // items=[];
  // if (items.length===0)
  // return<>
  // <h1>List</h1><p>no items found</p>
  // </>;

  return (
    <>
      <h1> {heading}</h1>
      {/* {items.length===0 ?<p> No items found</p>: null} */}
      {items.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items);
            }} // adding index will help us to seee index valu position the the item
            >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
