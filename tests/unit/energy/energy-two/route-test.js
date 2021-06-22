import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | energy/energy-two', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:energy/energy-two');
    assert.ok(route);
  });
});
