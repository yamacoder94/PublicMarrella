using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetworkTool
{
    public class DatosVarios
    {
        //public string currentUser = "";
        //string hostName = "";

        public string CurrentUser = Environment.UserName;
        public string HostName = System.Net.Dns.GetHostName();

        //public DatosVarios(string currentUser, string hostName)
        //{
        //    CurrentUser = currentUser;
        //    HostName = hostName;
        //}
    }

}
