import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePages";
import { Routes, Route } from "react-router";
import AboutPage from "./pages/MoviePages";
import ContactPage from "./pages/MoviePages";
import RootLayout from "./layouts/RootLayout";
import Description from "./pages/descriptionPage";


function App() {
  return(
    <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='about-us' element={<AboutPage />} />
          <Route path='movies' element={<MoviePage />} />
          <Route path='contact-us' element={<ContactPage />} />
        </Route>
        
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":description" element={<Description />} />
        </Route>

        {/* <Route path="/movies/description" element={<Description />}/> */}
    </Routes>
    // <>
    // <NavBar />
    // <HomePage />
    // <MoviePage />
    // </>
  );
}

export default App;