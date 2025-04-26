'use client';

import React from 'react';

interface MarkdownContentProps {
    content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
    // This is a simplified markdown renderer
    // In a production app, you would use a proper markdown library like react-markdown

    // Split content by newlines and process each line
    const lines = content.split('\n');

    // Track list states
    let inList = false;
    let listItems: React.ReactNode[] = [];

    // Track code block state
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeBlockLanguage = '';

    const processedContent: React.ReactNode[] = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();

        // Code block handling
        if (trimmedLine.startsWith('```')) {
            if (!inCodeBlock) {
                // Start of code block
                inCodeBlock = true;
                codeBlockLanguage = trimmedLine.slice(3);
                codeBlockContent = [];
                continue;
            } else {
                // End of code block
                inCodeBlock = false;
                processedContent.push(
                    <div key={`code-${i}`} className="bg-gray-800 text-gray-100 rounded-md p-4 my-4 overflow-x-auto">
                        <pre>
                            <code className={`language-${codeBlockLanguage}`}>
                                {codeBlockContent.join('\n')}
                            </code>
                        </pre>
                    </div>
                );
                continue;
            }
        }

        // If we're in a code block, add to code content
        if (inCodeBlock) {
            codeBlockContent.push(line);
            continue;
        }

        // Empty lines
        if (trimmedLine === '') {
            // If we were in a list, add the list and reset
            if (inList) {
                processedContent.push(<ul key={`list-${i}`} className="list-disc pl-6 my-4">{listItems}</ul>);
                listItems = [];
                inList = false;
            } else {
                processedContent.push(<div key={`empty-${i}`} className="my-4"></div>);
            }
            continue;
        }

        // Headings
        if (trimmedLine.startsWith('# ')) {
            processedContent.push(<h1 key={i} className="text-3xl font-bold mt-6 mb-4">{trimmedLine.slice(2)}</h1>);
            continue;
        }
        if (trimmedLine.startsWith('## ')) {
            processedContent.push(<h2 key={i} className="text-2xl font-bold mt-6 mb-3">{trimmedLine.slice(3)}</h2>);
            continue;
        }
        if (trimmedLine.startsWith('### ')) {
            processedContent.push(<h3 key={i} className="text-xl font-bold mt-5 mb-3">{trimmedLine.slice(4)}</h3>);
            continue;
        }

        // List items
        if (trimmedLine.startsWith('- ')) {
            inList = true;
            listItems.push(<li key={`item-${i}`} className="mb-2">{trimmedLine.slice(2)}</li>);
            continue;
        }

        // If we were in a list but this line is not a list item
        if (inList && !trimmedLine.startsWith('- ')) {
            processedContent.push(<ul key={`list-end-${i}`} className="list-disc pl-6 my-4">{listItems}</ul>);
            listItems = [];
            inList = false;
        }

        // Bold text (simplified)
        if (trimmedLine.includes('**')) {
            const parts = line.split(/\*\*(.*?)\*\*/g);
            processedContent.push(
                <p key={i} className="mb-4">
                    {parts.map((part, j) =>
                        j % 2 === 0 ? part : <strong key={j}>{part}</strong>
                    )}
                </p>
            );
            continue;
        }

        // Links (simplified)
        if (trimmedLine.includes('[') && trimmedLine.includes('](')) {
            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
            let lastIndex = 0;
            let match;
            const parts = [];

            while ((match = linkRegex.exec(line)) !== null) {
                const [fullMatch, text, url] = match;
                const index = match.index;

                // Add text before link
                if (index > lastIndex) {
                    parts.push(line.substring(lastIndex, index));
                }

                // Add link
                parts.push(<a key={`link-${i}-${parts.length}`} href={url} className="text-primary-500 hover:underline">{text}</a>);

                lastIndex = index + fullMatch.length;
            }

            // Add remaining text
            if (lastIndex < line.length) {
                parts.push(line.substring(lastIndex));
            }

            processedContent.push(<p key={i} className="mb-4">{parts}</p>);
            continue;
        }

        // Regular paragraph
        processedContent.push(<p key={i} className="mb-4">{line}</p>);
    }

    // If we ended with a list, add it
    if (inList && listItems.length > 0) {
        processedContent.push(<ul key="final-list" className="list-disc pl-6 my-4">{listItems}</ul>);
    }

    // If we ended in a code block, add it
    if (inCodeBlock && codeBlockContent.length > 0) {
        processedContent.push(
            <div key="final-code" className="bg-gray-800 text-gray-100 rounded-md p-4 my-4 overflow-x-auto">
                <pre>
                    <code className={`language-${codeBlockLanguage}`}>
                        {codeBlockContent.join('\n')}
                    </code>
                </pre>
            </div>
        );
    }

    return (
        <div className="markdown-content">
            {processedContent}
        </div>
    );
} 