import About from "./[components]/About";
import Categories from "./[components]/Categories";
import HotSale from "./[components]/HotSale";
import Instagram from "./[components]/Instagram";
import Latest from "./[components]/Latest";
import LatestBlogs from "./[components]/LatestBlogs";
import NewsLetter from "./[components]/NewsLetter";
import Qest from "./[components]/Qest";
import Service from "./[components]/Service";
import SlideShow from "./[components]/SlideShow";
import Specials from "./[components]/Specials";
import Suggestions from "./[components]/Suggestions";

export default function Home() {
  return (
    <div className="p-2 md:p-10">
      <SlideShow/>
      <Categories/>
      <Specials/>
      <About/>
      <Suggestions/>
      <HotSale/>
      <Service/>
      <Latest/>
      <NewsLetter/>
      <Instagram/>
      <Qest/>
      <LatestBlogs/>
    </div>
  );
}
