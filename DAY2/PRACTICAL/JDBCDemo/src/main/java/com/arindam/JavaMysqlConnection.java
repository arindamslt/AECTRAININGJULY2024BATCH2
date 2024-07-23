package com.arindam;
import java.sql.*;
class TestConnection
{
	private Connection cn=null;
	private Statement st=null;
	private PreparedStatement ps=null;
	private ResultSet rs=null;
	private String select_sql="select * from customer";
	private String insert_sql="insert into customer values(?,?,?)";
	private String delete_sql="delete from customer where cid=?";
	private String update_sql="update customer set cname=?,cphno=? where cid=?";
	public void getData()
	{
		try
		{
		 // Class.forName("com.mysql.cj.jdbc.Driver");//REGISTER AND LOAD THE DRIVER
		  //ESTABLISH THE CONNECTION
		 // cn=DriverManager.getConnection("jdbc:mysql://localhost:3306/fullstackdb","root","arindam");
		  ConnectionFactory con=new ConnectionFactory();
		  cn=con.getConn();
			st=cn.createStatement();//CREATE THE STATEMENT
		  rs=st.executeQuery(select_sql);//EXECUTE THE QUERY AND STORE DATA INTO RESULTSET
		   while(rs.next())
		   {
			   //System.out.println(rs.getString(1));
			  // System.out.println(rs.getString(2));
			  // System.out.println(rs.getString(3));
			   System.out.println(rs.getString(1)+"===>"+rs.getString(2)+"===>"+rs.getString(3));
		   }
		 }
		/*catch(ClassNotFoundException ce)
		{
			ce.printStackTrace();
		}*/
		catch(SQLException se)
		{
			se.printStackTrace();
		}
	}
	public void addData()
	{
		try
		{
		  Class.forName("com.mysql.cj.jdbc.Driver");//REGISTER AND LOAD THE DRIVER
		  //ESTABLISH THE CONNECTION
		  cn=DriverManager.getConnection("jdbc:mysql://localhost:3306/fullstackdb","root","arindam");
		  ps=cn.prepareStatement(insert_sql);
		  ps.setString(1,"C2");
		  ps.setString(2,"AJOY");
		  ps.setString(3,"755757");
		  ps.executeUpdate();//insert statement executed
		 }
		catch(ClassNotFoundException ce)
		{
			ce.printStackTrace();
		}
		catch(SQLException se)
		{
			se.printStackTrace();
		}
	}
	public void updateData()
	{
		try
		{
		  Class.forName("com.mysql.cj.jdbc.Driver");//REGISTER AND LOAD THE DRIVER
		  //ESTABLISH THE CONNECTION
		  cn=DriverManager.getConnection("jdbc:mysql://localhost:3306/fullstackdb","root","arindam");
		  ps=cn.prepareStatement(update_sql);
		  ps.setString(1,"RAMAN");
		  ps.setString(2,"545445");
		  ps.setString(3,"C1");
		  ps.executeUpdate();//insert statement executed
		 }
		catch(ClassNotFoundException ce)
		{
			ce.printStackTrace();
		}
		catch(SQLException se)
		{
			se.printStackTrace();
		}
	}
	public void deleteData()
	{
		try
		{
		  Class.forName("com.mysql.cj.jdbc.Driver");//REGISTER AND LOAD THE DRIVER
		  //ESTABLISH THE CONNECTION
		  cn=DriverManager.getConnection("jdbc:mysql://localhost:3306/fullstackdb","root","arindam");
		  ps=cn.prepareStatement(delete_sql);
		  ps.setString(1,"C2");
		  ps.executeUpdate();//insert statement executed
		 }
		catch(ClassNotFoundException ce)
		{
			ce.printStackTrace();
		}
		catch(SQLException se)
		{
			se.printStackTrace();
		}
	}
}
public class JavaMysqlConnection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
  TestConnection ts=new TestConnection();
 // ts.addData();
  //ts.deleteData();
  //ts.updateData();
  ts.getData();
	}

}
