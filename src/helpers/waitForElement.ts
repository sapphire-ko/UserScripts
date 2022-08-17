import { sleep } from '@sapphire-sh/utils';

export const waitForElement = async (selector: string) => {
	while (true) {
		const e = document.querySelectorAll(selector);
		if (e.length > 0) {
			return e;
		}
		await sleep(100);
	}
};
