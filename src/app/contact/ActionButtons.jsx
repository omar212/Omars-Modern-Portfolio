import { Download, Share, Calendar } from "lucide-react";
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
              <Button
                onClick={handleShare}
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-[#585FF0]"
              >
                <Share className="h-4 w-4 text-[#585FF0]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Share my portfolio</TooltipContent>
          </Tooltip>

          <TooltipTrigger asChild>
            <Button
              onClick={handleDownload}
              size="lg"
              className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600
                  text-white 
                  font-extrabold
                  hover:bg-blue-600 
                  hover:text-white 
                  transition-transform 
                  duration-300 
                  ease-in-out 
                  hover:scale-105 
                  active:scale-95
                  rounded-full"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </TooltipTrigger>
          <TooltipContent>Download my resume</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleSchedule}
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-[#585FF0]"
            >
              <Calendar className="h-4 w-4 text-[#585FF0]" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Schedule a call with me</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default ActionButtons;
