'use strict';

/**
 * event-schedule service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-schedule.event-schedule');
