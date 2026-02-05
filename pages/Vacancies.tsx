import React from 'react';
import { VACANCIES, CONTACT_INFO } from '../constants';
import { Phone, CheckCircle } from 'lucide-react';

const Vacancies = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="bg-brand-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">Вакансии</h1>
          <p className="mt-4 text-xl text-gray-300">Присоединяйтесь к команде профессионалов ООО Рубеж</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="space-y-6">
            {VACANCIES.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-brand-blue">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                            <div className="flex items-center mt-2 space-x-4">
                                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                    {job.salary}
                                </span>
                                <span className="text-sm text-gray-500">Опыт: {job.experience}</span>
                            </div>
                        </div>
                        <a 
                            href={`tel:${CONTACT_INFO.phone}`}
                            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
                        >
                            <Phone className="mr-2 h-4 w-4" />
                            Позвонить
                        </a>
                    </div>
                    <p className="mt-4 text-gray-600">{job.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Мы предлагаем:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                            <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Официальное трудоустройство</div>
                            <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Своевременная выплата ЗП</div>
                            <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Спецодежда</div>
                            <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Иногородним жилье</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Не нашли подходящую вакансию?</h3>
            <p className="text-gray-600 mb-6">
                Мы всегда в поиске талантливых специалистов. Отправьте ваше резюме на почту или позвоните в отдел кадров.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <div className="text-lg font-bold text-brand-dark">{CONTACT_INFO.email}</div>
                 <div className="hidden sm:block text-gray-300">|</div>
                 <div className="text-lg font-bold text-brand-dark">{CONTACT_INFO.phone}</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;