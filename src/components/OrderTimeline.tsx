import { Check, Clock, Package, Truck, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type OrderStatus = "processing" | "shipped" | "out_for_delivery" | "delivered";
export type TrackingState = "normal" | "delayed" | "delivered_not_received" | "not_available";

interface TimelineProps {
  currentStatus: OrderStatus;
  trackingState: TrackingState;
}

export function OrderTimeline({ currentStatus, trackingState }: TimelineProps) {
  if (trackingState === "not_available") return null;

  const steps = [
    { id: "processing", label: "Processing", icon: Package },
    { id: "shipped", label: "Shipped", icon: Truck },
    { id: "out_for_delivery", label: "Out for Delivery", icon: Clock },
    { id: "delivered", label: "Delivered", icon: Check },
  ];

  const currentIdx = steps.findIndex((s) => s.id === currentStatus);
  const isDelayed = trackingState === "delayed";
  const isDeliveredNotReceived = trackingState === "delivered_not_received";

  return (
    <div className="py-6 px-2">
      <div className="relative border-l-2 border-gray-100 ml-4 space-y-8">
        {steps.map((step, idx) => {
          const isCompleted = idx < currentIdx || (idx === currentIdx && currentStatus === "delivered");
          const isCurrent = idx === currentIdx && currentStatus !== "delivered";
          const isFuture = idx > currentIdx;

          let Icon = step.icon;
          let iconColor = "text-gray-400";
          let bgColor = "bg-gray-100";
          let borderColor = "border-gray-100";

          if (isCompleted) {
            iconColor = "text-white";
            bgColor = "bg-green-600";
            borderColor = "border-green-600";
          } else if (isCurrent) {
            if (isDelayed && step.id !== "delivered") {
              iconColor = "text-white";
              bgColor = "bg-amber-500";
              borderColor = "border-amber-500";
              Icon = AlertCircle;
            } else {
              iconColor = "text-blue-600";
              bgColor = "bg-blue-50";
              borderColor = "border-blue-600";
            }
          }

          if (step.id === "delivered" && isDeliveredNotReceived && currentStatus === "delivered") {
            iconColor = "text-white";
            bgColor = "bg-red-500";
            borderColor = "border-red-500";
            Icon = AlertCircle;
          }

          return (
            <div key={step.id} className="relative pl-8">
              <span className={cn(
                "absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors duration-300",
                bgColor,
                borderColor
              )}>
                <Icon className={cn("h-4 w-4", iconColor)} />
              </span>
              <div className="flex flex-col">
                <h3 className={cn(
                  "text-base font-semibold",
                  (isCompleted || isCurrent) ? "text-gray-900" : "text-gray-400"
                )}>
                  {step.label}
                </h3>
                {isCurrent && !isDelayed && (
                  <p className="text-sm text-gray-500 mt-1">In progress...</p>
                )}
                {isCurrent && isDelayed && (
                  <p className="text-sm text-amber-600 mt-1 font-medium">Shipment delayed</p>
                )}
                {isCompleted && step.id === "delivered" && isDeliveredNotReceived && (
                  <p className="text-sm text-red-600 mt-1 font-medium">Action required</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
