const test = require('tape');
const config = require('../index');
const stylelint = require('stylelint');

test('config: valid css', (t) => {
  t.plan(2);

  const css = `
    .container {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      width: 30em;
    }
  `;

  const lint = stylelint.lint({
    code: css,
    config,
  });

  lint
    .then((data) => {
      {
        const should = 'Should not error linting valid css';
        const actual = data.errored;
        const expected = false;

        t.equal(actual, expected, should);
      }

      {
        const should = 'Should not flag for warnings linting valid css';
        const actual = data.results[0].warnings.length;
        const expected = 0;

        t.equal(actual, expected, should);
      }

      t.end();
    })
    .catch(err => t.end(err));
});

test('config: invalid css', (t) => {
  t.plan(2);

  const css = `
    .container {
      width: 30em;
      flex-flow: row nowrap;
      display: flex;
      justify-content: space-around;
    }
  `;

  const lint = stylelint.lint({
    code: css,
    config,
  });

  lint
    .then((data) => {
      {
        const should = 'Should error linting invalid css';
        const actual = data.errored;
        const expected = true;

        t.equal(actual, expected, should);
      }

      {
        const should = 'Should flag for warnings linting invalid css';
        const actual = data.results[0].warnings.length;
        const expected = 2;

        t.equal(actual, expected, should);
      }

      t.end();
    })
    .catch(err => t.end(err));
});
