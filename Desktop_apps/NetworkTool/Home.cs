using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.Win32;
using Microsoft.WindowsAPICodePack.Shell;
using Microsoft.WindowsAPICodePack.Shell.PropertySystem;
using System.Runtime.InteropServices;



namespace NetworkTool
{
    public partial class Home : Form
    {

        DatosVarios datos = new DatosVarios();

        public Home()
        {
            InitializeComponent();
        }

        private void roundedButton1_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void Home_Load(object sender, EventArgs e)
        {
            var ipGP = " ";
            string userName = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
            userName = userName.Remove(0, 3);
            string hostName = System.Net.Dns.GetHostName();
            lblhostname.Text = datos.HostName;
            lbllogonuser.Text = datos.CurrentUser;
            var macAddr =
                (
                    from nic in NetworkInterface.GetAllNetworkInterfaces()
                    where nic.OperationalStatus == OperationalStatus.Up
                    select nic.GetPhysicalAddress().ToString()
                ).FirstOrDefault();
            //lblmacaddress.Text = macAddr;
            lblmacaddress.Text = "XXX-MAC-XXX";



            string osName = Environment.OSVersion.VersionString;
            Console.WriteLine("Operating System: " + osName);
            OperatingSystem os = Environment.OSVersion;
            Console.WriteLine("Operating system version: " + os.Version.Build);
            int builVersion = os.Version.Build;           
            if (builVersion > 22000)
            {
                //In case build version is above 22000 ,  it means OS v is Windows 11 , 
                //For some reason , windows has not updated the value productName from the registry
                //it still says Windows 10
                lblos.Text = "Windows  11" + "(" + os.Version + ")";
            }else
            {
                RegistryKey registryKey = Registry.LocalMachine.OpenSubKey("Software\\Microsoft\\Windows NT\\CurrentVersion");
                string pathName = (string)registryKey.GetValue("productName");
                lblos.Text = pathName;
            }
            

            //get VPN ip
            NetworkInterface[] interfaces = NetworkInterface.GetAllNetworkInterfaces();
            foreach (var adapter in interfaces)
            {
                var ipProps = adapter.GetIPProperties();

                foreach (var ip in ipProps.UnicastAddresses)
                {
                    if ((adapter.OperationalStatus == OperationalStatus.Up)
                    && (ip.Address.AddressFamily == AddressFamily.InterNetwork))
                    {
                        if (ip.Address.ToString().StartsWith("10.")){
                            ipGP = ip.Address.ToString();
                            lblip.Text = ipGP;
                        }
                        //Console.Out.WriteLine(ip.Address.ToString() + "|" + adapter.Description.ToString());
                    }
                }
            }

            //get bitlocker status
            IShellProperty prop = ShellObject.FromParsingName("C:").Properties.GetProperty("System.Volume.BitLockerProtection");
            int? bitLockerProtectionStatus = (prop as ShellProperty<int?>).Value;

            if (bitLockerProtectionStatus.HasValue && (bitLockerProtectionStatus == 1 || bitLockerProtectionStatus == 3 || bitLockerProtectionStatus == 5))
            { lblbitlocker.Text = "Bitlocker ON"; }
            else
            {
                lblbitlocker.Text = "Bitlocker OFF";
            }

            //get installed RAM
            int i = 0;
            DriveInfo[] allDrives = DriveInfo.GetDrives();
            foreach (DriveInfo checkDrive in allDrives)
            {
                try
                {
                    if (allDrives[i].IsReady == true)
                        if (allDrives[i].Name == "C:\\")
                        {
                            if (allDrives[i].Name != "")
                            {

                                //convert bytes to GB

                                progMemory.Minimum = 1;
                                long max = (allDrives[i].TotalSize);

                                long sizeGB = (allDrives[i].TotalSize);
                                sizeGB = (long)Math.Round(sizeGB / (1024.0 * 1024.0 * 1024.0));//Disk size

                                long freeSpace = (allDrives[i].TotalFreeSpace);
                                freeSpace = (long)Math.Round(freeSpace / (1024.0 * 1024.0 * 1024.0));
                                long val = sizeGB - freeSpace;
                                //progMemory.Maximum = Convert.ToInt32(max);
                                int maxi = (int)sizeGB;
                                int freeSp = (int)freeSpace;
                                lblram.Text = freeSp.ToString() + " out of " + maxi.ToString() + " GB";
                                
                                int valu = maxi - freeSp;

                                progMemory.Maximum = maxi;
                                progMemory.Value = valu;



                                //Console.WriteLine(allDrives[i].VolumeLabel);
                            }
                        }
                    ++i;
                }
                catch(FormatException er)
                {
                    Console.WriteLine(er.Message);
                }
            }

        }

        private void panel2_Paint(object sender, PaintEventArgs e)
        {
                
        }
    }
}
