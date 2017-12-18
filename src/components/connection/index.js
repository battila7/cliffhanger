// REFACTOR THIS, SERIOUSLY
import Connection from 'exist-query';

const XML_MIME_TYPE = 'application/xml';
const PARSER_ERROR_PROLOG = 'parsererror';

const { connection, xmlParser } = (function setup() {
    const connectionOptions = {
        uri: 'http://.ngrok.io/exist',
        credentials: {
            username: 'admin',
            password: ''
        }
    };

    return {
        connection: Connection(connectionOptions),
        xmlParser: new DOMParser()
    };
})();

export default function executeXQuery(xquery) {
    return connection.query(xquery)
        .then(response => response.text())
        .then(xmlString => xmlParser.parseFromString(xmlString, XML_MIME_TYPE))
        .then(tree => {
            if (tree.documentElement.nodeName == 'parsererror') {
                throw new Error(tree.documentElement.text);
            } else {
                return tree;
            }
        });
};
