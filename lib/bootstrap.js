import _ from 'lodash';

export function bootstrap() {
	console.log("bootstrap executed")

	_.each([1, 2, 3], alert);
}
