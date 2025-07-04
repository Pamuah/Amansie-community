import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home";
import Event_Form from "./Pages/event_form";
import Poster_Funeral from "./Pages/poster_template";
import { GlobalContextProvider } from "./Global Context/context_api";
import EventShow from "./Pages/event_show";
import NewsPage from "./Pages/news_page";
import BusinessPage from "./Pages/business_page";
import BusinessInfoForm from "./Pages/business_form";
import GovernmentPage from "./Pages/government_page";
import BuildingPermitForm from "./Pages/building_form";
import { lazy, Suspense } from "react";

const Gallery = lazy(() => import("./components/Gallery"));

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/poster_template" element={<Poster_Funeral />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/event_form" element={<Event_Form />} />
          <Route path="/event_show" element={<EventShow />} />
          <Route path="/news_page" element={<NewsPage />} />
          <Route path="/business_page" element={<BusinessPage />} />
          <Route path="/business_form" element={<BusinessInfoForm />} />
          <Route path="/government_page" element={<GovernmentPage />} />
          <Route path="/building_form" element={<BuildingPermitForm />} />
          <Route
            path="/gallery"
            element={
              <Suspense
                fallback={
                  <div className="text-center p-10 text-white">
                    Loading Gallery...
                  </div>
                }
              >
                <Gallery />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
