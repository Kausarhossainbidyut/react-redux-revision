

const App = () => {

  // let foodItem = ['dal','green vegrafd', 'adfa', 'adflkja', 'akdfla']
  let foodItem = []
  let emptyMessage = foodItem.length === 5 ? <h>full</h>: null;

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItem.length === 0 && <h3>ki shob bolo kili</h3>}
      {emptyMessage}
      {foodItem.length ===0 ? <h3>I am still hungry.</h3>: null}
      <ul className="list-group">
        {foodItem.map((items,index) =><li key={index} class="list-group-item">{items}</li>)}
        
      </ul>
    </>
  );
};

export default App;
