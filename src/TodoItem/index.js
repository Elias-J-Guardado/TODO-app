import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css'

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <CompleteIcon
        complete={props.completed}
        onComplete={props.onComplete} />
      {/* <span
        className={`Icon Icon-check
        ${props.completed && "Icon-check--active"}`}
        
      >
        V {props.completed}
      </span> */}
      <p className={`TodoItem-p
      ${props.completed && "TodoItem-p--complete"}`}>
        {props.texto}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
      {/* <span
        className='Icon Icon-delete'
        

      >
        X
      </span> */}
    </li>
  );
}

export { TodoItem };