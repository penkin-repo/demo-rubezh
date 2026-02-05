import React, { useState } from 'react';
import { EQUIPMENT } from '../constants';
import { Check, Truck } from 'lucide-react';

const EquipmentPage = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<string>('');
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const scrollToForm = (equipName: string) => {
    setSelectedEquipment(equipName);
    const formElement = document.getElementById('order-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation of form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
    
    // In a real app: send data to API/Google Sheets here
    console.log("Form submitted for", selectedEquipment);
    (e.target as HTMLFormElement).reset();
    setSelectedEquipment('');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Аренда спецтехники</h1>
          <p className="mt-2 text-lg text-gray-600">Современная техника с опытными операторами</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {EQUIPMENT.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="h-48 relative">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                   {item.price}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{item.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.name}</h3>
                    <ul className="space-y-2 mb-6">
                    {item.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                        {spec}
                        </li>
                    ))}
                    </ul>
                </div>
                <button 
                  onClick={() => scrollToForm(item.name)}
                  className="w-full mt-4 bg-gray-900 text-white py-2 px-4 rounded hover:bg-brand-blue transition-colors flex items-center justify-center gap-2"
                >
                  <Truck className="w-4 h-4" />
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Form Section */}
        <div id="order-form" className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="bg-brand-dark py-6 px-8">
             <h2 className="text-2xl font-bold text-white">Оставить заявку на технику</h2>
             <p className="text-gray-400">Менеджер свяжется с вами в течение 15 минут для уточнения деталей.</p>
          </div>
          <div className="p-8">
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                 <div className="flex justify-center mb-4">
                     <div className="bg-green-100 rounded-full p-3">
                        <Check className="h-8 w-8 text-green-600" />
                     </div>
                 </div>
                 <h3 className="text-xl font-bold mb-2">Заявка успешно отправлена!</h3>
                 <p>Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ваше имя</label>
                    <input type="text" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-blue focus:border-brand-blue" placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Телефон</label>
                    <input type="tel" id="phone" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-blue focus:border-brand-blue" placeholder="+7 (999) 000-00-00" />
                  </div>
                </div>
                <div>
                   <label htmlFor="equipment" className="block text-sm font-medium text-gray-700">Интересующая техника</label>
                   <select 
                      id="equipment" 
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-blue focus:border-brand-blue"
                      value={selectedEquipment}
                      onChange={(e) => setSelectedEquipment(e.target.value)}
                   >
                     <option value="">Выберите технику или опишите задачу</option>
                     {EQUIPMENT.map(e => (
                         <option key={e.id} value={e.name}>{e.name}</option>
                     ))}
                     <option value="other">Другое / Консультация</option>
                   </select>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Комментарий (срок аренды, адрес)</label>
                  <textarea id="comment" rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-blue focus:border-brand-blue"></textarea>
                </div>
                <div className="flex items-center">
                    <input id="agreement" type="checkbox" required className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-300 rounded" />
                    <label htmlFor="agreement" className="ml-2 block text-sm text-gray-500">
                        Согласен на обработку персональных данных
                    </label>
                </div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue">
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPage;