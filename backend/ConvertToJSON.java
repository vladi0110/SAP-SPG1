import java.sql.*;
import java.util.*;

import org.json.simple.JSONValue;

public class ConvertToJSON {
	
	private final String keyName = "poi";
	private ResultSet results = null;
	
	public ConvertToJSON(ResultSet results)
	{
		setResults(results);
	}

	public ResultSet getResults() {
		return results;
	}


	public void setResults(ResultSet results) {
		this.results = results;
	}
	

	public String convert()
	{
	    Map json = new LinkedHashMap(); 
	    List list = new ArrayList();
	    if(results!=null)
	    {
	        try {
	            ResultSetMetaData metaData = results.getMetaData();
	            while(results.next())
	            {
	                Map<String,Object> columnMap = new LinkedHashMap<String, Object>();
	                for(int columnIndex=1;columnIndex<=metaData.getColumnCount();columnIndex++)
	                {
	                    if(results.getString(metaData.getColumnName(columnIndex))!=null)
	                    	columnMap.put(metaData.getColumnLabel(columnIndex), results.getString(metaData.getColumnName(columnIndex)));
	                    else
	                        columnMap.put(metaData.getColumnLabel(columnIndex), "");
	                }
	                list.add(columnMap);
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	        json.put(keyName, list);
	     }
	     return JSONValue.toJSONString(json);
	}
}
