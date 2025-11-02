

import React from 'react';
// Fix: Corrected import paths to be relative.
import PageHeader from '../components/PageHeader';
import Partners from '../components/Partners';

const PartnersPage: React.FC = () => {
  return (
    <>
      <PageHeader title="شركاؤنا" breadcrumb="عن الجمعية / شركاؤنا" />
      <Partners />
    </>
  );
};

export default PartnersPage;
