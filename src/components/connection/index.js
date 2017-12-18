import Connection from 'exist-query';

const XML_MIME_TYPE = 'application/xml';
const PARSER_ERROR_NODE = 'parsererror';

const { xmlParser } = (function setup() {
    return {
        xmlParser: new DOMParser()
    };
})();

let connection;

export function connect(connectionOptions) {
    connection = Connection(connectionOptions);
}

export function executeXQuery(xquery) {
    return connection.query(xquery)
        .then(response => response.text())
        .then(xmlString => xmlParser.parseFromString(xmlString, XML_MIME_TYPE))
        .then(tree => {
            if (tree.documentElement.nodeName == PARSER_ERROR_NODE) {
                throw new Error(tree.documentElement.text);
            } else {
                return tree;
            }
        });
};
