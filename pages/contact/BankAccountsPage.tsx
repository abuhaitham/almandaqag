

import React from 'react';
// Fix: Corrected import paths to be relative from subdirectory.
import PageHeader from '../../components/PageHeader';
import { BANK_ACCOUNTS } from '../../constants';

const BankAccountsPage: React.FC = () => {
  return (
    <>
      <PageHeader title="الحسابات البنكية" breadcrumb="تواصل معنا / الحسابات البنكية" />
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                    حساباتنا البنكية
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    يمكنكم دعم برامجنا ومشاريعنا عبر التبرع المباشر لحسابات الجمعية الرسمية.
                </p>
            </div>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            {BANK_ACCOUNTS.map((account, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">{account.bankName}</h3>
                <div>
                    <p className="text-gray-600">رقم الحساب</p>
                    <p className="text-lg font-semibold text-gray-800 tracking-wider">{account.accountNumber}</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-600">رقم الآيبان</p>
                    <p className="text-lg font-semibold text-gray-800 tracking-wider">{account.iban}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BankAccountsPage;
