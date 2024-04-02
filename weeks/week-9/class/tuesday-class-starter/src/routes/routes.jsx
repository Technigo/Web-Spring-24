import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { SongInfoPage } from "../pages/SongInfoPage";
import { MyInfoPage } from "../pages/MyInfoPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";

import { Movies } from "../pages/Movies";
import { MovieInfo } from "../pages/MovieInfo";

export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/my-info" element={<MyInfoPage />} />
    <Route path="*" element={<NotFoundPage />} />
    {/* DYNAMIC ROUTING */}
    <Route path="/song/:songTitle" element={<SongInfoPage />} />
    {/* Movie Routes */}
    <Route path="/movie/:id" element={<MovieInfo />} />
    <Route path="/movies" element={<Movies />} />
    {/* Protected Routes */}
    <Route path="/login" element={<LoginPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </>
);
