'use strict';

/**
 * event-schedule router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::event-schedule.event-schedule');
