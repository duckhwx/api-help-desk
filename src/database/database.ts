import { createConnection } from 'typeorm';

class database {
    async connection () {
        return createConnection();
    }
}

export default new database()