import "./App.css";
import Dashboard from "./dashboard/dashboard";
import SignInPage from "./signInPage/signInPage";
import SignUpPage from "./signUpPage/signUpPage";
import PaymentPage from "./paymentPage/paymentPage";
import CalendarPage from "./calendarPage/calendarPage";
import LeaderboardPage from "./leaderboardPage/leaderboardPage";
import Payments from "./components/payments/payments";

function App() {
  return (
    // <Dashboard />
    // <SignInPage />
    // <SignUpPage />
    // <PaymentPage />
    // <CalendarPage />
    // <LeaderboardPage />
    //<SignInPage />
    <Payments paymentAmount="4.20" orderId="69" />
  );
}

export default App;
