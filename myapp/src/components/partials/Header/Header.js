export const Header = (props) => {
    const myStyle = {
        backgroundColor: 'pink'
    }
    return (
      <header style={myStyle}>
        <h1>{(props.pagetitle) ? props.pagetitle : 'My App'}</h1>
      </header>
    )
  }