import { OrderStatus, TrackingState, OrderTimeline } from "./OrderTimeline";
import { OrderHeader } from "./OrderHeader";
import { ProductSummary } from "./ProductSummary";
import { SupportActions } from "./SupportActions";
import { TrackingNotAvailable } from "./TrackingNotAvailable";
import { ScrollArea } from "./ui/scroll-area";

interface MainTrackerProps {
  trackingState: TrackingState;
  currentStatus: OrderStatus;
}

export function MainTracker({ trackingState, currentStatus }: MainTrackerProps) {
  if (trackingState === "not_available") {
    return <TrackingNotAvailable />;
  }

  return (
    <div className="flex flex-col h-full flex-1">
      <OrderHeader trackingState={trackingState} currentStatus={currentStatus} />
      <ScrollArea className="flex-1 w-full h-[calc(100vh-145px)] pb-10">
        <OrderTimeline trackingState={trackingState} currentStatus={currentStatus} />
        <div className="h-2 bg-gray-50 border-y border-gray-100" />
        <ProductSummary />
        <div className="h-2 bg-gray-50 border-y border-gray-100" />
        <SupportActions trackingState={trackingState} />
      </ScrollArea>
    </div>
  );
}
