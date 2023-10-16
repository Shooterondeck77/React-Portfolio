// import the Navigation component
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Timothy Taffur</h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}