import GameSavingLoader from "../app";

jest.setTimeout(15000);

test('should load game saving data', async () => {
  const savingData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

  const saving = await GameSavingLoader.load();

  expect(saving).toEqual(JSON.parse(savingData));
});
