using System.Collections.Generic;

public class StudentMasters
{
    public int StdID { get; set; }
    public string StdName { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string Address { get; set; }

    public StudentMasters(int ID, string Name, string email, string phone, string Addr)
    {
        StdID = ID;
        StdName = Name;
        Email = email;
        Phone = phone;
        Address = Addr;
    }

    public static List<StudentMasters> studetndDetails()
    {
        List<StudentMasters> listStudents = new List<StudentMasters>();
        listStudents.Add(new StudentMasters(1, "Angular2", "a@a.com", "000000", "India"));
        listStudents.Add(new StudentMasters(2, "Java", "java@gmail.com", "0000123", "India"));
        listStudents.Add(new StudentMasters(3, "ASP", "asp@gmail.com", "000643", "US"));
        listStudents.Add(new StudentMasters(4, ".Net", "net@gmail.com", "00003455", "US"));
        listStudents.Add(new StudentMasters(5, "Core", "core@gmail.com", "000067567656", "UK"));

        return listStudents;
    }
}