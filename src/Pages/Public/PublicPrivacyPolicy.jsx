import { useGetPublicPrivacyDataQuery } from "../../redux/Feature/seetingsApi/seetingsApi";
import PublicLegalView from "./PublicLegalView";

const PublicPrivacyPolicy = () => {
  const { data, isLoading, isError } = useGetPublicPrivacyDataQuery();

  return (
    <PublicLegalView
      title="Privacy Policy"
      content={data?.privacyPolicy}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default PublicPrivacyPolicy;
