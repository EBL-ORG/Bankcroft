import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CommercialPerformance from "./components/CommercialPerformance.jsx";
import FinancialStatus from "./components/FinancialStatus.jsx";
import CapitalAnalytics from "./components/CapitalAnalytics.jsx";
import Milestones from "./components/Milestones.jsx";
import MissionValues from "./components/MissionValues.jsx";
import Hierarchy from "./components/Hierarchy.jsx";
import Workflow from "./components/Workflow.jsx";
import Agencies from "./components/Agencies.jsx";
import Partners from "./components/Partners.jsx";
import AnnualReports from "./components/AnnualReports.jsx";
import ClientCapitalMetrics from "./components/ClientCapitalMetrics.jsx";
import Consultation from "./components/Consultation.jsx";
import Footer from "./components/Footer.jsx";
import ChartTooltip from "./components/ChartTooltip.jsx";

export default function App() {
  return (
    <div className="bg-surface text-on-surface antialiased selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <CommercialPerformance />
        <FinancialStatus />
        <CapitalAnalytics />
        <Milestones />
        <MissionValues />
        <Hierarchy />
        <Workflow />
        <Agencies />
        <Partners />
        <AnnualReports />
        <ClientCapitalMetrics />
        <Consultation />
      </main>
      <Footer />
      <ChartTooltip />
    </div>
  );
}
