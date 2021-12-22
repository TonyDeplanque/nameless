'use strict';

/**
 * environnement service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::environnement.environnement');
