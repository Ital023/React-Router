import { Link } from "react-router-dom";

export default function App() {
  return (
    <nav>
      <Link to="/invoices">Invoices</Link>
      <Link to="/expense">Expenses</Link>

    </nav>
  );
}
