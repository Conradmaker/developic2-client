export function setCookie(name: string, value: string, exp = 1): void {
  if (!document) return;
  const date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

export function getCookie(name: string): string | null {
  if (!document) return null;
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
}

export function deleteCookie(name: string): void {
  if (!document) return;
  document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}
