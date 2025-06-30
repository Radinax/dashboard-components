import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Format, getFormattedValue } from "@/lib/utils";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

type TrendDirection = "up" | "down";

type MetricCardProps = {
  title: string;
  value: number;
  format?: Format;
  trend?: {
    direction: TrendDirection;
    percentage?: string;
    labelUp?: string;
    labelDown?: string;
  };
  footerText?: string;
};

const MetricCard = ({
  title,
  value,
  format = "number",
  trend,
  footerText,
}: MetricCardProps) => {
  const defaultTrendLabels = {
    up: "Trending Up",
    down: "Trending Down",
  };

  const trendLabel =
    trend?.direction === "up"
      ? trend.labelUp ?? defaultTrendLabels.up
      : trend?.labelDown ?? defaultTrendLabels.down;

  return (
    <Card className="border bg-card shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out border-border">
      <CardHeader className="relative">
        <CardDescription className="text-muted-foreground">
          {title}
        </CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          {getFormattedValue({ format, value })}
        </CardTitle>
        {trend && (
          <div className="absolute right-4 top-4">
            <Badge
              variant="outline"
              className="flex gap-1 rounded-lg text-xs shadow-sm border"
            >
              {trend.direction === "up" ? (
                <>
                  <TrendingUpIcon className="size-3" />+
                  {trend.percentage ?? `${Math.abs(value)}%`}
                </>
              ) : (
                <>
                  <TrendingDownIcon className="size-3" />-
                  {trend.percentage ?? `${Math.abs(value)}%`}
                </>
              )}
            </Badge>
          </div>
        )}
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        {trend && (
          <div className="line-clamp-1 flex gap-2 font-medium">
            {trendLabel}
            {trend.direction === "up" ? (
              <TrendingUpIcon className="size-4" />
            ) : (
              <TrendingDownIcon className="size-4" />
            )}
          </div>
        )}
        {footerText && (
          <div className="text-muted-foreground">{footerText}</div>
        )}
      </CardFooter>
    </Card>
  );
};

export default MetricCard;
