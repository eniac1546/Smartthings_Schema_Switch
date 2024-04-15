'use strict';

const connector = require('./connector')

exports.handler = async (evt, context) => {
	await connector.handleLambdaCallback(evt, context);
};
