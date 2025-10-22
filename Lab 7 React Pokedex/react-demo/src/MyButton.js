function MyButton(props) {
  const handler = () => {
    alert("Hello World!")
  }
  return <button onClick={handler} className="button">{props.text}</button>
}

export default MyButton;