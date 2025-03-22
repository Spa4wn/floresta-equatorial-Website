
import React, { useState } from 'react';
interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}
export const ImageWithFallback = ({
  src,
  alt,
  fallback = 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  return <img {...props} src={imgSrc} alt={alt} onError={() => setImgSrc(fallback)} loading="lazy" />;
};