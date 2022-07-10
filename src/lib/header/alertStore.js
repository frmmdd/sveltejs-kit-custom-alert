import { writable } from 'svelte/store';

export const ALERT_TYPE = {
	DANGER: 'DANGER',
	INFO: 'INFO',
	SUCCESS: 'SUCCESS'
};

Object.freeze();

export const alertMessage = writable('Something happen');
export const alertType = writable('');

export const displayALert = (message, type = ALERT_TYPE.INFO, resetTime) => {
	alertMessage.set(message);
	alertType.set(type);

	if (resetTime) {
		setTimeout(() => {
			alertMessage.set();
		}, resetTime);
	}
};
