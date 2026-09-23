import { TrackingState, OrderStatus } from "./OrderTimeline";
import { cn } from "@/lib/utils";
import { Calendar, AlertCircle } from "lucide-react";

interface OrderHeaderProps {
  trackingState: TrackingState;
  currentStatus: OrderStatus;
}

export function OrderHeader({ trackingState, currentStatus }: OrderHeaderProps) {
  if (trackingState === "not_available") return null;

  const isDelayed = trackingState === "delayed";
  const isDelivered = currentStatus === "delivered";

  return (
    <div className="px-6 py-6 border-b border-gray-100 bg-white">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {isDelivered ? "Delivered" : "Arriving"}
          </h2>
          {!isDelivered && (
            <div className="flex items-center text-gray-600 mt-1">
              <Calendar className="h-4 w-4 mr-2" />
              <span className={cn("font-medium", isDelayed ? "text-amber-600 line-through mr-2" : "text-gray-900")}>
                Wed, Oct 25
              </span>
              {isDelayed && (
                <span className="font-bold text-amber-600">Pending</span>
              )}
            </div>
          )}
          {isDelivered && (
            <div className="flex items-center text-green-700 mt-1">
              <span className="font-medium">Yesterday, 2:30 PM</span>
            </div>
          )}
        </div>
      </div>
      
      {isDelayed && (
        <div className="mt-4 p-3 bg-amber-50 rounded-lg flex gap-3 items-start border border-amber-100">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-snug">
            Your package is delayed. We are working on getting it to you as soon as possible.
          </p>
        </div>
      )}
    </div>
  );
}
