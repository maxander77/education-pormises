import GameSavingLoader from "../app";


jest.setTimeout(15000);

test('should load game saving data', async () => {
  const savingData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

  const saving = await GameSavingLoader.load();

  expect(saving).toEqual(JSON.parse(savingData));
});

test('should handle errors during parsing', async () => {
  const saving = await GameSavingLoader.load();

  try {
    saving
    expect(true).toBe(false);
  } catch (error) {
    expect(error).toMatch('Failed to load game saving');
  }
});