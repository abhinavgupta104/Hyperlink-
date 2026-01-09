import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FlowNodeData } from "./ServiceFlowNode";
import { Building2, User, AlertTriangle, Clock, CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NodeDetailModalProps {
  node: FlowNodeData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function NodeDetailModal({ node, isOpen, onClose }: NodeDetailModalProps) {
  if (!node) return null;

  const Icon = node.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            <DialogHeader className="mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold text-foreground mb-1">
                    {node.title}
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground">{node.subtitle}</p>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* What is this step */}
              <section>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">1</span>
                  What is this step?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  {node.details.whatIsThis}
                </p>
              </section>

              {/* Why does this exist */}
              <section>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">2</span>
                  Why does this step exist?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  {node.details.whyExists}
                </p>
              </section>

              {/* Flow Context */}
              <section className="bg-secondary rounded-xl p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Before This Step</h4>
                    <p className="text-sm text-foreground">{node.details.beforeStep}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">After This Step</h4>
                    <p className="text-sm text-foreground">{node.details.afterStep}</p>
                  </div>
                </div>
              </section>

              {/* Responsibility Split */}
              <section>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-accent" />
                  Responsibility Split
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Hyperlink Handles */}
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-5 h-5 text-accent" />
                      <h4 className="font-semibold text-accent">Handled by Hyperlink</h4>
                    </div>
                    <ul className="space-y-2">
                      {node.details.hyperlinkHandles.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Customer Handles */}
                  <div className="bg-muted rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <User className="w-5 h-5 text-foreground" />
                      <h4 className="font-semibold text-foreground">Your Responsibility</h4>
                    </div>
                    <ul className="space-y-2">
                      {node.details.customerHandles.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-4 h-4 rounded-full border-2 border-muted-foreground/30 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Compliance */}
              {node.details.compliance.length > 0 && (
                <section className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-amber-600" />
                    <h4 className="font-semibold text-amber-800">Compliance & Regulations</h4>
                  </div>
                  <ul className="space-y-2">
                    {node.details.compliance.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-amber-900">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Timeline */}
              <section className="flex items-center gap-4 bg-secondary rounded-xl p-4">
                <Clock className="w-8 h-8 text-accent" />
                <div>
                  <h4 className="font-semibold text-foreground">Expected Timeline</h4>
                  <p className="text-sm text-muted-foreground">{node.details.timeline}</p>
                </div>
              </section>

              {/* What if it fails */}
              <section className="border border-destructive/20 bg-destructive/5 rounded-xl p-4">
                <h4 className="font-semibold text-destructive mb-2">What happens if something fails?</h4>
                <p className="text-sm text-muted-foreground">{node.details.failures}</p>
              </section>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
