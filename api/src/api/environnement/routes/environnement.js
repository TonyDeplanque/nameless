'use strict';

/**
 * environnement router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::environnement.environnement');
