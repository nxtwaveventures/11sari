import React from 'react';

interface LegalContentProps {
    title: string;
    children: React.ReactNode;
}

export default function LegalContent({ title, children }: LegalContentProps) {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                    {title}
                </span>
            </h1>

            <div className="prose prose-lg max-w-none">
                {/* Animated divider */}
                <div className="flex items-center mb-8">
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
                    <div className="mx-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary-400" fill="currentColor">
                            <path d="M12 2L8 6H16L12 2Z M12 22L16 18H8L12 22Z" />
                        </svg>
                    </div>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
                </div>

                {children}

                {/* Signature block */}
                <div className="mt-16 pt-6 border-t border-gray-200 text-right">
                    <p className="italic text-gray-500">With gratitude,</p>
                    <p className="font-script text-2xl text-primary-600 mt-2">11Sari Team</p>
                </div>
            </div>
        </div>
    );
} 