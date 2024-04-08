/* eslint-disable react/require-default-props */
import { FC } from 'react';

type TimelineProps = {
  title: string;
  startDate: string;
  endDate?: string;
  company: string;
  description?: string;
};

const Timeline: FC<TimelineProps> = ({
  title,
  startDate,
  endDate,
  company,
  description,
}) => (
  <ol className="relative ml-3 border-s border-gray-200 bg-black/90 dark:border-gray-700">
    <li className="mb-10 ms-6">
      <span className="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-secondary dark:ring-gray-900">
        <svg
          className="size-2.5 text-blue-800 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <span className="text-gray-400 dark:text-gray-500">{company}</span>
      <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {endDate ? `${startDate} - ${endDate}` : startDate}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  </ol>
);

export default Timeline;
