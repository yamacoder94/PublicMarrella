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
    public partial class Ping : Form
    {
        public Ping()
        {
            InitializeComponent();
            textBox2.ReadOnly = true;
            formPopup.Hide();

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

        public void invalid()
        {
            textBox2.Text = "Invalid command";
        }

        public void resultadoPing()
        {
            textBox2.Text = resultado;
        }

        public void cierraWaiting()
        {
            formPopup.Hide();
        }
        Popup01 formPopup = new Popup01();
        private void btnPing01_Click(object sender, EventArgs e)
        {
            
            formPopup.Show(this);
            //codigo para ping a cualquier server
            //Cursor = Cursors.WaitCursor;
            textBox2.Clear();
            textBox2.ScrollBars = ScrollBars.Vertical;

            var url = txtip.Text;

            Thread thread = new Thread(t =>
            {

                if (url.EndsWith("-t"))
                {
                    //formPopup.Invoke(new Comodin(cierraWaiting));
                    textBox2.Invoke(new Comodin(invalid));
                    //formPopup.Hide();
                    //Cursor = Cursors.Arrow;
                }
                else
                {
                    ////textBox2.SelectionStart = textBox2.TextLength;
                    ////textBox2.ScrollToCaret();


                    System.Diagnostics.Process process = new System.Diagnostics.Process();
                    System.Diagnostics.ProcessStartInfo startInfo = new System.Diagnostics.ProcessStartInfo();
                    startInfo.UseShellExecute = false;
                    startInfo.RedirectStandardOutput = true;
                    startInfo.CreateNoWindow = true; // permite que no salga cmd 
                    startInfo.Verb = "runas"; //permite correr como admin
                    startInfo.FileName = "CMD.exe";
                    startInfo.Arguments = "/C ping " + url;
                    process.StartInfo = startInfo;
                    process.Start();
                    string output = process.StandardOutput.ReadToEnd();
                    resultado = output;
                    //MessageBox.Show(output);
                    process.WaitForExit();
                    //formPopup.Invoke(new Comodin(cierraWaiting));
                    textBox2.Invoke(new Comodin(resultadoPing));
                    // Add vertical scroll bars to the TextBox control.

                    
                    //Cursor = Cursors.Arrow;
                }
                formPopup.Invoke(new Comodin(cierraWaiting));

            }
            )
            { IsBackground = true };
            thread.Start();
            


        }
    }
}
