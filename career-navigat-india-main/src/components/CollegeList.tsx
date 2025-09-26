import React from "react";
import { colleges, College, jkCollegeSearchUrl } from "@/data/colleges";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CollegeListProps {
  stream: College["stream"];
  percentile: number;
}

const CollegeList: React.FC<CollegeListProps> = ({ stream, percentile }) => {
  let eligibleColleges = colleges.filter(
    (college) => college.stream === stream && (stream !== 'Arts' ? percentile >= college.cutoff : true)
  );
  // For Arts, if percentile is 0, show all Arts colleges
  if (stream === 'Arts' && percentile === 0) {
    eligibleColleges = colleges.filter((college) => college.stream === 'Arts');
  }

  return (
    <div className="container mx-auto py-8 px-2 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Eligible Colleges for {stream}</h2>
      <div className="mb-6 flex flex-col items-center">
        <a
          href={jkCollegeSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-200 transition mb-2"
        >
          Visit the official J&K Government College Search Portal (Mandatory for all students)
        </a>
        <span className="text-xs text-muted-foreground">https://jkadmission.samarth.ac.in/</span>
      </div>
      {eligibleColleges.length === 0 ? (
        <p className="text-center text-lg text-muted-foreground">No colleges found for your percentile.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eligibleColleges.map((college) => (
            <Card key={college.name} className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">Location: {college.location}</p>
                <p className="text-sm mb-1">Cutoff: <span className="font-medium">{college.cutoff}%</span></p>
                <p className="text-sm mb-1">Seats: <span className="font-medium">{college.seats}</span></p>
                <p className="text-sm mb-1">Fees: <span className="font-medium">₹{college.fees.toLocaleString()}</span> / year</p>
                {college.notes && (
                  <p className="text-xs text-gray-500 mt-1">{college.notes}</p>
                )}
              </div>
              {college.website ? (
                <a
                  href={college.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full"
                >
                  <Button variant="secondary" className="w-full">Apply Now</Button>
                </a>
              ) : (
                <Button className="mt-4 w-full" variant="secondary" disabled>
                  No Official Site
                </Button>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollegeList;
