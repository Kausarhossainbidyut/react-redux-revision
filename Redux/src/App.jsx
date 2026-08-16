import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header';
import DisplayCounter from './components/DisplayCounter';
import Countener from './components/Countener';
import Countrols from './components/Countrols';

const App = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <Countener>
       <Header></Header>
        <div className="col-lg-6 mx-auto">
          <DisplayCounter></DisplayCounter>
          <Countrols></Countrols>
        </div>{" "}
        </Countener>
      </div>
    </div>
  );
};

export default App;
