import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./features/Home/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//set auth token to axios default header for all requests
import axios from "axios";
axios.defaults.headers.common["Authorization"] = `Bearer ${user.env.access_token}`;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
