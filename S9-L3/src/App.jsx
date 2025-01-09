import BookShopNavbar from "./components/BookShopNavbar";
import BookShopWelcome from "./components/BookShopWelcome";
{/*import SingleBook from "./components/SingleBook";*/}
import Booklist from "./components/BookList";
import BookShopFooter from "./components/BookShopFooter";

import fantasyBooks from "../data/books/fantasy.json";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-dark">
      <BookShopNavbar/>;
      <BookShopWelcome/>;
      {/*<SingleBook asin="0316438960" title="The Last Wish: Introducing the Witcher" img= "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg" price="9.59" category="fantasy"/>;*/}
      <Booklist list={fantasyBooks}/>
      <BookShopFooter/>;
    </div>
  )
}

export default App;
