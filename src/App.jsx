import './App.css'
import Accordian from './components/accordian/Accordian'
import ImageSlider from './components/image-slider/ImageSlider'
import LightDarkMode from './components/light-dark-mode/LightDarkMode'
import LoadMoreData from './components/load-more/LoadMoreData'
import QrCodeGenerator from './components/qr-coder/QrCodeGenerator'
import RandomColor from './components/random-color/RandomColor'
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator'
import StarRating from './components/star-rating/StarRating'
import TreeView from './components/tree-view/TreeView'
import menus from "./components/tree-view/data";

function App() {

  return (
    <div>
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} />
      <LoadMoreData />
      <QrCodeGenerator />
      <TreeView menus={menus} />
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=50"} />
    </div>
  )
}

export default App
