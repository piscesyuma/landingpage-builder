import { BuilderLayout } from "@/components/builder/BuilderLayout";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Index = () => {
  const { landingPageID } = useParams<{ landingPageID: string }>();
  
  if (!landingPageID) {
    return <Navigate to="/" replace />;
  }
  
  return <BuilderLayout landingPageID={landingPageID} />;
};

export default Index;
