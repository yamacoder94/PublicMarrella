using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace NetworkTool
{
    public partial class Gpupdate : Form
    {
        public Gpupdate()
        {
            InitializeComponent();
            textBox2.ReadOnly = true;
        }

       

        private void btnUpdate01_Click(object sender, EventArgs e)
        {
            Cursor = Cursors.WaitCursor;
            textBox2.Clear();

            System.Diagnostics.Process process = new System.Diagnostics.Process();
            System.Diagnostics.ProcessStartInfo startInfo = new System.Diagnostics.ProcessStartInfo();
            startInfo.UseShellExecute = false;
            startInfo.RedirectStandardOutput = true;
            startInfo.CreateNoWindow = true; // permite que no salga cmd 
            startInfo.Verb = "runas"; //permite correr como admin
            startInfo.FileName = "CMD.exe";
            startInfo.Arguments = "/C gpupdate /force";
            process.StartInfo = startInfo;
            process.Start();
            string output = process.StandardOutput.ReadToEnd();
            textBox2.Text = output;
            //MessageBox.Show(output);
            process.WaitForExit();
            Cursor = Cursors.Arrow;

        }
    }
}
