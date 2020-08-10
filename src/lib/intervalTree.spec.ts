import IntervalTree from './intervalTree';

describe('Interval Tree', () => {
  describe('Initialization', () => {
    it('Has a named Constructor to make a tree from tuples', () => {
      const tree = IntervalTree.fromTuples([1, 10], [3, 6]);
      expect(tree.items().length).toBe(2);
    });
  });

  describe('Intersection Utilities', () => {
    it('Implements a "common subset" utility', () => {
      const tree1: IntervalTree = IntervalTree.fromTuples([1, 10], [10, 15]);
      const tree2: IntervalTree = IntervalTree.fromTuples([3, 11], [10, 15]);
      const subset = tree1.subset(tree2); // Find common subset between 2 trees
      expect(subset.items().length).toBe(1);
      expect(subset.items()[0]).toBe([10, 15]);
    });

    it('Implements an intersection utility', () => {
      // 0:10 ----------
      // 5:15      ------------
      // RESULT    -----
      const tree1 = IntervalTree.fromTuples([0, 10], [20, 60]);
      const tree2 = IntervalTree.fromTuples([5, 15], [30, 40]);
      expect(tree1.intersectionWith(tree2).items()).toBe([
        [5, 10],
        [30, 40],
      ]);
    });
  });
});
