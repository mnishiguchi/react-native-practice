import { Toast } from 'native-base';

export function toast(text = '', options = {}) {
  Toast.show({
    text,
    duration: 10000,
    buttonText: 'x',
    ...options
  });
}

export function successToast(text = '', options = {}) {
  toast(text, { type: 'success', ...options });
}

export function waringToast(text = '', options = {}) {
  toast(text, { type: 'warning', ...options });
}

export function dangerToast(text = '', options = {}) {
  toast(text, { type: 'danger', ...options });
}
