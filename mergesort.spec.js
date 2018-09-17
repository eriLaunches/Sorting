describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split ([2,5,7,1,3,20,15])).toEqual([[2,5,7,1],[3,20,15]]);
  });

});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge ([2],[5])).toEqual([2,5]);
    expect( merge ([2,5],[7,1])).toEqual([2,5,1,7]);
    expect( merge ([3,20],[15])).toEqual([3,20,15]);
  });
});

