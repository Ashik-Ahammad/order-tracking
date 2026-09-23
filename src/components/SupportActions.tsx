import { HelpCircle, MessageSquare, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { TrackingState } from "./OrderTimeline";

interface SupportActionsProps {
  trackingState: TrackingState;
}

export function SupportActions({ trackingState }: SupportActionsProps) {
  const needsAttention = trackingState === "delayed" || trackingState === "delivered_not_received";

  return (
    <div className="py-4 px-4 space-y-4 pb-8">
      <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Need Help?</h2>
      
      {needsAttention && (
        <Card className="border-red-100 bg-red-50/50 shadow-none mb-4">
          <CardContent className="p-4">
            <h3 className="font-semibold text-red-800 text-sm mb-1">
              {trackingState === "delayed" ? "Order Delayed" : "Delivery Issue"}
            </h3>
            <p className="text-xs text-red-600 mb-3">
              {trackingState === "delayed" 
                ? "Your order is taking longer than expected. We apologize for the inconvenience." 
                : "If you haven't received your package, please let us know immediately so we can help."}
            </p>
            <Button size="sm" variant="destructive" className="w-full text-xs">
              Report an Issue
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="w-full h-12 flex flex-col items-center justify-center gap-1 text-gray-600 bg-white">
          <MessageSquare className="h-4 w-4" />
          <span className="text-[10px]">Chat Support</span>
        </Button>
        <Button variant="outline" className="w-full h-12 flex flex-col items-center justify-center gap-1 text-gray-600 bg-white">
          <Phone className="h-4 w-4" />
          <span className="text-[10px]">Call Us</span>
        </Button>
      </div>
      
      <Button variant="ghost" className="w-full text-xs text-gray-500 mt-2">
        <HelpCircle className="h-3 w-3 mr-2" />
        View FAQ & Policies
      </Button>
    </div>
  );
}
