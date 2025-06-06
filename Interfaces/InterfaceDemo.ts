
interface Connection{
    executeUpdate(): number;
}
class OracleConnection implements Connection{
    executeUpdate(){
        console.log("Query execution function for Oracle");
        return 1;
    }
}
class SQLConnection implements Connection{
    executeUpdate(){
          console.log("Query execution function for SQL");
          return 2;
    }
}
let connection : Connection;
connection=new OracleConnection();
connection.executeUpdate();
connection=new SQLConnection();
connection.executeUpdate();