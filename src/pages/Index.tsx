import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [landingPageName, setLandingPageName] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (landingPageName.trim()) {
      navigate(`/${landingPageName.trim()}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Create Your Landing Page
        </h1>
        <p className="text-center text-gray-600">
          Enter a name for your landing page to get started
        </p>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter landing page name"
            value={landingPageName}
            onChange={(e) => setLandingPageName(e.target.value)}
            className="w-full"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleContinue();
              }
            }}
          />
          <Button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-builder-primary to-purple-500 hover:from-builder-primary-hover hover:to-purple-600 text-white"
            disabled={!landingPageName.trim()}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
