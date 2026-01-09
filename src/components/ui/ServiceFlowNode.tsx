import { cn } from "@/lib/utils";
import { LucideIcon, CheckCircle2, Clock, AlertCircle, Building2, User } from "lucide-react";

export interface FlowNodeData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  status?: "completed" | "active" | "pending";
  handledBy: "hyperlink" | "customer" | "both";
  details: {
    whatIsThis: string;
    whyExists: string;
    beforeStep: string;
    afterStep: string;
    hyperlinkHandles: string[];
    customerHandles: string[];
    compliance: string[];
    timeline: string;
    failures: string;
  };
}

interface ServiceFlowNodeProps {
  node: FlowNodeData;
  isActive?: boolean;
  onClick: () => void;
  index: number;
}

export function ServiceFlowNode({ node, isActive, onClick, index }: ServiceFlowNodeProps) {
  const Icon = node.icon;

  const statusIcon = {
    completed: CheckCircle2,
    active: Clock,
    pending: AlertCircle,
  };

  const StatusIcon = node.status ? statusIcon[node.status] : null;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full text-left transition-all duration-300",
        "opacity-0 animate-fade-up",
      )}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
    >
      <div
        className={cn(
          "node-card relative overflow-hidden",
          isActive && "border-accent shadow-node"
        )}
      >
        {/* Handled By Indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1">
          {(node.handledBy === "hyperlink" || node.handledBy === "both") && (
            <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center" title="Handled by Hyperlink">
              <Building2 className="w-3 h-3 text-accent" />
            </span>
          )}
          {(node.handledBy === "customer" || node.handledBy === "both") && (
            <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center" title="Customer Action">
              <User className="w-3 h-3 text-muted-foreground" />
            </span>
          )}
        </div>

        {/* Icon */}
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors",
          isActive ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"
        )}>
          <Icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className="font-semibold text-foreground mb-1 pr-16">{node.title}</h3>
        <p className="text-xs text-muted-foreground mb-2">{node.subtitle}</p>
        <p className="text-sm text-muted-foreground line-clamp-2">{node.description}</p>

        {/* Status Badge */}
        {StatusIcon && (
          <div className={cn(
            "mt-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium",
            node.status === "completed" && "bg-green-100 text-green-700",
            node.status === "active" && "bg-amber-100 text-amber-700",
            node.status === "pending" && "bg-gray-100 text-gray-600"
          )}>
            <StatusIcon className="w-3 h-3" />
            {node.status === "completed" && "Complete"}
            {node.status === "active" && "In Progress"}
            {node.status === "pending" && "Pending"}
          </div>
        )}

        {/* Click Hint */}
        <div className={cn(
          "absolute bottom-3 right-3 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity",
          isActive && "opacity-100 text-accent"
        )}>
          Click to explore →
        </div>
      </div>
    </button>
  );
}
