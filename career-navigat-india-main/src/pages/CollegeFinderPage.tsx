import React, { useState } from "react";
import CollegeList from "@/components/CollegeList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CollegeFinderPage = () => {
  // For demo, let user pick stream and enter percentile
  const [stream, setStream] = useState<'Engineering' | 'NEET' | 'Business' | 'Arts'>('Engineering');
  const [percentile, setPercentile] = useState<number>(98);
  const [showColleges, setShowColleges] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-xl mb-8">
        <CardHeader>
          <CardTitle>Find Eligible Colleges</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={e => {
              e.preventDefault();
              setShowColleges(true);
            }}
            className="flex flex-col gap-4"
          >
            <label className="font-medium">Select Stream:</label>
            <select
              className="border rounded px-3 py-2"
              value={stream}
              onChange={e => setStream(e.target.value as any)}
            >
              <option value="Engineering">Engineering</option>
              <option value="NEET">NEET</option>
              <option value="Business">Business</option>
              <option value="Arts">Arts</option>
            </select>
            <label className="font-medium">Enter Your Percentile:</label>
            <input
              type="number"
              min={0}
              max={100}
              step={0.1}
              className="border rounded px-3 py-2"
              value={percentile}
              onChange={e => setPercentile(Number(e.target.value))}
              required
            />
            <Button type="submit" className="w-full mt-2">Show Colleges</Button>
          </form>
        </CardContent>
      </Card>
      {showColleges && <CollegeList stream={stream} percentile={percentile} />}
    </div>
  );
};

export default CollegeFinderPage;
