import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contacts = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-100 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Контакты</h1>
          <p className="mt-2 text-lg text-gray-600">Свяжитесь с нами любым удобным способом</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Реквизиты и офис</h2>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
               <div className="flex items-start">
                  <div className="bg-brand-blue p-3 rounded-lg mr-4">
                     <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900">Адрес офиса</h3>
                     <p className="text-gray-600 mt-1">{CONTACT_INFO.address}</p>
                  </div>
               </div>

               <div className="flex items-start">
                  <div className="bg-brand-blue p-3 rounded-lg mr-4">
                     <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900">Телефоны</h3>
                     <p className="text-gray-600 mt-1">Приемная: {CONTACT_INFO.phone}</p>
                     <p className="text-gray-600">Отдел аренды: +7 (383) 200-00-01</p>
                     <p className="text-gray-600">Бухгалтерия: +7 (383) 200-00-02</p>
                  </div>
               </div>

               <div className="flex items-start">
                  <div className="bg-brand-blue p-3 rounded-lg mr-4">
                     <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900">Email</h3>
                     <p className="text-gray-600 mt-1">{CONTACT_INFO.email}</p>
                  </div>
               </div>
               
               <div className="flex items-start">
                  <div className="bg-brand-blue p-3 rounded-lg mr-4">
                     <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900">Режим работы</h3>
                     <p className="text-gray-600 mt-1">{CONTACT_INFO.schedule}</p>
                     <p className="text-gray-500 text-sm">Техника работает круглосуточно</p>
                  </div>
               </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Юридическая информация</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                        <span className="block text-gray-400">ИНН</span> 5400000000
                    </div>
                    <div>
                        <span className="block text-gray-400">КПП</span> 540001001
                    </div>
                    <div>
                        <span className="block text-gray-400">ОГРН</span> 1105400000000
                    </div>
                    <div>
                         <span className="block text-gray-400">Банк</span> ПАО Сбербанк
                    </div>
                </div>
            </div>
          </div>

          {/* Map (Placeholder for implementation) */}
          <div className="h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-md relative">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.6481977717467!2d82.9357!3d55.0084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDAwJzMwLjIiTiA4MsKwNTYnMDguNSJF!5e0!3m2!1sen!2sru!4v1620000000000!5m2!1sen!2sru" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
            ></iframe>
            {/* Overlay just to make it look nicer if iframe fails or blocks in some previews */}
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs pointer-events-none">
                <p className="text-sm font-bold text-gray-900">Офис ООО Рубеж</p>
                <p className="text-xs text-gray-500">Ждем вас на кофе и обсуждение проектов</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contacts;