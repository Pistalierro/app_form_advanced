import {User} from './user';

export const USER: User = new User(1, null, null, null, null, null, null);

export const FORM_LABELS = {
  name: 'Логин:',
  password: 'Пароль:',
  email: 'Email:',
  age: 'Возраст:',
  site: 'Сайт:',
  role: 'Роль:'
};
export const FORM_PLACEHOLDERS = {
  name: 'Введите логин...',
  password: 'Введите пароль...',
  email: 'Укажите адрес электронной почты...',
  age: 'Укажите ваш возраст...',
  site: 'Укажите сайт...',
  role: 'Выберите роль из списка...'
};
