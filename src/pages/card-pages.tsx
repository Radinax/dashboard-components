import MetricCard from "@/components/cards/metric-card";

const CardPages = () => {
  return (
    <div className="p-4">
      {/* Horizontal Grid for 4 Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 *:shrink-0">
        {/* Regular Metric Cards */}
        <MetricCard
          title="New Customers"
          value={1234}
          format="currency"
          trend={{
            direction: "down",
            percentage: "20%",
            labelDown: "Down 20% this period",
          }}
          footerText="Acquisition needs attention"
        />

        <MetricCard
          title="Active Accounts"
          value={45678}
          format="currency"
          trend={{
            direction: "up",
            labelUp: "Strong user retention",
          }}
          footerText="Engagement exceed targets"
        />

        <MetricCard
          title="Growth Rate"
          value={4.5}
          format="percent"
          trend={{
            direction: "up",
            labelUp: "Steady performance",
          }}
          footerText="Meets growth projections"
        />

        {/* Metric Card With Chart */}
        <MetricCard
          title="Total Revenue"
          value={1250}
          format="currency"
          trend={{
            direction: "up",
            percentage: "12.5%",
            labelUp: "Trending up this month",
          }}
          footerText="Visitors for the last 6 months"
        />
      </div>
    </div>
  );
};

export default CardPages;
