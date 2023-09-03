'use client';

import useTranslate from '@/hooks/useTranslate';
import { useState } from 'react';

const Resume = ({ text, textLarge }) => {
  const { translate } = useTranslate();
  const [open, setOpen] = useState(false);

  return (
    <div className="prose prose-neutral dark:prose-invert">
      {!open ? (
        <p className="experience-content animate-fade-in-up">{text}</p>
      ) : (
        <div
          className="experience-content animate-fade-in-up"
          dangerouslySetInnerHTML={{ __html: textLarge }}
        ></div>
      )}
      <div className="flex w-full justify-end">
        <button
          className="border-neutral-100 dark:border-neutral-800 border text-sm px-2 py-1 rounded-lg hover:ring-2 ring-neutral-200 dark:ring-gray-300 transition-all"
          onClick={() => setOpen(!open)}
        >
          {translate('readmore')}
        </button>
      </div>
    </div>
  );
};

export default Resume;
