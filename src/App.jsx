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
<<<<<<< Updated upstream
=======
import GovernmentPage from "./Pages/government_page";
import BuildingPermitForm from "./Pages/building_form";
import { lazy, Suspense } from "react";
import Poster from "./Pages/poster";
import AuthPage from "./Pages/authPage";
import WeddingForm from "./components/wedding/personalDetails";
import BrideDetails from "./components/wedding/brideDetails";
import ValidDocs from "./components/wedding/Docs";
import GovHomepage from "./Pages/gov_home";
import WeddingFormPage from "./Pages/marriageform";
import AdvertisementForm from "./Pages/advertisment_Page";
const Gallery = lazy(() => import("./components/Gallery"));
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
          <Route path="/government_page" element={<GovernmentPage />} />
          <Route path="/building_form" element={<BuildingPermitForm />} />
          <Route path="/authPage" element={<AuthPage />} />
          <Route path="/poster" element={<Poster />} />
          <Route path="/weddingform" element={<WeddingForm />} />
          <Route path="/brideDetails" element={<BrideDetails />} />
          <Route path="/Docs" element={<ValidDocs />} />
          <Route path="/gov_home" element={<GovHomepage />} />
          <Route path="/marriageform" element={<WeddingFormPage />} />
          <Route path="/advert" element={<AdvertisementForm />} />
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
>>>>>>> Stashed changes
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
