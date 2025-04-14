import Image from 'next/image'
import { useState } from 'react'

export default function OptimizedImage({
    src,
    alt,
    fill,
    width,
    height,
    sizes,
    priority,
    quality = 75,
    className = '',
}) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className={`image-container ${className}`} style={{
            width: fill ? '100%' : width,
            height: fill ? '100%' : height,
            position: fill ? 'relative' : 'static',
        }}>
            {isLoading && <div className="image-placeholder" />}
            <Image
                src={src}
                alt={alt}
                fill={fill}
                width={!fill ? width : undefined}
                height={!fill ? height : undefined}
                sizes={sizes}
                quality={quality}
                priority={priority}
                className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                onLoadingComplete={() => setIsLoading(false)}
            />
            <div className="image-overlay" />
        </div>
    )
}