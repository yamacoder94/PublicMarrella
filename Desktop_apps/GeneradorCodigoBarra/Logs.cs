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
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace GeneradorCodigoBarra
{
    public partial class Logs : Form
    {
        Thread th;
        public Logs()
        {
            StartPosition = FormStartPosition.CenterScreen;
            InitializeComponent();
        }

        private void btnGenerarLogs_Click(object sender, EventArgs e)
        {
            try
            {
                // Read the contents of the selected text file
                string text = File.ReadAllText("/repos/codeGeneratorLogs.txt");

                // Set the text of the TextBox to the contents of the file
                txtLogs.Text = text;
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error loading file: " + ex.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void btnRegresoHome_Click(object sender, EventArgs e)
        {
            this.Close();
            th = new Thread(openHomeForm);
            th.SetApartmentState(ApartmentState.STA);
            th.Start();
        }

        private void openHomeForm(Object obj)
        {
            Application.Run(new Home());
        }

        private void Logs_Load(object sender, EventArgs e)
        {

        }
    }
}
