import { Download, Share, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ActionButtons = () => {
  const handleDownload = () => {
    const url = "/resume.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "Elnagdy, Omar Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: "Omar Elnagdy - Portfolio",
          url: url,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  const handleSchedule = () => {
    window.open("https://calendly.com/omarelnagdy16", "_blank");
  };

  return (
    <TooltipProvider>
      <div className="flex justify-between mt-4 gap-4">
        <Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={handleShare} variant="outline" size="lg">
                <Share className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share my portfolio</TooltipContent>
          </Tooltip>

          <TooltipTrigger asChild>
            <Button onClick={handleDownload} size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </TooltipTrigger>
          <TooltipContent>Download my resume</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={handleSchedule} variant="outline" size="lg">
              <Calendar className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Schedule a call with me</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default ActionButtons;