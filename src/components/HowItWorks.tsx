import { MessageSquare, LineChart, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Share Your Investment Goals",
    description: "Complete our simple form with your investment amount and experience level. Our team reviews your profile within 24 hours."
  },
  {
    step: "02",
    icon: LineChart,
    title: "Receive Expert Strategy",
    description: "Our analysts create a personalized investment strategy tailored to your goals, risk tolerance, and timeline."
  },
  {
    step: "03",
    icon: Rocket,
    title: "Start Your Crypto Journey",
    description: "Begin investing with confidence. Track your portfolio growth and receive regular performance updates."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/50">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is simple. Our streamlined process ensures you're investing with expert guidance from day one.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl text-2xl font-bold mb-6">
                  {step.step}
                </div>
                <div className="card-elevated text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
