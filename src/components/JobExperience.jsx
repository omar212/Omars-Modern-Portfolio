import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { Button } from "components/ui/button";
import { Badge } from "components/ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Default jobs data
const defaultJobs = [
  {
    jobTitle: "Senior FullStack Engineer",
    jobDesc: [
      "Led the development of the client portal, establishing its architecture and building efficient, reusable components with TypeScript and React.",
      "Spearheaded mobile and desktop design implementations, ensuring responsive and intuitive user experiences across devices, focusing on creating reusable components using Storybook.",
      "Integrated Docker for streamlined development environments and used Framer Motion to enhance user interactions with smooth animations.",
    ],
    jobDate: "October 2024 - January 2025",
    jobLocation: "New York",
    jobCompany: "Design Manager",
    jobUrl: "https://www.designmanager.com/",
    jobIcon: "/design-manager-logo.svg",
    className: "design-manager-job",
  },
];

const JobExperience = ({ jobs = defaultJobs }) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Wrap entire jobs list in a motion.div to enable staggered animation */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.5, // Apply staggered timing
            },
          },
        }}
      >
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 }, // Hidden state
              visible: { opacity: 1, y: 0 }, // Visible state with animation
            }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className={`overflow-hidden transition-all shadow-md hover:shadow-xl ${
                job.className || ""
              }`}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">{job.jobTitle}</CardTitle>
                    <CardDescription className="text-lg font-medium">
                      {job.jobCompany}
                    </CardDescription>
                  </div>
                  {job.jobIcon && (
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <Image
                        src={job.jobIcon}
                        width={100}
                        height={100}
                        alt={`${job.jobCompany} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Calendar className="w-4 h-4" />
                    {job.jobDate}
                  </Badge>
                  {job.jobLocation && (
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <MapPin className="w-4 h-4" />
                      {job.jobLocation}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-3">
                    {job.jobDesc.map((desc, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground leading-relaxed pl-2"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {job.jobUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-6 hover:bg-slate-100"
                      onClick={() => window.open(job.jobUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit {job.jobCompany}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default JobExperience;
