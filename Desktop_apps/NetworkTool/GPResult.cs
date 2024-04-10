using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace NetworkTool
{
    public partial class GPResult : Form
    {
        DatosVarios datos = new DatosVarios();

        public GPResult()
        {
            InitializeComponent();
            textBox2.ReadOnly = true;
            
        }



       

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void GPResult_Load(object sender, EventArgs e)
        {

        }

        private void lblwaitGPR_Click(object sender, EventArgs e)
        {

        }

        private void btnGPResult01_Click(object sender, EventArgs e)
        {
            
            Cursor = Cursors.WaitCursor;
            textBox2.Clear();
            
            
            string pathFile = "C:\\" + datos.HostName + ".html";
            if (File.Exists(pathFile))
            {
                File.Delete(pathFile);
                textBox2.Text = "Old GPResult deleted";
                System.Diagnostics.Process process = new System.Diagnostics.Process();
                System.Diagnostics.ProcessStartInfo startInfo = new System.Diagnostics.ProcessStartInfo();
                startInfo.UseShellExecute = false;
                startInfo.RedirectStandardOutput = true;
                startInfo.CreateNoWindow = true; // permite que no salga cmd 
                startInfo.Verb = "runas"; //permite correr como admin
                startInfo.FileName = "CMD.exe";
                startInfo.Arguments = "/C gpresult /user " + datos.CurrentUser + " /h C:\\" + datos.HostName + ".html";
                process.StartInfo = startInfo;
                process.Start();
                string output = process.StandardOutput.ReadToEnd();
                textBox2.Text = output;

                //MessageBox.Show(output);
                process.WaitForExit();
                textBox2.Text = "Report generated!!";
                Cursor = Cursors.Arrow;
            }
            else
            {
                System.Diagnostics.Process process = new System.Diagnostics.Process();
                System.Diagnostics.ProcessStartInfo startInfo = new System.Diagnostics.ProcessStartInfo();
                startInfo.UseShellExecute = false;
                startInfo.RedirectStandardOutput = true;
                startInfo.CreateNoWindow = true; // permite que no salga cmd 
                startInfo.Verb = "runas"; //permite correr como admin
                startInfo.FileName = "CMD.exe";
                //startInfo.Arguments = "/C gpresult /user " + datos.CurrentUser + " /h C:\\" + datos.HostName + ".html";
                startInfo.Arguments = "/C gpresult /user " + datos.CurrentUser + " /h C:\\" + datos.HostName + ".html";

                process.StartInfo = startInfo;
                process.Start();
                string output = process.StandardOutput.ReadToEnd();
                textBox2.Text = output;

                //MessageBox.Show(output);
                process.WaitForExit();
                textBox2.Text = "Report generated!!";
                Cursor = Cursors.Arrow;
            }
        }
    }
}
