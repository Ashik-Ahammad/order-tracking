"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { MainTracker } from "@/components/MainTracker";
import { OrderStatus, TrackingState } from "@/components/OrderTimeline";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [demoState, setDemoState] = useState<TrackingState>("normal");

  const getCurrentStatus = (): OrderStatus => {
    if (demoState === "delivered_not_received") return "delivered";
    if (demoState === "delayed") return "shipped";
    return "out_for_delivery"; 
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gray-50 overflow-hidden font-sans">
      <div className="bg-slate-900 text-white p-2 text-xs flex flex-col gap-2 z-[60]">
        <span className="font-semibold px-1 text-slate-300">Demo State Toggle:</span>
        <Tabs value={demoState} onValueChange={(v: any) => setDemoState(v)} className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-slate-800">
            <TabsTrigger value="normal" className="text-[10px] py-1.5 text-slate-300 data-[state=active]:bg-white data-[state=active]:text-slate-900">Normal</TabsTrigger>
            <TabsTrigger value="delayed" className="text-[10px] py-1.5 text-slate-300 data-[state=active]:bg-white data-[state=active]:text-slate-900">Delayed</TabsTrigger>
            <TabsTrigger value="delivered_not_received" className="text-[10px] py-1.5 text-slate-300 data-[state=active]:bg-white data-[state=active]:text-slate-900">Issue</TabsTrigger>
            <TabsTrigger value="not_available" className="text-[10px] py-1.5 text-slate-300 data-[state=active]:bg-white data-[state=active]:text-slate-900">No Track</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden relative shadow-[0_0_20px_rgba(0,0,0,0.05)] bg-white">
        <Header />
        <MainTracker trackingState={demoState} currentStatus={getCurrentStatus()} />
      </div>
    </div>
  );
}
