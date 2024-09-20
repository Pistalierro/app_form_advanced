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

export const FORM_SUCCESS = 'Принято!';

export const FORM_ERRORS = {
  name: '',
  password: '',
  email: '',
  age: '',
  site: '',
  role: ''
};

export const FORM_VALIDATION_MESSAGES = {
  name: {
    required: 'Имя обязательно',
    minlength: 'Имя должно содержать не менее 3 символов',
    maxlength: 'Имя должно содержать не более 15 символов',
  },
  password: {
    required: 'Пароль обязателен',
    minlength: 'Пароль должен содержать не менее 7 символов',
    maxlength: 'Пароль должен содержать не более 25 символов',
  },
  email: {
    required: 'Email обязателен',
    emailValidator: 'Неверный формат электронной почты',
  },
  age: {
    required: 'Возраст обязателен',
    rangeValidator: 'Значение должно быть числом в диапазоне 1...122',
    minRange: 'Значение меньше 1',
    maxRange: 'Значение больше 122',
  },
  site: {
    required: 'Сайт обязателен',

  },
  role: {
    required: 'Роль обязательна',
  }
};
