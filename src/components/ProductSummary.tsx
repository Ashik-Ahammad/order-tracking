import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function ProductSummary() {
  return (
    <div className="py-4 px-4 space-y-4">
      <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Order Summary</h2>
      <Card className="border-gray-100 shadow-none bg-gray-50/50">
        <CardContent className="p-4 flex gap-4">
          <div className="h-20 w-20 rounded-md bg-gray-200 flex-shrink-0 flex items-center justify-center">
            <span className="text-xs text-gray-400 font-medium">Image</span>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">Sony Noise Cancelling Headphones</h3>
              <p className="font-semibold text-sm">$299.00</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">Color: Midnight Black</p>
            <div className="mt-auto flex items-center gap-2">
              <Badge variant="secondary" className="text-[10px] font-medium rounded-sm px-1.5 py-0">Qty: 1</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-between items-center py-2 text-sm border-t border-gray-100">
        <span className="text-gray-500">Order #</span>
        <span className="font-medium text-gray-900">ORD-8934729-12</span>
      </div>
    </div>
  );
}
