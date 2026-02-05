import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield, MapPin, ChevronDown, ChevronUp, MessageCircle, Phone, Mail, Send, X } from 'lucide-react';
import { SERVICES, PROJECTS, CONTACT_INFO } from '../constants';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
            >
                <span className="text-lg font-medium text-gray-900">{question}</span>
                {isOpen ? <ChevronUp className="h-5 w-5 text-brand-blue" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
            </button>
            {isOpen && (
                <div className="pb-4 text-gray-600 animate-fade-in">
                    {answer}
                </div>
            )}
        </div>
    );
};

const QuickContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm relative overflow-hidden">
                <div className="bg-brand-blue p-4 flex justify-between items-center">
                    <h3 className="text-white font-bold text-lg">Связаться с нами</h3>
                    <button onClick={onClose} className="text-white hover:bg-blue-600 rounded-full p-1 transition-colors">
                        <X className="h-5 w-5" />
                    </button>
                </div>
                <div className="p-6 space-y-4">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="bg-green-100 p-2 rounded-full mr-4 group-hover:bg-green-200">
                            <Phone className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500">Позвонить</span>
                            <span className="block font-medium text-gray-900">{CONTACT_INFO.phone}</span>
                        </div>
                    </a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="bg-orange-100 p-2 rounded-full mr-4 group-hover:bg-orange-200">
                            <Mail className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500">Написать Email</span>
                            <span className="block font-medium text-gray-900">{CONTACT_INFO.email}</span>
                        </div>
                    </a>
                    <a href="https://t.me/rubezh_support" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                         <div className="bg-blue-100 p-2 rounded-full mr-4 group-hover:bg-blue-200">
                            <Send className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <span className="block text-sm text-gray-500">Telegram</span>
                            <span className="block font-medium text-gray-900">@rubezh_support</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const FAQS = [
      { q: "Работаете ли вы с НДС?", a: "Да, мы работаем с юридическими лицами по договору с НДС (20%) и предоставляем полный пакет закрывающих документов." },
      { q: "Как быстро вы можете подать технику?", a: "При наличии свободной техники подача осуществляется в течение 2-4 часов после подтверждения заявки по городу Новосибирску." },
      { q: "Минимальный срок аренды?", a: "Минимальный срок аренды большинства единиц спецтехники составляет 4 часа (половина смены) + 1 час подачи." },
      { q: "Работаете ли вы в выходные и праздники?", a: "Да, мы работаем круглосуточно и без выходных, но заявку лучше оформлять заранее в рабочее время офиса." },
      { q: "Возможна ли работа в других регионах?", a: "Мы работаем преимущественно по Новосибирской области, но для крупных объектов (от 1 месяца работы) готовы рассмотреть командировки в соседние регионы." }
  ];

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <div className="relative bg-brand-dark h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Строительная площадка"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Строим будущее <br />
              <span className="text-brand-cyan">надежно и в срок</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300 mb-8 leading-relaxed">
              Полный комплекс земляных и строительных работ. Собственный парк спецтехники. Работаем с 2010 года по всей области.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/equipment" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue hover:bg-blue-600 transition-colors md:text-lg"
              >
                Аренда техники
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-colors md:text-lg"
              >
                Наши объекты
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <Shield className="h-8 w-8 text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Надежность</h3>
                    <p className="text-gray-600">Все работы выполняются по ГОСТ и СНиП. Гарантия на выполненные работы.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-cyan-100 p-4 rounded-full mb-4">
                        <Clock className="h-8 w-8 text-brand-cyan" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Соблюдение сроков</h3>
                    <p className="text-gray-600">Работаем 24/7. Соблюдаем график производства работ. Быстрая подача техники.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-green-100 p-4 rounded-full mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Собственный парк</h3>
                    <p className="text-gray-600">Более 50 единиц техники в собственности. Нет переплат посредникам.</p>
                </div>
            </div>
        </div>
      </div>

      {/* RECENT PROJECTS SECTION */}
      <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-end mb-10">
                  <div>
                      <h2 className="text-3xl font-extrabold text-gray-900">Последние проекты</h2>
                      <p className="mt-2 text-gray-600">Избранные примеры наших работ</p>
                  </div>
                  <Link to="/projects" className="hidden sm:flex items-center text-brand-blue font-medium hover:text-blue-700">
                      Все проекты <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {PROJECTS.slice(0, 3).map((project) => (
                      <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                          <div className="h-48 relative overflow-hidden">
                              <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-0 right-0 bg-brand-cyan text-brand-dark px-3 py-1 text-sm font-bold rounded-bl-lg">
                                  {project.year}
                              </div>
                          </div>
                          <div className="p-5">
                              <h3 className="font-bold text-lg text-gray-900 mb-2 truncate">{project.title}</h3>
                              <div className="flex items-center text-gray-500 text-sm mb-3">
                                  <MapPin className="h-4 w-4 mr-1 text-brand-blue" />
                                  {project.location}
                              </div>
                              <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
              
              <div className="mt-8 text-center sm:hidden">
                  <Link to="/projects" className="inline-flex items-center text-brand-blue font-medium hover:text-blue-700">
                      Смотреть все работы <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
              </div>
          </div>
      </div>

      {/* About Teaser */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-brand-blue font-semibold tracking-wide uppercase">Услуги</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Что мы предлагаем
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-gray-50 border border-gray-100 overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900 truncate mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Частые вопросы</h2>
              <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
                  {FAQS.map((faq, index) => (
                      <FAQItem key={index} question={faq.q} answer={faq.a} />
                  ))}
              </div>
          </div>
      </div>

      {/* QUICK CONTACT FLOATING BUTTON */}
      <div className="fixed bottom-8 right-8 z-40">
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-brand-blue hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            aria-label="Связаться с нами"
          >
              <MessageCircle className="h-8 w-8" />
          </button>
      </div>

      {/* MODAL */}
      <QuickContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default Home;