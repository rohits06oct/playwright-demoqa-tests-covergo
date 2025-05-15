const { test, expect, request } = require('@playwright/test');

test.describe('Books API Tests', () => {
  const baseUrl = 'https://demoqa.com/BookStore/v1';
  const accountUrl = 'https://demoqa.com/Account/v1';

  test('Get list of books', async () => {
    const apiContext = await request.newContext();
    const res = await apiContext.get(`${baseUrl}/Books`);
    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data.books.length).toBeGreaterThan(0);
  });

  test('Get book by ISBN', async () => {
    const apiContext = await request.newContext();
    const res = await apiContext.get(`${baseUrl}/Book?ISBN=9781491950296`);
    expect(res.status()).toBe(200);
    const book = await res.json();
    expect(book.title).toBe('Programming JavaScript Applications');
  });

  test('Create new user', async () => {
  const uniqueUsername = `rohits_${Date.now()}`;
  const apiContext = await request.newContext();
  const res = await apiContext.post(`${accountUrl}/User`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      userName: uniqueUsername,
      password: 'Test@123'
    }
  });
  expect(res.status()).toBe(201);
  const data = await res.json();
  expect(data).toHaveProperty('userID');
  expect(data).toHaveProperty('username', uniqueUsername);
  console.log('User created:', data);
  });

});
