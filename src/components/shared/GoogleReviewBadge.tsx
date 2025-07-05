// src/components/shared/GoogleReviewBadge.tsx
'use client'

import { useEffect } from 'react';

export default function GoogleReviewBadge() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-0d0c94b2-2da1-4fcb-ade7-1827253f201b"
      data-elfsight-app-lazy
    />
  );
}
