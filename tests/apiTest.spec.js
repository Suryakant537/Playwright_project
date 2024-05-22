import {test} from '@playwright/test'
import {expect} from '@playwright/test'


test('should create a bug report', async ({ request }) => {
  //get the response from the API
  const res = await request.get(`/todos/1`);
  //Verify the status code (200)
  expect(res.status(), 200);
  //Store the response in JSON format
  const responseData = await res.json();
  //Assert the title from response
  expect(responseData).toEqual(expect.objectContaining({title: 'delectus aut autem',}));
});