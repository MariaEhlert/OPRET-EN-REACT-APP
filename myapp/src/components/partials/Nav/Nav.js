import './Nav.scss'
export const Nav = (props) => {
    return (
      <nav>
        <ul>
            {props.items.map((item, key) => {
                return ( 
                    <NavList key={key} name={item} />
                )
            })}
        </ul>
      </nav>
    )
}

const NavList = (props) => {
    return <li><a href="#">{props.name}</a></li>
}

