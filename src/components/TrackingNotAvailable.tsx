import { PackageSearch } from "lucide-react";

export function TrackingNotAvailable() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center space-y-4">
      <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
        <PackageSearch className="h-8 w-8 text-gray-400" />
      </div>
      <h2 className="text-lg font-semibold text-gray-900">Tracking Not Available Yet</h2>
      <p className="text-sm text-gray-500 max-w-[280px]">
        We've received your order, but tracking information isn't available from the carrier yet. Please check back later.
      </p>
    </div>
  );
}
