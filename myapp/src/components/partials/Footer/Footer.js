export const Footer = (props) => {
    return (
      <footer>
        <h1>footer</h1>
        <ul>
        {props.items.map((item, key) => {
                return ( 
                    <FooterNav key={key} name={item} />
                )
            })}
        </ul>
      </footer>
    )
}
const FooterNav = (props) => {
    return <li><a href="#">{props.name}</a></li>
}
