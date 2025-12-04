const Sequencer = require('@jest/test-sequencer').default;

class ShardTestSequencer extends Sequencer {
   
  sort(tests) {
    if (process.env.CI_SHARD) {
      const [current, total] = process.env.CI_SHARD.split('/').map((v) => parseInt(v, 10));

      const copyTests = Array.from(tests);
      return copyTests
        .sort((testA, testB) => (testA.path > testB.path ? 1 : -1))
        .filter((test, index) => index % total === current - 1);
    }

    return tests;
  }
}

module.exports = ShardTestSequencer;
