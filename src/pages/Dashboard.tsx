import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Send, 
  Users, 
  Clock,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  FileText
} from "lucide-react";

const dashboardFeatures = [
  {
    title: "Real-Time Analytics",
    description: "Live dashboards showing message delivery, engagement metrics, and campaign performance across all channels.",
    icon: BarChart3,
  },
  {
    title: "Campaign Management",
    description: "Create, schedule, and manage messaging campaigns with audience targeting and A/B testing capabilities.",
    icon: Send,
  },
  {
    title: "Contact Management",
    description: "Organize contacts, manage segments, and maintain consent records for compliant messaging.",
    icon: Users,
  },
  {
    title: "Delivery Logs",
    description: "Detailed logs of every message with status, timestamps, and carrier information for troubleshooting.",
    icon: FileText,
  },
  {
    title: "Scheduled Messages",
    description: "Queue messages for future delivery with timezone support and optimal send time recommendations.",
    icon: Clock,
  },
  {
    title: "Performance Reports",
    description: "Generate custom reports for stakeholders with delivery rates, costs, and engagement trends.",
    icon: TrendingUp,
  },
];

const metrics = [
  { label: "Messages Sent", value: "12,847,293", change: "+12.5%" },
  { label: "Delivery Rate", value: "99.2%", change: "+0.3%" },
  { label: "Avg. Delivery Time", value: "2.3s", change: "-0.5s" },
  { label: "Active Campaigns", value: "24", change: "+3" },
];

export default function Dashboard() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-enterprise">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
              Dashboard Overview
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed animate-fade-up stagger-1">
              Complete visibility into your messaging operations. Monitor, analyze, 
              and optimize from a single unified dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Preview */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="card-enterprise text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <p className="text-3xl font-bold text-foreground mb-1">{metric.value}</p>
                <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                <span className="inline-flex items-center text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                  {metric.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-enterprise">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive dashboard designed for enterprise messaging operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="card-enterprise opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="section-padding bg-secondary">
        <div className="container-enterprise">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You'll See in Your Dashboard
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: CheckCircle2, text: "Live message delivery status and tracking" },
                  { icon: CheckCircle2, text: "Campaign performance with engagement metrics" },
                  { icon: CheckCircle2, text: "Compliance status and DLT registration health" },
                  { icon: CheckCircle2, text: "Cost analysis and budget tracking" },
                  { icon: CheckCircle2, text: "API usage and rate limit monitoring" },
                  { icon: AlertCircle, text: "Alerts for delivery issues or compliance warnings" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <item.icon className={`w-5 h-5 mt-0.5 shrink-0 ${item.icon === AlertCircle ? 'text-amber-500' : 'text-accent'}`} />
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock Dashboard Preview */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs text-muted-foreground">dashboard.hyperlink.com</span>
              </div>
              <div className="space-y-4">
                <div className="h-32 bg-secondary rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-muted-foreground/30" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 bg-secondary rounded-lg" />
                  <div className="h-20 bg-secondary rounded-lg" />
                  <div className="h-20 bg-secondary rounded-lg" />
                </div>
                <div className="h-24 bg-secondary rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container-enterprise text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            See the Dashboard in Action
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Request a demo to see how Hyperlink's dashboard can transform your messaging operations.
          </p>
          <Link to="/contact" className="btn-accent">
            Request Demo
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
