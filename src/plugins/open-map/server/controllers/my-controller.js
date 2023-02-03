'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('open-map')
      .service('myService')
      .getWelcomeMessage();
  },
});
