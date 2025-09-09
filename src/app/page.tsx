import { StockCard } from '@/components/stock-card';

const stocks = [
  { ticker: "AAPL", name: "Apple Inc.", price: 172.47, change: 2.54, changePercent: 1.49 },
  { ticker: "GOOGL", name: "Alphabet Inc.", price: 175.83, change: -1.83, changePercent: -1.03 },
  { ticker: "MSFT", name: "Microsoft Corp.", price: 427.56, change: 4.56, changePercent: 1.08 },
  { ticker: "AMZN", name: "Amazon.com, Inc.", price: 183.63, change: -1.21, changePercent: -0.65 },
  { ticker: "TSLA", name: "Tesla, Inc.", price: 183.01, change: 5.99, changePercent: 3.38 },
  { ticker: "NVDA", name: "NVIDIA Corp.", price: 121.78, change: -0.22, changePercent: -0.18 },
  { ticker: "META", name: "Meta Platforms, Inc.", price: 494.63, change: 1.34, changePercent: 0.27 },
  { ticker: "JPM", name: "JPMorgan Chase & Co.", price: 198.88, change: -0.92, changePercent: -0.46 },
];

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-headline font-extrabold tracking-tight text-primary">
            Stock Snapshot
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
            A static overview of key stock market indicators.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stocks.map((stock) => (
            <StockCard key={stock.ticker} stock={stock} />
          ))}
        </div>
      </main>
    </div>
  );
}
