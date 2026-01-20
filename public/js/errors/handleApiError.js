import { resolveErrorMessage } from './resolveErrorMessage.js';
import { showToast } from '../toast.js';

export function handleApiError(errorCode, type = 'error') {
  const message = resolveErrorMessage(errorCode);

  showToast(message, type);
}