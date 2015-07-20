import java.sql.*;

public class Response {

	private DatabaseConnector connector = null;
	private CallableStatement statement = null;
	
	public Response(DatabaseConnector connector)
	{
		setConnector(connector);
	}
	
	public DatabaseConnector getConnector() {
		return connector;
	}

	public void setConnector(DatabaseConnector connector) {
		this.connector = connector;
	}
	
	public ResultSet getAllPoi()
	{
		try {
			statement = connector.getConnection().prepareCall("{call get_all_poi()}");
			return statement.executeQuery();
		} catch (SQLException e) {
			System.err.println("Error occured while getting all poi");
			return null;
		}
	}
	
	public ResultSet getPoiByCoordinates(int latitude, int longitide)
	{
		try {
			statement = connector.getConnection().prepareCall("{call get_poi_by_coordinates(?, ?)}");
			statement.setInt(1, latitude);
			statement.setInt(2, longitide);
			return statement.executeQuery();
		} catch (SQLException e) {
			System.err.println("Error occured while getting poi specified by coordinates");
			return null;
		}
	}
	
	public ResultSet getPoiByName(String poiName)
	{
		try {
			statement = connector.getConnection().prepareCall("{call get_poi_by_name(?)}");
			statement.setString(1, poiName);
			return statement.executeQuery();
		} catch (SQLException e) {
			System.err.println("Error occured while getting poi specified by name");
			return null;
		}
	}
	
	public ResultSet getPoiByType(String poiType)
	{
		try {
			statement = connector.getConnection().prepareCall("{call get_poi_by_type(?)}");
			statement.setString(1, poiType);
			return statement.executeQuery();
		} catch (SQLException e) {
			System.err.println("Error occured while getting poi specified by type");
			return null;
		}
	}
	
	public ResultSet getPoiByAddress(String poiAddress)
	{
		try {
			statement = connector.getConnection().prepareCall("{call get_poi_by_address(?)}");
			statement.setString(1, poiAddress);
			return statement.executeQuery();
		} catch (SQLException e) {
			System.err.println("Error occured while getting poi specified by address");
			return null;
		}
	}
}
