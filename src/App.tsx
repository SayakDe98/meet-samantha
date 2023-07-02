import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import home from "./pages/home"
import { ErrorBoundaries } from "./utils/globalErrorHandling/ErrorBoundary"
import SuccessMessage from "./utils/globalErrorHandling/SuccessMessage"
import Airlines from "./pages/Airlines"
import InfiniteSpecies from "./pages/InfiniteSpecies"

const App = () => {

  return (
    <>
    <ErrorBoundaries>
      {/* <SuccessMessage /> */}
    <Router>
      <Routes>
        <Route path="/" Component={home}/>
        <Route path="/airlines" Component={Airlines} />
        <Route path="infinite-species" Component={InfiniteSpecies} />
      </Routes>
    </Router>
    </ErrorBoundaries>
    </>
  );
}

export default App