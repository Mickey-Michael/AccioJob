const Left = ({setText}) => {

  return (
    <div>
      <input onInput={(e) => {
        setText(e.target.value)
      }} type="text" />
    </div>
  )
}

export default Left