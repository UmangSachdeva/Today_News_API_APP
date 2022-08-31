import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import CategoryBox from "./Components/CategoryBox";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeadlines from "./Components/TopHeadlines";

function App() {
  const [progress, setProgress] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("general");
  const [search, setSearch] = useState(false);
  const apiKey = process.env.API_KEY;

  return (
    <>
      <LoadingBar color="#2c2d43" progress={progress} />
      <NavBar setKeyword={setKeyword} setSearch={setSearch} />
      <CategoryBox setProgress={setProgress} category={category} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TopHeadlines
                category={"general"}
                setProgress={setProgress}
                setCategory={setCategory}
                apiKey={apiKey}
                keyword={keyword}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <TopHeadlines
                category={"technology"}
                setProgress={setProgress}
                setCategory={setCategory}
                apiKey={apiKey}
                keyword={keyword}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route
            path="/bussiness"
            element={
              <TopHeadlines
                category={"bussiness"}
                setProgress={setProgress}
                setCategory={setCategory}
                apiKey={apiKey}
                keyword={keyword}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <TopHeadlines
                category={"sports"}
                setProgress={setProgress}
                setCategory={setCategory}
                keyword={keyword}
                search={search}
                setSearch={setSearch}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
