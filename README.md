setup-referee-sinon
===================

Provides ready-made test setups with referee and sinon. Optionally provides a global, synchronous “define” function to for AMD module integration.

Availaible Modules
------------------

All modules set up referee to use the `formatio` formatting library for nicely formatted objects in exception messages.
They also add the assertions from sinon to referee (from the `referee-sinon` module).

- `require('setup-referee-sinon')` just provides the basic setup and exports `referee` and `sinon` properties.

- `require('setup-referee-sinon/globals')` additionally creates `referee`, `assert`, `refute`, `expect` and `sinon` as global variables.

- `require('setup-referee-sinon/amd')` does the basic setup and creates a global synchronous `define` function that hooks into node’s `require`, allowing to `require` AMD modules.
  It also defines “referee”, “assert”, “refute”, “expect” and “sinon” AMD modules for usage in tests.

- `require('setup-referee-sinon/amd-globals')` additionaly creates globals.
