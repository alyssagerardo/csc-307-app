// module.test.js 
import mut from './module.js'; 

// sum tests 
test('Testing sum (adding positives) -- success', () => {
   const expected = 30; 
   const got = mut.sum(12, 18); 
   expect(got).toBe(expected); 
}); 

test('Testing sum (adding negatives) -- success', () => {
   const expected = -7;
   const got = mut.sum(-5, -2); 
   expect(got).toBe(expected);
});

test('Testing sum (adding neg and pos) -- success', () => {
   const expected = 5; 
   const got = mut.sum(10, -5); 
   expect(got).toBe(expected); 
}); 

test('Testing sum (adding neg and ps) -- success', () => {
   const expected = -5; 
   const got = mut.sum(-10, 5); 
   expect(got).toBe(expected); 
});

test('Testing sum (adding zeros) -- success', () => {
   const expected = -10; 
   const got = mut.sum(-10, 0); 
   expect(got).toBe(expected); 
}); 

test('Testing sum (adding zeros) -- success', () => {
   const expected = 10; 
   const got = mut.sum(10, 0); 
   expect(got).toBe(expected); 
}); 

test('Testing sum (adding zeros) -- success', () => {
   const expected = 0;
   const got = mut.sum(0, 0); 
   expect(got).toBe(expected); 
}); 

// div tests 
test('Testing div (dividing positives) -- success', () => {
   const expected = 5;
   const got = mut.div(10, 2);
   expect(got).toBe(expected);
}); 

test('Testing div (dividing negatives) -- success', () => {
   const expected = 5;
   const got = mut.div(-10, -2);
   expect(got).toBe(expected);
}); 

test('Testing div (dividing neg and pos) -- success', () => {
   const expected = -5;
   const got = mut.div(-10, 2);
   expect(got).toBe(expected);
}); 

test('Testing div (dividing by zero with pos) -- div by zero error', () => {
   const expected = Infinity; 
   const got = mut.div(10, 0);
   expect(got).toBe(expected);
});

test('Testing div (dividing by zero with neg) -- div by zero error', () => {
   const expected = -Infinity;
   const got = mut.div(-10, 0);
   expect(got).toBe(expected);
});

test('Testing div (dividing by zero) -- div by zero error', () => {
   const expected = NaN;
   const got = mut.div(0, 0);
   expect(got).toBe(expected);
});

test('Testing div (dividing by zero with pos) -- success', () => {
   const expected = 0;
   const got = mut.div(0, 10);
   expect(got).toBe(expected);
});

test('Testing div (dividing by zero with neg) -- success', () => {
  const expected = -0;
  const got = mut.div(0, -10); 
  expect(got).toBe(expected); 
}); 

// containNumbers tests
test('Testing containNumbers (testing empty string) -- failure', () => { 
  const got = mut.containsNumbers(""); 
  expect(got).toBe(false); 
});

test('Testing containNumbers (testing string with symbols) -- failure', () => {
  const got = mut.containsNumbers("hello!");
  expect(got).toBe(false);
});

test('Testing containNumbers (testing string with char and spaces) -- failure', () => {
  const got = mut.containsNumbers("h          ");
  expect(got).toBe(false);
});

test('Testing containNumbers (testing string with space) -- failure', () => {
  const got = mut.containsNumbers(" ");
  expect(got).toBe(false);
});

test('Testing containNumbers (testing null string) -- failure', () => {
  const got = mut.containsNumbers(NaN);
  expect(got).toBe(false);
});

test('Testing containNumbers (testing string with only nums) -- success', () => {
  const got = mut.containsNumbers("123456789");
  expect(got).toBe(true);
});

test('Testing containNumbers (testing string with chars and nums) -- success', () => {
  const got = mut.containsNumbers("h8423dfjfmkf930");
  expect(got).toBe(true);
});

test('Testing containNumbers (testing string with nums and spaces) -- success', () => {
  const got = mut.containsNumbers("839 20 39751 9 938492");
  expect(got).toBe(true);
});

test('Testing containNumbers (testing string with nums, spaces, and chars) -- success', () => {
  const got = mut.containsNumbers("h 910jf 9 12jfnskfs ");
  expect(got).toBe(true);
});
