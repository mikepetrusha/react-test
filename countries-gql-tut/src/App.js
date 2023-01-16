import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const cache = new InMemoryCache({
    dataIdFromObject: (object) => object.id || null,
  });
  const client = new ApolloClient({
    cache,
    uri: "https://countries.trevorblades.com",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
