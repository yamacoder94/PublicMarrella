using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace NetworkTool
{
    public partial class Traceroute : Form
    {
        public Traceroute()
        {
            InitializeComponent();
            textBox2.ReadOnly = true;
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        

        private void txtip_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        string resultado;
        public delegate void Comodin();

        public void resultadoTrace()
        {
            textBox2.Text = resultado;
        }

        public void cierraWaiting()
        {
            formPopup.Hide();
        }

        Popup01 formPopup = new Popup01();

        private void btnTracert01_Click(object sender, EventArgs e)
        {
            formPopup.Show(this);
            //codigo para ping a cualquier server
            //Cursor = Cursors.WaitCursor;
            textBox2.Clear();
            textBox2.ScrollBars = ScrollBars.Vertical;

            var url = txtip.Text;

            Thread thread = new Thread(t =>
            {
                System.Diagnostics.Process process = new System.Diagnostics.Process();
                System.Diagnostics.ProcessStartInfo startInfo = new System.Diagnostics.ProcessStartInfo();
                startInfo.UseShellExecute = false;
                startInfo.RedirectStandardOutput = true;
                startInfo.CreateNoWindow = true; // permite que no salga cmd 
                startInfo.Verb = "runas"; //permite correr como admin
                startInfo.FileName = "CMD.exe";
                startInfo.Arguments = "/C tracert " + url;
                process.StartInfo = startInfo;
                process.Start();
                string output = process.StandardOutput.ReadToEnd();
                resultado = output;
                //MessageBox.Show(output);
                process.WaitForExit();
                textBox2.Invoke(new Comodin(resultadoTrace));
                formPopup.Invoke(new Comodin(cierraWaiting));
            }

            )
            { IsBackground = true };
            thread.Start();

           
        }

        private void Traceroute_Load(object sender, EventArgs e)
        {
            formPopup.Hide();
        }
    }
}
