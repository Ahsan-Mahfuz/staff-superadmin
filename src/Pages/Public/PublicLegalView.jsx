/* eslint-disable react/prop-types */
import { Spin } from "antd";

// Shared shell for the public (no-login) legal pages — Privacy Policy and
// Terms & Conditions — surfaced from the super-admin dashboard. The content is
// stored as HTML by the super admin, so it is rendered as-is.
const PublicLegalView = ({ title, content, isLoading, isError }) => {
  return (
    <div className="min-h-screen bg-[#eeeeee]">
      <div className="h-20 bg-primary text-white flex items-center px-4 md:px-20">
        <img
          src="/forma_logo.svg"
          alt="FORMA"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>
      <div className="max-w-4xl mx-auto bg-white my-8 mx-4 md:mx-auto p-6 md:p-10 rounded-lg shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">{title}</h1>
        {isLoading ? (
          <div className="flex justify-center py-16">
            <Spin size="large" />
          </div>
        ) : isError ? (
          <p className="text-red-600">
            Unable to load content. Please try again later.
          </p>
        ) : content ? (
          <div
            className="prose prose-neutral max-w-none public-legal-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <p className="text-neutral-500">No content has been published yet.</p>
        )}
      </div>
    </div>
  );
};

export default PublicLegalView;
