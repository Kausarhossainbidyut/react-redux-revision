const ErrorMessage = ({items}) => {

  let emptyMessage = items.length === 5 ? <h>full</h> : null;
  return (
    <>
      {items.length === 0 && <h3>ki shob bolo kili</h3>}
      {emptyMessage}
      {items.length === 0 ? <h3>I am still hungry.</h3> : null}
    </>
  );
};

export default ErrorMessage;
