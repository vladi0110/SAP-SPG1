import java.sql.*;

public class DatabaseConnector {

	private final String username = "java";
	private final String password = "*59EF2F4BA9DC232297F351BDBA46FBCAE49326C4";
	private final String statementText = "select * from poi";
	
	private Connection connection = null;
	private PreparedStatement statement = null;
	
	public DatabaseConnector()
	{
		try {
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/map", username, password);
		} catch (SQLException e) {
			System.out.println("Could not connect to database");
			e.printStackTrace();
		}
	}
	
	public void closeConnection()
	{
		try {
			if(!(connection.isClosed())) connection.close();
		} catch (SQLException e) {
			System.out.println("Could not close connection to database");
			e.printStackTrace();
		}
	}
	
	public ResultSet getResult()
	{
		try {
			statement = connection.prepareStatement(statementText);
			return statement.executeQuery();
		} catch (SQLException e) {
			System.err.println("Error occured while getting result from database");
			e.printStackTrace();
			return null;
		}
	}
}
