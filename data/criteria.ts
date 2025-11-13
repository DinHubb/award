import type { Criterion } from '~/composables/useCriteria'

export const criteria: Criterion[] = [
  // Критерии для мобильных операторов
  {
    id: '1',
    label_tj: 'Сифати алоқа',
    label_ru: 'Качество связи',
    category_id: '1',
  },
  {
    id: '2',
    label_tj: 'Нархи хидматрасонӣ',
    label_ru: 'Стоимость услуг',
    category_id: '1',
  },
  {
    id: '3',
    label_tj: 'Хидматрасонии муштариён',
    label_ru: 'Обслуживание клиентов',
    category_id: '1',
  },
  {
    id: '4',
    label_tj: 'Пӯшиши шабака',
    label_ru: 'Покрытие сети',
    category_id: '1',
  },
  {
    id: '5',
    label_tj: 'Тезии интернет мобилӣ',
    label_ru: 'Скорость мобильного интернета',
    category_id: '1',
  },

  // Критерии для интернет-провайдеров
  {
    id: '6',
    label_tj: 'Тезии интернет',
    label_ru: 'Скорость интернета',
    category_id: '2',
  },
  {
    id: '7',
    label_tj: 'Собиткории алоқа',
    label_ru: 'Стабильность соединения',
    category_id: '2',
  },
  {
    id: '8',
    label_tj: 'Нархи хидматрасонӣ',
    label_ru: 'Стоимость услуг',
    category_id: '2',
  },
  {
    id: '9',
    label_tj: 'Дастгирии техникӣ',
    label_ru: 'Техническая поддержка',
    category_id: '2',
  },
  {
    id: '10',
    label_tj: 'Насби таҷҳизот',
    label_ru: 'Установка оборудования',
    category_id: '2',
  },
]
