using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Imaging;
using System.Drawing.Printing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

//using BarcodeLib;

using BarcodeStandard;
using iText.IO.Image;
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;
using iText.Layout.Properties;


using SkiaSharp;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using static System.Net.Mime.MediaTypeNames;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.Button;

//using Syncfusion.Pdf;
//using Syncfusion.Pdf.Graphics;


//using Type = BarcodeStandard.Type;




namespace GeneradorCodigoBarra
{
    public partial class Form1 : Form
    {

        Thread th;
        public Form1()
        {
            StartPosition = FormStartPosition.CenterScreen;
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }


        public class OpcionCombo
        {
            public int Valor { get; set; }
            public string Texto { get; set; }
        }

        //Variables de ajustes Matrix
            public int Ancho { get; set; }
            public int Altura { get; set; }
            public int Columna { get; set; }
            public int Fila { get; set; }
        

        private void Form1_Load(object sender, EventArgs e)
        {
            //oculta menu Matriz
            numUpDownColumna.Visible = !numUpDownColumna.Visible;
            numUpDown2.Visible = !numUpDown2.Visible;
            lbColumnas.Visible = !lbColumnas.Visible;
            lbFilas.Visible = !lbFilas.Visible;

            numUpDownAncho.Visible = !numUpDownAncho.Visible;
            numUpDownAltura.Visible = !numUpDownAltura.Visible;
            lbAncho.Visible = !lbAncho.Visible;
            lbAltura.Visible = !lbAltura.Visible;



            ////////////////////////////////////////////////////////

            int indice = 0;
            //rellena el combobox
            foreach(var nombre in Enum.GetNames(typeof(BarcodeStandard.Type)))
            {
                cbotipo.Items.Add(new OpcionCombo() { Valor= indice, Texto = nombre});
                indice++;

            }

            cbotipo.DisplayMember = "Texto";
            cbotipo.ValueMember = "Valor";
            cbotipo.SelectedIndex = 0;

        }

        //Genera codigo en PictureBox

