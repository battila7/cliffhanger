// REFACTOR THIS, SERIOUSLY
import Connection from 'exist-query';

const connectionOptions = {
    uri: 'http://wot/exist',
    credentials: {
        username: 'admin',
        password: ''
    }
};

const connection = Connection(connectionOptions);

export default function executeXQuery(xquery) {
    return connection.query(xquery);
};
