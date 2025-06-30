import MetricCard from "@/components/cards/metric-card";
import { ComponentPlaceholder } from "@/components/component-placeholder";
import { cn } from "@/lib/utils";

interface MainContentProps {
  className?: string;
}

export function MainContent({ className }: MainContentProps) {
  return (
    <main className={cn("flex-1 p-6 bg-background", className)}>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Dashboard Components
        </h1>
        <p className="text-muted-foreground">
          Here are the components I tend to use for building a dashboard
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <ComponentPlaceholder
          size="lg"
          title="Analytics Chart"
          description="Main analytics visualization with interactive charts and graphs"
        />
        <ComponentPlaceholder
          size="md"
          title="Recent Activity"
          description="Latest user actions and system events"
        />
        <ComponentPlaceholder
          size="md"
          title="User Overview"
          description="User statistics and demographic data"
        />
        <ComponentPlaceholder
          size="md"
          title="Performance"
          description="System performance metrics and monitoring"
        />
      </div>

      {/* Secondary Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ComponentPlaceholder
          size="md"
          title="Data Table"
          description="Sortable and filterable data table with pagination"
        />
        <ComponentPlaceholder
          size="md"
          title="Calendar View"
          description="Event calendar and scheduling interface"
        />
        <ComponentPlaceholder
          size="md"
          title="Task List"
          description="Todo items and task management"
        />
      </div>

      {/* Footer Section */}
      <div className="mt-8 p-6 bg-card rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Ready to Build?
        </h3>
        <p className="text-muted-foreground mb-4">
          Start by replacing these placeholders with your actual Shadcn
          components. The grid system will automatically adapt to your content.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            Browse Components
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </main>
  );
}
