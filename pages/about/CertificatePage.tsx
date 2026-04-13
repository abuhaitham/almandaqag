import React from 'react';
import PageHeader from '../../components/PageHeader';

const CertificatePage: React.FC = () => {
  const certificatePDF = '/assets/docs/شهادة-التسجيل-الجمعية-الزراعية-بالمندق.pdf';
  
  return (
    <>
      <PageHeader title="شهادة التسجيل" breadcrumb="عن الجمعية / شهادة التسجيل" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              شهادة تسجيل الجمعية
            </h2>
            <div className="w-full h-[80vh]">
              <iframe
                src={certificatePDF}
                title="شهادة تسجيل الجمعية"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
            </div>
            <div className="text-center mt-6">
                <a
                    href={certificatePDF}
                    download="شهادة-تسجيل-الجمعية-الزراعية-بالمندق.pdf"
                    className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-secondary transition-colors"
                >
                    تحميل شهادة التسجيل
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificatePage;