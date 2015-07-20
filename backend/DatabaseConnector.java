import java.sql.*;

public class DatabaseConnector {

	private Connection connection = null;
	private final String username = "username";//the username and password will be desided when
	private final String password = "password";//the final version of the database is ready
	
	public DatabaseConnector()
	{
		try {
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/sap_web_test", username, password);
		} catch (SQLException e) {
			System.out.println("Could not connect to database");
		}
		System.out.println("User is connected to database");
	}
	
	public void closeConnection()
	{
		try {
			if(!(connection.isClosed())) connection.close();
		} catch (SQLException e) {
			System.out.println("Could not close connection to database");
		}
	}
	
	public Connection getConnection()
	{
		return this.connection;
	}
}
