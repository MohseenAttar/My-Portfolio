export const padIndex = (n) => String(n).padStart(2, '0');
export const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
