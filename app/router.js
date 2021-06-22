import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('energy', function() {
    this.route('energy-one');
    this.route('energy-two');
  });
  this.route('home-services', function() {
    this.route('hs-one');
    this.route('hs-two');
    this.route('hs-three');
  });
  this.route('help-and-support');
});

export default Router;