        private void btnGenerarCodigo_Click(object sender, EventArgs e)
        {
            pitCodigo.BackgroundImage = null;
            Barcode codigo = new Barcode();
            BarcodeStandard.Type tipoCodigo;
            string barcodeTypeString = " ";

            try {

                System.Drawing.Image imagenCodigo;
                SKData sk;

                //asi se toma el indice seleccionado
                int indice = (cbotipo.SelectedItem as OpcionCombo).Valor;

                tipoCodigo = (BarcodeStandard.Type)indice;
                barcodeTypeString = tipoCodigo.ToString();



                codigo.IncludeLabel = true;
                codigo.Alignment = AlignmentPositions.Center;
                var img = codigo.Encode(tipoCodigo, txtcodigo.Text, SKColors.Black, SKColors.White, 300, 100);
                sk = img.Encode();
                imagenCodigo = System.Drawing.Image.FromStream(sk.AsStream());
                pitCodigo.BackgroundImage = imagenCodigo;


            }
            catch (Exception es) 
            {
                string filePath = "/repos/codeGeneratorLogs.txt";
                



                if (!File.Exists(filePath))
                {
                    // File does not exist, create and write to it
                    using (StreamWriter writer = File.CreateText(filePath))
                    {
                        DateTime currentDateTime = DateTime.Now;
                        writer.WriteLine(currentDateTime + " " + es.Message + " Al generar codigo " + barcodeTypeString);
                    }

                    Console.WriteLine("File created successfully!");
                    MessageBox.Show("Algo Salio Mal!");
                }
                else
                {
                    DateTime currentDateTime = DateTime.Now;
                    //aca se deberia de agregar una linea nueva al file que ya existe
                    using (StreamWriter writer2 = new StreamWriter(filePath, true))
                    {
                        // Write the new line to the file
                        writer2.WriteLine(currentDateTime + " " + es.Message + " Al generar codigo " + barcodeTypeString);
                    }

                    MessageBox.Show("Algo Salio Mal!");

                }

               
            }
            


            



        }
        //Genera codigo en formato PNG
        private void btnGuardarCodigo_Click(object sender, EventArgs e)
        {

            
            if(rbIndividual.Checked == true)
            {
                //Si se selecciono Individual

                if (pitCodigo.BackgroundImage == null)
                {
                    MessageBox.Show("Imagen Vacia!");
                }
                else
                {

                    try
                    {

                        System.Drawing.Image _imagen_codigo = pitCodigo.BackgroundImage.Clone() as System.Drawing.Image;


                        SaveFileDialog venta_dialog = new SaveFileDialog();

                        venta_dialog.FileName = string.Format("{0}.png", txtcodigo.Text);
                        venta_dialog.Filter = "Imagen |*.png";

                        //Dialogo de guardado
                        if (venta_dialog.ShowDialog() == DialogResult.OK)
                        {

                            // Guarda la imagen individual de la etiqueta
                            _imagen_codigo.Save(venta_dialog.FileName, ImageFormat.Jpeg);
                            MessageBox.Show("Imagen Guardada!");
                            pitCodigo.BackgroundImage = null;
                        }


                    }
                    catch (Exception es)
                    {
                        string filePath = "/repos/codeGeneratorLogs.txt";

                        if (!File.Exists(filePath))
                        {
                            // File does not exist, create and write to it
                            using (StreamWriter writer = File.CreateText(filePath))
                            {
                                DateTime currentDateTime = DateTime.Now;
                                writer.WriteLine(currentDateTime + " " + es.Message);
                            }

                            Console.WriteLine("File created successfully!");
                            MessageBox.Show("Algo Salio Mal!");
                        }
                        else
                        {
                            DateTime currentDateTime = DateTime.Now;
                            //aca se deberia de agregar una linea nueva al file que ya existe
                            using (StreamWriter writer2 = new StreamWriter(filePath, true))
                            {
                                // Write the new line to the file
                                writer2.WriteLine(currentDateTime + " " + es.Message);
                                MessageBox.Show("Algo Salio Mal!");
                            }



                        }


                    }


                }


                return;

            }else if (rbMatriz.Checked == true)
            {
                //Si se selecciono Matriz

                if (pitCodigo.BackgroundImage == null)
                {
                    MessageBox.Show("Imagen Vacia!");
                }
                else
                {

                    try
                    {
                        Ancho = (int)numUpDownAncho.Value;
                        Altura = (int)numUpDownAltura.Value;
                        Columna = (int)numUpDownColumna.Value;
                        Fila = (int)numUpDown2.Value;


                        System.Drawing.Image _imagen_codigo = pitCodigo.BackgroundImage.Clone() as System.Drawing.Image;


                        SaveFileDialog venta_dialog = new SaveFileDialog();

                        venta_dialog.FileName = string.Format("{0}.png", txtcodigo.Text);
                        venta_dialog.Filter = "Imagen |*.png";

                        //Dialogo de guardado
                        if (venta_dialog.ShowDialog() == DialogResult.OK)
                        {

                            

                            // Create a Bitmap to draw on
                            Bitmap bitmap = new Bitmap(Columna * Ancho, Fila * Altura);

                            // Load your image
                            System.Drawing.Image image = _imagen_codigo;

                            // Create a Graphics object from the Bitmap
                            using (Graphics graphics = Graphics.FromImage(bitmap))
                            {
                                // Clear the bitmap
                                graphics.Clear(Color.White);

                                // Draw the image onto each cell
                                for (int i = 0; i < Fila; i++)
                                {
                                    for (int j = 0; j < Columna; j++)
                                    {
                                        int x = j * (100 + 5) + 5;
                                        int y = i * (100 + 5) + 5;
                                        graphics.DrawImage(image, x, y, 100, 100);
                                    }
                                }
                            }

                            // Almacena la matrix de etiquetas
                            bitmap.Save(venta_dialog.FileName, ImageFormat.Jpeg);
                            

                            MessageBox.Show("Imagen Guardada!");
                            
                            pitCodigo.BackgroundImage = null;
                        }


                    }
                    catch (Exception es)
                    {
                        string filePath = "/repos/codeGeneratorLogs.txt";

                        if (!File.Exists(filePath))
                        {
                            // File does not exist, create and write to it
                            using (StreamWriter writer = File.CreateText(filePath))
                            {
                                DateTime currentDateTime = DateTime.Now;
                                writer.WriteLine(currentDateTime + " " + es.Message);
                            }

                            Console.WriteLine("File created successfully!");
                            MessageBox.Show("Algo Salio Mal!");
                        }
                        else
                        {
                            DateTime currentDateTime = DateTime.Now;
                            //aca se deberia de agregar una linea nueva al file que ya existe
                            using (StreamWriter writer2 = new StreamWriter(filePath, true))
                            {
                                // Write the new line to the file
                                writer2.WriteLine(currentDateTime + " " + es.Message);
                                MessageBox.Show("Algo Salio Mal!");
                            }



                        }


                    }


                }


                return;
            }
            

            

            

            
        }

        private void btnImprime_Click(object sender, EventArgs e)
        {
            if (pitCodigo.BackgroundImage == null)
            {
                MessageBox.Show("Imagen Vacia!");
            }
            else
            {
                try
                {

                    PrintDialog pd = new PrintDialog();

                    PrintDocument pDoc = new PrintDocument();

                    pDoc.PrintPage += PrintPicture;

                    pd.Document = pDoc;

                    if (pd.ShowDialog() == DialogResult.OK)

                    {

                        pDoc.Print();



                    }
                }
                catch (Exception es)
                {
                    string filePath = "/repos/codeGeneratorLogs.txt";

                    if (!File.Exists(filePath))
                    {
                        // File does not exist, create and write to it
                        using (StreamWriter writer = File.CreateText(filePath))
                        {
                            DateTime currentDateTime = DateTime.Now;
                            writer.WriteLine(currentDateTime + " " + es.Message);
                        }

                        Console.WriteLine("File created successfully!");
                        MessageBox.Show("Algo Salio Mal!");
                    }
                    else
                    {
                        DateTime currentDateTime = DateTime.Now;
                        //aca se deberia de agregar una linea nueva al file que ya existe
                        using (StreamWriter writer2 = new StreamWriter(filePath, true))
                        {
                            // Write the new line to the file
                            writer2.WriteLine(currentDateTime + " " + es.Message);
                        }

                        MessageBox.Show("Algo Salio Mal!");

                    }


                }

            }
               
        }

        private void PrintPicture(object sender, PrintPageEventArgs e)

        {
            

            Bitmap bmp = new Bitmap(pitCodigo.Width, pitCodigo.Height);

            pitCodigo.DrawToBitmap(bmp, new System.Drawing.Rectangle(0, 0, pitCodigo.Width, pitCodigo.Height));

            e.Graphics.DrawImage(bmp, 0, 0);

            bmp.Dispose();

        }

        
        //Guarda archivo pdf
        private void btnGuardarCodigoPDF_Click(object sender, EventArgs e)
        {

            if (pitCodigo.BackgroundImage == null)
            {
                MessageBox.Show("Imagen Vacia!");

            }
            else {
                System.Drawing.Image _imagen_codigo = pitCodigo.BackgroundImage.Clone() as System.Drawing.Image;
                //En caso que seleccion individual 
                if (rbIndividual.Checked == true)
                {
                    
                        SaveFileDialog venta_dialog = new SaveFileDialog();

                        venta_dialog.FileName = string.Format("{0}.pdf", txtcodigo.Text);
                        venta_dialog.Filter = "Documento PDF |*.pdf";
                        //para PDF "Documento PDF |*.pdf"

                        if (venta_dialog.ShowDialog() == DialogResult.OK)
                        {


                            try
                            {

                                //string Origen = "/repos/505050.png";
                                string Destino = venta_dialog.FileName;

                                //ImageData imageData = ImageDataFactory.Create(Origen);
                                byte[] byteArray = ImageToByteArray(_imagen_codigo);
                                ImageData imageData = ImageDataFactory.Create(byteArray);
                                iText.Kernel.Pdf.PdfDocument pdfDocument = new iText.Kernel.Pdf.PdfDocument(new PdfWriter(Destino));
                                Document document = new Document(pdfDocument);

                                iText.Layout.Element.Image image = new iText.Layout.Element.Image(imageData);
                                image.SetWidth(pdfDocument.GetDefaultPageSize().GetWidth() - 50);
                                image.SetAutoScaleHeight(true);

                                document.Add(image);

                                pdfDocument.Close();
                                MessageBox.Show("PDF Guardado!");

                            }
                            catch (Exception es)
                            {
                                string filePath = "/repos/codeGeneratorLogs.txt";

                                if (!File.Exists(filePath))
                                {
                                    // File does not exist, create and write to it
                                    using (StreamWriter writer = File.CreateText(filePath))
                                    {
                                        DateTime currentDateTime = DateTime.Now;
                                        writer.WriteLine(currentDateTime + " " + es.Message);
                                    }

                                    Console.WriteLine("File created successfully!");
                                    MessageBox.Show("Algo Salio Mal!");
                                }
                                else
                                {
                                    DateTime currentDateTime = DateTime.Now;
                                    //aca se deberia de agregar una linea nueva al file que ya existe
                                    using (StreamWriter writer2 = new StreamWriter(filePath, true))
                                    {
                                        // Write the new line to the file
                                        writer2.WriteLine(currentDateTime + " " + es.Message);
                                    }

                                    MessageBox.Show("Algo Salio Mal!");

                                }


                            }




                        }




                    
                }
                else if (rbMatriz.Checked == true)
                {
                    //En caso que seleccion Matriz 

                    

                        SaveFileDialog venta_dialog = new SaveFileDialog();

                        venta_dialog.FileName = string.Format("{0}.pdf", txtcodigo.Text);
                        venta_dialog.Filter = "Documento PDF |*.pdf";
                        //para PDF "Documento PDF |*.pdf"

                        if (venta_dialog.ShowDialog() == DialogResult.OK)
                        {
                            Ancho = (int)numUpDownAncho.Value;
                            Altura = (int)numUpDownAltura.Value;
                            Columna = (int)numUpDownColumna.Value;
                            Fila = (int)numUpDown2.Value;


                            try
                            {
                                // Create a Bitmap to draw on
                                Bitmap bitmap2 = new Bitmap(Columna * Ancho, Fila * Altura);

                                // Load your image
                                System.Drawing.Image image = _imagen_codigo;

                                // Create a Graphics object from the Bitmap
                                using (Graphics graphics = Graphics.FromImage(bitmap2))
                                {
                                    // Clear the bitmap
                                    graphics.Clear(Color.White);

                                    // Draw the image onto each cell
                                    for (int i = 0; i < Columna; i++)
                                    {
                                        for (int j = 0; j < Fila; j++)
                                        {
                                            int x = j * (125 + 5) + 5;
                                            int y = i * (125 + 5) + 5;
                                            graphics.DrawImage(image, x, y, 125, 125);
                                        }
                                    }
                                }

                                // Almacena la matrix de etiquetas
                                //bitmap.Save(venta_dialog.FileName, ImageFormat.Jpeg);





                                //string Origen = "/repos/505050.png";
                                string Destino = venta_dialog.FileName;

                                //ImageData imageData = ImageDataFactory.Create(Origen);
                                byte[] byteArray = ImageToByteArray(bitmap2);
                                ImageData imageData = ImageDataFactory.Create(byteArray);
                                iText.Kernel.Pdf.PdfDocument pdfDocument = new iText.Kernel.Pdf.PdfDocument(new PdfWriter(Destino));
                                Document document = new Document(pdfDocument);

                                iText.Layout.Element.Image image2 = new iText.Layout.Element.Image(imageData);
                                image2.SetWidth(pdfDocument.GetDefaultPageSize().GetWidth() - 50);
                                image2.SetAutoScaleHeight(true);

                                document.Add(image2);

                                pdfDocument.Close();
                                MessageBox.Show("PDF Guardado!");

                            }
                            catch (Exception es)
                            {
                                string filePath = "/repos/codeGeneratorLogs.txt";

                                if (!File.Exists(filePath))
                                {
                                    // File does not exist, create and write to it
                                    using (StreamWriter writer = File.CreateText(filePath))
                                    {
                                        DateTime currentDateTime = DateTime.Now;
                                        writer.WriteLine(currentDateTime + " " + es.Message);
                                    }

                                    Console.WriteLine("File created successfully!");
                                    MessageBox.Show("Algo Salio Mal!");
                                }
                                else
                                {
                                    DateTime currentDateTime = DateTime.Now;
                                    //aca se deberia de agregar una linea nueva al file que ya existe
                                    using (StreamWriter writer2 = new StreamWriter(filePath, true))
                                    {
                                        // Write the new line to the file
                                        writer2.WriteLine(currentDateTime + " " + es.Message);
                                    }

                                    MessageBox.Show("Algo Salio Mal!");

                                }


                            }




                        }




                    

                }

            }



             

        }

