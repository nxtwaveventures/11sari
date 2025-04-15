import Image from 'next/image';
import { useState } from 'react';

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 75,
    sizes = '(max-width: 768px) 100vw, 50vw'
}) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`image-container ${isLoading ? 'loading' : 'loaded'} ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                quality={quality}
                priority={priority}
                sizes={sizes}
                onLoadingComplete={() => setIsLoading(false)}
            />
            <style jsx>{`
                .image-container {
                    position: relative;
                    overflow: hidden;
                    background: #f8f8f8;
                }

                .image-container.loading {
                    animation: pulse 1.5s infinite;
                }

                .image-container.loaded {
                    animation: none;
                }

                @keyframes pulse {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                .image-container :global(img) {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .image-container:hover :global(img) {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
}