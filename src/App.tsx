import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext";
import AppLayout from "./components/layout";

function App() {
  return (
    <Router>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </Router>
  );
}

export default App;
