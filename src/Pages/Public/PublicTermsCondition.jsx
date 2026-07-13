import { useGetPublicTermsDataQuery } from "../../redux/Feature/seetingsApi/seetingsApi";
import PublicLegalView from "./PublicLegalView";

const PublicTermsCondition = () => {
  const { data, isLoading, isError } = useGetPublicTermsDataQuery();

  return (
    <PublicLegalView
      title="Terms and Conditions"
      content={data?.termsAndConditions}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default PublicTermsCondition;
