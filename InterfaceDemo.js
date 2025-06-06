var OracleConnection = /** @class */ (function () {
    function OracleConnection() {
    }
    OracleConnection.prototype.executeUpdate = function () {
        console.log("Query execution function for Oracle");
        return 1;
    };
    return OracleConnection;
}());
var SQLConnection = /** @class */ (function () {
    function SQLConnection() {
    }
    SQLConnection.prototype.executeUpdate = function () {
        console.log("Query execution function SQL");
        return 2;
    };
    return SQLConnection;
}());
var connection;
connection = new OracleConnection();
connection.executeUpdate();
connection = new SQLConnection();
connection.executeUpdate();
