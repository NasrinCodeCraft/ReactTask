import Home from "./pages/home/home";
import AboutUs from "./pages/aboutUs/aboutUs";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/articlePage/articlePage";
import CreateArticle from "./pages/createArticle/createArticle";
import NotFound from "./pages/notFound/notfind";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />}></Route>
        <Route path="/create-article" element={<CreateArticle/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
