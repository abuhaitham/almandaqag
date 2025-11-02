import React from 'react';
import PageHeader from '../../components/PageHeader';
import comprehensiveModelPdf from '../../assets/docs/النموذج-الشامل-تحديث-6.pdf';

const ComprehensiveModelPage: React.FC = () => {
  return (
    <>
      <PageHeader title="النموذج الشامل للجمعيات" breadcrumb="عن الجمعية / النموذج الشامل للجمعيات" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">النموذج الشامل للجمعيات</h2>
            <div className="w-full h-[80vh]">
              <iframe
                src={comprehensiveModelPdf}
                title="النموذج الشامل للجمعيات"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
            </div>
             <div className="text-center mt-6">
                <a
                    href={comprehensiveModelPdf}
                    download="النموذج-الشامل-للجمعيات.pdf"
                    className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-secondary transition-colors"
                >
                    تحميل النموذج
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComprehensiveModelPage;
