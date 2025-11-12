import { useState } from "react";

const ProjectImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="relative aspect-video bg-gray-200 overflow-hidden">
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse" />
      )}

      {!isError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <div className="flex items-center justify-center h-full text-6xl">
          🖼️
        </div>
      )}
    </div>
  );
};

export default ProjectImage;
