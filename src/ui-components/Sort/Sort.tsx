import { useState } from "react"

const Sort = ({value, onChangeSort}) => {
    const [open, setOpen] = useState (false)
    const list = [{name: 'Rating',sort: 'Rating'},{name: 'Year',sort: 'Year'}]
  

    const onClickListItem = (i) => {
        onChangeSort(i);
        setOpen (false)
    }
    
    return (
        <div className="sort">
        <div className="sort__label">
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}>{value.name}</span>
        </div>
        {open && (
          <div className="sort__popup">
            <ul>
              {list.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItem(obj)}
                  className={value.sort === obj.sort ? 'active' : ''}>
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
export default Sort