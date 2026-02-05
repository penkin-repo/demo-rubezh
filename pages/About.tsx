import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Users, Calendar, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900">О компании</h1>
          <p className="mt-2 text-lg text-gray-600">История успеха и принципы работы ООО Рубеж</p>
        </div>
      </div>

      {/* Main Content with Visuals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Мы строим надежные отношения с 2010 года
            </h2>
            <div className="prose prose-lg text-gray-500">
              <p className="mb-4">
                ООО «Рубеж» — это современная строительная компания, специализирующаяся на земляных работах, дорожном строительстве и аренде спецтехники. За годы работы мы зарекомендовали себя как надежный партнер для крупнейших застройщиков региона.
              </p>
              <p className="mb-4">
                В основе нашей работы лежит принцип ответственности и качества. Мы не просто предоставляем технику, мы решаем задачи клиента «под ключ», обеспечивая бесперебойную работу на объектах любой сложности.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700">
                <li>Собственная ремонтная база</li>
                <li>Штат квалифицированных механизаторов и инженеров</li>
                <li>Работаем с НДС, предоставляем полную отчетность</li>
              </ul>
            </div>
            
            <div className="mt-8">
                <Link to="/vacancies" className="inline-flex items-center px-6 py-3 border border-brand-blue text-brand-blue rounded-md font-medium hover:bg-brand-blue hover:text-white transition-colors">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Смотреть вакансии
                </Link>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 relative">
             <div className="absolute top-0 left-0 w-full h-full bg-brand-blue rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
             <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Команда ООО Рубеж" 
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
             />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-brand-dark py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <Calendar className="h-10 w-10 text-brand-cyan mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-1">14+</div>
                    <div className="text-gray-400">Лет на рынке</div>
                </div>
                <div className="text-center">
                    <Truck className="h-10 w-10 text-brand-cyan mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-1">50+</div>
                    <div className="text-gray-400">Единиц техники</div>
                </div>
                <div className="text-center">
                    <Briefcase className="h-10 w-10 text-brand-cyan mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-1">200+</div>
                    <div className="text-gray-400">Сданных объектов</div>
                </div>
                <div className="text-center">
                    <Users className="h-10 w-10 text-brand-cyan mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-1">80+</div>
                    <div className="text-gray-400">Сотрудников</div>
                </div>
            </div>
         </div>
      </div>
      
      {/* Fleet Info */}
      <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Наш автопарк</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
                  Мы регулярно обновляем нашу технику, чтобы исключить простои на ваших объектах. В нашем арсенале только проверенные бренды: CAT, Komatsu, Scania, KAMAZ.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 <img src="https://images.unsplash.com/photo-1579623639826-66f80907e543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Парк техники 1" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover" />
                 <img src="https://images.unsplash.com/photo-1626867305948-2661334c9c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Парк техники 2" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover" />
                 <img src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Парк техники 3" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-64 w-full object-cover" />
              </div>
          </div>
      </div>
    </div>
  );
};

export default About;