        //pasa la imagen a bytes
        private byte[] ImageToByteArray(System.Drawing.Image img)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                // Save the image to the memory stream in the desired format (JPEG, PNG, etc.)
                img.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);

                // Return the byte array representing the image
                return ms.ToArray();
            }
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }


        private void radioButton2_CheckedChanged(object sender, EventArgs e)
        {

            if (rbMatriz.Checked)
            {
                numUpDownColumna.Visible = true;
                numUpDown2.Visible = true;
                lbColumnas.Visible = true;
                lbFilas.Visible = true;

                numUpDownAncho.Visible = true;
                numUpDownAltura.Visible = true;
                lbAncho.Visible = true;
                lbAltura.Visible = true;

                //MessageBox.Show("muestra en vivo Matriz");
            }
            
        }

        private void rbIndividual_CheckedChanged(object sender, EventArgs e)
        {
            if (rbIndividual.Checked)
            {
                //Oculta menu Matriz
                numUpDownColumna.Visible = false;
                numUpDown2.Visible = false;
                lbColumnas.Visible = false;
                lbFilas.Visible = false;

                numUpDownAncho.Visible = false;
                numUpDownAltura.Visible = false;
                lbAncho.Visible = false;
                lbAltura.Visible = false;

                //MessageBox.Show("muestra en vivo Individual");
            }
           
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            th = new Thread(openHomeForm);
            th.SetApartmentState(ApartmentState.STA);
            th.Start();
        }

        private void openHomeForm(Object obj)
        {
            System.Windows.Forms.Application.Run(new Home());
        }

        private void toolStripStatusLabel1_Click(object sender, EventArgs e)
        {

        }
    }
}
