import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Insert user Test', () => {
    test('Should insert the user in database', async () => {
        console.log(jest.fn());
    });
});