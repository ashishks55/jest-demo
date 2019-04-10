const functions = require('./functions');

test('add 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('add 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// 1. toBeNull matches only nulll
// 2. toBeUndefined matches only undefined
// 3. toBeDefined is opposite of toBeUndefined
// 4. toBeTruthy matches anything that if statement treats as true
// 5. toBeFalsy  matches anything that if statement treats as false

test('should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual - toBe wont work with objects arrays etc
test('User should be Ashish Singh Object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Ashish',
        lastName: 'Singh'
    });
});

// Less than and greater than
// 1. toBeLessThan
// 2. toBeLessThanOrEqual
// 3. toBeGreaterThan
// 4. toBeGreaterThanOrEqual
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// Regex
// 1. toMatch = match regex expression
test('There is no I in Team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
// 1. toContain - check value in array
test('Admin should be in usernames', () => {
    usernames = ['abc', 'admin', 'xyz'];
    expect(usernames).toContain('admin');
});


// Working with async data
test('User fetch name should be Leanne Graham', () => {
 expect.assertions(1);
 return functions.fetchUser().then(data => {
     expect(data.name).toEqual('Leanne Graham');
 })
});

//  async await
test('User fetch name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});