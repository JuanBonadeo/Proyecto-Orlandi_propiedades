import { Link } from 'react-router-dom'
import './button.css'

const Button = (props) => {
    return(
        <Link to={props.to} type={props.type}className='linkButton '><button className="Button" onClick={props.action}>{props.label}</button></Link>
    )
}
export default Button