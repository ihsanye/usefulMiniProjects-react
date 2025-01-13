import './App.css'
import Accordian from './components/accordian/Accordian'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMoreData from './components/load-more/LoadMoreData'
import RandomColor from './components/random-color/RandomColor'
import StarRating from './components/star-rating/StarRating'

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
    </div>
  )
}

export default App
