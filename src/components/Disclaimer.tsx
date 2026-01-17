import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container-tight">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-2xl">
            <div className="shrink-0">
              <div className="w-10 h-10 bg-muted-foreground/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Important Risk Disclosure</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cryptocurrency investments are subject to significant market volatility and risk. Past performance does not guarantee future results. The value of your investment may go down as well as up, and you may not recover the amount originally invested. Please ensure you understand the risks involved before investing. This is not financial advice. We recommend consulting with a qualified financial advisor before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
