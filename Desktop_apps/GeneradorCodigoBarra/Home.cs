using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Threading;

namespace GeneradorCodigoBarra
{
    public partial class Home : Form
    {
        Thread th;

        public Home()
        {
            StartPosition = FormStartPosition.CenterScreen;
            InitializeComponent();
        }
        //Lleva a generar codigo
        private void btnLink1_Click(object sender, EventArgs e)
        {

            this.Close();
            th = new Thread(openGeneraCodigoForm);
            th.SetApartmentState(ApartmentState.STA);

            th.Start();

        }

        //Lleva a logs
        private void btnLogsPagina_Click(object sender, EventArgs e)
        {
            this.Close();
            th = new Thread(openLogForm);
            th.SetApartmentState(ApartmentState.STA);
            th.Start();

            
        }

        //Logs
        private void openLogForm(Object obj)
        {
            Application.Run(new Logs());
        }
        
        //GeneraCodigo
        private void openGeneraCodigoForm(Object obj)
        {
            Application.Run(new Form1());
        }

        private void Home_Load(object sender, EventArgs e)
        {
            
        }
    }
}
