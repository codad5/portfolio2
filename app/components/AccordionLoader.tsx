'use client';

import dynamic from 'next/dynamic';

const AccordionLoader = dynamic(
  () => import('../helpers/accordion'),
  { ssr: false }
);

export default function ClientAccordionLoader() {
  return <AccordionLoader />;
}
