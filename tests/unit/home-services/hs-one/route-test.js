import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home-services/hs-one', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home-services/hs-one');
    assert.ok(route);
  });
});
