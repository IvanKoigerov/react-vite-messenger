import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'Поле обязательно',
    default: 'Некорректное значение',
  },
  string: {
    email: 'Некорректный email-адрес',
    max: ({ max, value }) => `Длина значения поля не должна превышать ${String(value).length}/${max} символов`,
    min: ({ min, value }) => `Длина значения поля не должна превышать ${String(value).length}/${min} символов`,
  },
});
