import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

type Stock = {
  ticker: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
};

interface StockCardProps {
  stock: Stock;
}

export const StockCard: FC<StockCardProps> = ({ stock }) => {
  const isPositive = stock.change > 0;
  // Using chart-2 for a green color and destructive for red, both from the theme.
  const positiveColor = "text-[hsl(var(--chart-2))]";
  const negativeColor = "text-destructive";

  return (
    <Card className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2 overflow-hidden">
              <CardTitle className="text-xl font-bold">{stock.ticker}</CardTitle>
              <p className="text-sm text-muted-foreground truncate">{stock.name}</p>
            </div>
            {isPositive ? (
                <TrendingUp className={`h-6 w-6 shrink-0 ${positiveColor}`} />
            ) : (
                <TrendingDown className={`h-6 w-6 shrink-0 ${negativeColor}`} />
            )}
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <p className="text-3xl font-bold mb-1">${stock.price.toFixed(2)}</p>
        <div className={`flex items-center text-md font-semibold ${isPositive ? positiveColor : negativeColor}`}>
          <span>{isPositive ? '+' : ''}{stock.change.toFixed(2)}</span>
          <span className="ml-2">({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)</span>
        </div>
      </CardContent>
    </Card>
  );
};
