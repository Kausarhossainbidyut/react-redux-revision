const ErrorMessage = ({items}) => {

  let emptyMessage = items.length === 5 ? "" : null;
  return (
    <>
      
      {emptyMessage}
      {items.length === 0 ? <h3>I am still hungry.</h3> : null}
    </>
  );
};

export default ErrorMessage;
