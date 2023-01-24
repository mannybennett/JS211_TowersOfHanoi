'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop())
}

const isLegal = (startStack, endStack) => {
  if (stacks[startStack].at(-1) < stacks[endStack].at(-1) || typeof stacks[endStack][0] === "undefined") {
    return true
  } else {
    return false
  }
}

const checkForWin = () => {
  if (stacks.c[0] === 4 && stacks.c[3] === 1) {
    return true
  } else {
    return false
  }
}

const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack)
    checkForWin()
  } else {
    return console.log("Not a legal move.")
  }
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
    // Additional Unit Test #1
    it('should be able to move a block back', () => {
      towersOfHanoi('b', 'a');
      assert.deepEqual(stacks, { a: [4, 3, 2, 1], b: [], c: [] });
    });
    //
    // Additional Unit Test #2
    it('should be undefined when an empty startStack is called', () => {
      towersOfHanoi('b', 'c');
      assert.deepEqual(stacks, { a: [4, 3, 2, 1], b: [], c: [undefined] });
    });
    //
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });

  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [], c: [4, 3, 2] };
      assert.equal(checkForWin(), false);
    });
  });

  // Additional Unit Test #3
  describe('#printStacks()', () => {
    it('should print three stacks', () => {
      printStacks()
      assert.deepEqual(
      console.log("a: " + stacks.a),
      console.log("b: " + stacks.b),
      console.log("c: " + stacks.c));
    });
  });
  //

} else {

  getPrompt();

}
