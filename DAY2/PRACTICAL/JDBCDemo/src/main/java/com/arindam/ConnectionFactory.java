package com.arindam;
import java.sql.*;
public class ConnectionFactory {
	private Connection cn=null;
	public Connection getConn()
	{
		try
		{
		  Class.forName("com.mysql.cj.jdbc.Driver");//REGISTER AND LOAD THE DRIVER
		  //ESTABLISH THE CONNECTION
		  cn=DriverManager.getConnection("jdbc:mysql://localhost:3306/fullstackdb","root","arindam");
		  
		 }
		catch(ClassNotFoundException ce)
		{
			ce.printStackTrace();
		}
		catch(SQLException se)
		{
			se.printStackTrace();
		}
		return cn;
	}
}
