const Message = (props) => {
  const styles = {
    width: 'max-content',
    height: '2em',
    padding: '0.5em',
    lineHeight: '2em',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: props.type === 'error' ? '#ff6161' : '#b5ffbb'
  }
  return (<div style={styles}>
    {props.text}
  </div>)
};

export default Message;