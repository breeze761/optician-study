'use client'

import { LessonContent as LessonContentType, ContentSection } from '@/types'
import { Info, AlertTriangle, Lightbulb } from 'lucide-react'

interface LessonContentProps {
  content: LessonContentType
}

export default function LessonContent({ content }: LessonContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      {content.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  )
}

function Section({ section }: { section: ContentSection }) {
  switch (section.type) {
    case 'heading':
      return (
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
          {section.content}
        </h2>
      )

    case 'text':
      return (
        <p className="text-gray-700 leading-relaxed mb-4">
          {section.content}
        </p>
      )

    case 'list':
      return (
        <div className="mb-6">
          {section.content && (
            <p className="text-gray-700 mb-2">{section.content}</p>
          )}
          <ul className="list-disc list-inside space-y-2">
            {section.items?.map((item, i) => (
              <li key={i} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )

    case 'definition':
      return (
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 mb-4 rounded-r-lg">
          <dt className="font-bold text-gray-900 mb-1">{section.term}</dt>
          <dd className="text-gray-700">{section.content}</dd>
        </div>
      )

    case 'callout':
      const variant = section.variant || 'info'
      const styles = {
        info: {
          bg: 'bg-blue-50',
          border: 'border-blue-500',
          icon: <Info className="w-5 h-5 text-blue-600" />,
          text: 'text-blue-800',
        },
        warning: {
          bg: 'bg-amber-50',
          border: 'border-amber-500',
          icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
          text: 'text-amber-800',
        },
        tip: {
          bg: 'bg-green-50',
          border: 'border-green-500',
          icon: <Lightbulb className="w-5 h-5 text-green-600" />,
          text: 'text-green-800',
        },
      }
      const style = styles[variant]

      return (
        <div className={`${style.bg} border-l-4 ${style.border} p-4 mb-4 rounded-r-lg flex gap-3`}>
          <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
          <p className={`${style.text} m-0`}>{section.content}</p>
        </div>
      )

    case 'image':
      return (
        <div className="my-6">
          {/* Placeholder for images - would use Next Image in production */}
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
            Image: {section.content}
          </div>
        </div>
      )

    default:
      return null
  }
}
