import { Project, Equipment, Vacancy, Service, ContactInfo } from './types';

export const COMPANY_NAME = "ООО Рубеж";

export const CONTACT_INFO: ContactInfo = {
  address: "г. Новосибирск, ул. Строителей, д. 45, оф. 201",
  phone: "+7 (383) 200-00-00",
  email: "info@rubezh-stroy.ru",
  schedule: "Пн-Пт: 09:00 - 18:00",
  coords: { lat: 55.0084, lng: 82.9357 }
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Земляные работы',
    description: 'Разработка котлованов, траншей, вертикальная планировка участков любой сложности.',
    icon: 'shovel'
  },
  {
    id: '2',
    title: 'Аренда спецтехники',
    description: 'Собственный парк современной строительной техники для любых задач.',
    icon: 'truck'
  },
  {
    id: '3',
    title: 'Дорожное строительство',
    description: 'Укладка асфальта, строительство временных и постоянных дорог, благоустройство.',
    icon: 'road'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ЖК "Северное Сияние"',
    location: 'г. Новосибирск',
    description: 'Подготовка котлована и нулевой цикл строительства.',
    year: '2023',
    imageUrl: 'https://picsum.photos/id/44/800/600'
  },
  {
    id: '2',
    title: 'Логистический центр "Вектор"',
    location: 'Новосибирская область',
    description: 'Благоустройство территории 5 гектар, асфальтирование проездов.',
    year: '2022',
    imageUrl: 'https://picsum.photos/id/184/800/600'
  },
  {
    id: '3',
    title: 'Трасса М-51 (Участок 4)',
    location: 'Региональное значение',
    description: 'Реконструкция дорожного полотна, отсыпка обочин.',
    year: '2023',
    imageUrl: 'https://picsum.photos/id/229/800/600'
  },
  {
    id: '4',
    title: 'ТЦ "Галерея"',
    location: 'Центральный район',
    description: 'Демонтаж старых конструкций и вывоз строительного мусора.',
    year: '2021',
    imageUrl: 'https://picsum.photos/id/193/800/600'
  }
];

export const EQUIPMENT: Equipment[] = [
  {
    id: '1',
    name: 'Экскаватор гусеничный CAT 320',
    category: 'Экскаваторы',
    price: 'от 2500 ₽/час',
    imageUrl: 'https://picsum.photos/id/635/600/400',
    specs: ['Объем ковша: 1.2 м³', 'Глубина копания: 6.7 м', 'Масса: 22 т']
  },
  {
    id: '2',
    name: 'Самосвал KAMAZ 6520',
    category: 'Самосвалы',
    price: 'от 1800 ₽/час',
    imageUrl: 'https://picsum.photos/id/646/600/400',
    specs: ['Грузоподъемность: 20 т', 'Объем кузова: 20 м³', 'Колесная формула: 6х4']
  },
  {
    id: '3',
    name: 'Бульдозер Shantui SD16',
    category: 'Бульдозеры',
    price: 'от 3000 ₽/час',
    imageUrl: 'https://picsum.photos/id/558/600/400',
    specs: ['Мощность: 160 л.с.', 'Отвал: 3.4 м³', 'Масса: 17 т']
  },
  {
    id: '4',
    name: 'Автокран Ивановец 25т',
    category: 'Краны',
    price: 'от 2200 ₽/час',
    imageUrl: 'https://picsum.photos/id/400/600/400',
    specs: ['Грузоподъемность: 25 т', 'Вылет стрелы: 21 м', 'Вездеход']
  }
];

export const VACANCIES: Vacancy[] = [
  {
    id: '1',
    title: 'Водитель самосвала (Категория С)',
    salary: 'от 80 000 ₽',
    experience: 'от 3 лет',
    description: 'Работа на новых автомобилях КАМАЗ, Shacman. Вахтовый метод или полный день.'
  },
  {
    id: '2',
    title: 'Машинист экскаватора',
    salary: 'от 100 000 ₽',
    experience: 'от 5 лет',
    description: 'Управление гусеничным экскаватором, выполнение планировочных работ.'
  },
  {
    id: '3',
    title: 'Инженер ПТО',
    salary: 'от 70 000 ₽',
    experience: 'от 1 года',
    description: 'Ведение исполнительной документации, составление ППР, сдача объемов заказчику.'
  }
];