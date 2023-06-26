
import './App.css';
import Cart from './cart';

function App() {

  const products = {
    1: {
      id: 1,
      title: "Mediolas",
      thumbnail: "https://tingenz.com/wp-content/uploads/2023/01/tho-bay-mau-cute-4-min.jpg",
      introduct: "Thịt thỏ",
    },
    2: {
      id: 2,
      title: "Piltover",
      thumbnail: "https://i.pinimg.com/originals/d8/f8/74/d8f874e43f6054dc8f02447ccd4e7bdb.jpg",
      introduct: "Thỏ ngu",
    },
    3: {
      id: 3,
      title: "SlyderKing",
      thumbnail: "https://i.pinimg.com/736x/9d/3c/a5/9d3ca5906d602c943f66e9b0d629f82f.jpg",
      introduct: "Chạy code đi",
    },

  };

  return (
    <div className="app">
      <Cart products={products} />
    </div>
  );
}

export default App;
