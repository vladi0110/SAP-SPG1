import java.sql.*;

public class Request {

	private DatabaseConnector connector = null;
	private CallableStatement statement = null;
	
	public Request(DatabaseConnector connector)
	{
		setConnector(connector);
	}
	
	public DatabaseConnector getConnector() {
		return connector;
	}

	public void setConnector(DatabaseConnector connector) {
		this.connector = connector;
	}

	public void addPoi(String poiName, String ownerName, String poiType, int latitude, int longitude, String poiAddress, String poiKey)
	{
		try {
			statement = connector.getConnection().prepareCall("{call add_poi(?,?,?,?,?,?,?)}");
			statement.setString(1, poiName);
			statement.setString(2, ownerName);
			statement.setString(3, poiType);
			statement.setInt(4, latitude);
			statement.setInt(5, longitude);
			statement.setString(6, poiAddress);
			statement.setString(7, poiKey);
			statement.execute();
		} catch (SQLException e) {
			System.err.println("Error occured while adding new poi to database");
		}
	}
	
	public void deletePoi(String poiKey)
	{
		try {
			statement = connector.getConnection().prepareCall("{call delete_poi(?)}");
			statement.setString(1, poiKey);
			statement.execute();
		} catch (SQLException e) {
			System.err.println("Error occured while deleting poi from database");
		}
	}
	
	public void updatePoiCoordinates(int latitude, int longitude, String poiKey)
	{
		try {
			statement = connector.getConnection().prepareCall("call update_poi_coordinates(?,?,?)");
			statement.setInt(1, latitude);
			statement.setInt(2, longitude);
			statement.setString(3, poiKey);
			statement.execute();
		} catch (SQLException e) {
			System.err.println("Error occured while updating poi coordinates");
		}
	}
	
	public void updatePoiName(String poiName, String poiKey)
	{
		try {
			statement = connector.getConnection().prepareCall("{call update_poi_name(?,?)}");
			statement.setString(1, poiName);
			statement.setString(2, poiKey);
			statement.execute();
		} catch (SQLException e) {
			System.err.println("Error occured while updating poi name");
		}
	}
	
	public void updatePoiOwner(String ownerName, String poiKey)
	{
		try {
			statement = connector.getConnection().prepareCall("{call update_poi_owner(?,?)}");
			statement.setString(1, ownerName);
			statement.setString(2, poiKey);
			statement.execute();
		} catch (SQLException e) {
			System.err.println("Error occured while updating poi owner");
		}
	}
	
	public void updatePoiAddress(String poiAddress, String poiKey)
	{
		try {
			statement = connector.getConnection().prepareCall("{call update_poi_address(?,?)}");
			statement.setString(1, poiAddress);
			statement.setString(2, poiKey);
			statement.execute();
		} catch (SQLException e) {
			System.err.println("Error occured while updating poi address");
		}
	}
}
