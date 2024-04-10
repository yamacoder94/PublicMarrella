namespace GeneradorCodigoBarra
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.txttitulo = new System.Windows.Forms.TextBox();
            this.txtcodigo = new System.Windows.Forms.TextBox();
            this.cbotipo = new System.Windows.Forms.ComboBox();
            this.pitCodigo = new System.Windows.Forms.PictureBox();
            this.btnGenerarCodigo = new System.Windows.Forms.Button();
            this.btnGuardarCodigo = new System.Windows.Forms.Button();
            this.btnImprime = new System.Windows.Forms.Button();
            this.btnGuardarCodigoPDF = new System.Windows.Forms.Button();
            this.label4 = new System.Windows.Forms.Label();
            this.rbIndividual = new System.Windows.Forms.RadioButton();
            this.rbMatriz = new System.Windows.Forms.RadioButton();
            this.numUpDownColumna = new System.Windows.Forms.NumericUpDown();
            this.lbColumnas = new System.Windows.Forms.Label();
            this.lbFilas = new System.Windows.Forms.Label();
            this.numUpDown2 = new System.Windows.Forms.NumericUpDown();
            this.lbAncho = new System.Windows.Forms.Label();
            this.numUpDownAncho = new System.Windows.Forms.NumericUpDown();
            this.numUpDownAltura = new System.Windows.Forms.NumericUpDown();
            this.lbAltura = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.splitter1 = new System.Windows.Forms.Splitter();
            this.button2 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.button4 = new System.Windows.Forms.Button();
            this.label5 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.pitCodigo)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.numUpDownColumna)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.numUpDown2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.numUpDownAncho)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.numUpDownAltura)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.BackColor = System.Drawing.SystemColors.Control;
            this.label1.Location = new System.Drawing.Point(148, 124);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(33, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "Titulo";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.BackColor = System.Drawing.SystemColors.Control;
            this.label2.Location = new System.Drawing.Point(148, 175);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(40, 13);
            this.label2.TabIndex = 1;
            this.label2.Text = "Codigo";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.BackColor = System.Drawing.SystemColors.Control;
            this.label3.Location = new System.Drawing.Point(148, 232);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(28, 13);
            this.label3.TabIndex = 2;
            this.label3.Text = "Tipo";
            // 
            // txttitulo
            // 
            this.txttitulo.Location = new System.Drawing.Point(139, 140);
            this.txttitulo.Name = "txttitulo";
            this.txttitulo.Size = new System.Drawing.Size(300, 20);
            this.txttitulo.TabIndex = 3;
            // 
            // txtcodigo
            // 
            this.txtcodigo.Location = new System.Drawing.Point(139, 200);
            this.txtcodigo.Name = "txtcodigo";
            this.txtcodigo.Size = new System.Drawing.Size(300, 20);
            this.txtcodigo.TabIndex = 4;
            // 
            // cbotipo
            // 
            this.cbotipo.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cbotipo.FormattingEnabled = true;
            this.cbotipo.Location = new System.Drawing.Point(139, 258);
            this.cbotipo.Name = "cbotipo";
            this.cbotipo.Size = new System.Drawing.Size(300, 21);
            this.cbotipo.TabIndex = 5;
            // 
            // pitCodigo
            // 
            this.pitCodigo.BackColor = System.Drawing.SystemColors.ButtonFace;
            this.pitCodigo.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.pitCodigo.Location = new System.Drawing.Point(139, 349);
            this.pitCodigo.Name = "pitCodigo";
            this.pitCodigo.Size = new System.Drawing.Size(300, 100);
            this.pitCodigo.TabIndex = 6;
            this.pitCodigo.TabStop = false;
            // 
            // btnGenerarCodigo
            // 
            this.btnGenerarCodigo.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.btnGenerarCodigo.FlatAppearance.BorderColor = System.Drawing.SystemColors.ActiveCaption;
            this.btnGenerarCodigo.FlatAppearance.BorderSize = 5;
            this.btnGenerarCodigo.Location = new System.Drawing.Point(139, 298);
            this.btnGenerarCodigo.Name = "btnGenerarCodigo";
            this.btnGenerarCodigo.Size = new System.Drawing.Size(300, 36);
            this.btnGenerarCodigo.TabIndex = 7;
            this.btnGenerarCodigo.Text = "Generar Codigo";
            this.btnGenerarCodigo.UseVisualStyleBackColor = false;
            this.btnGenerarCodigo.Click += new System.EventHandler(this.btnGenerarCodigo_Click);
            // 
            // btnGuardarCodigo
            // 
            this.btnGuardarCodigo.Location = new System.Drawing.Point(614, 362);
            this.btnGuardarCodigo.Name = "btnGuardarCodigo";
            this.btnGuardarCodigo.Size = new System.Drawing.Size(134, 23);
            this.btnGuardarCodigo.TabIndex = 8;
            this.btnGuardarCodigo.Text = "Guardar PNG";
            this.btnGuardarCodigo.UseVisualStyleBackColor = true;
            this.btnGuardarCodigo.Click += new System.EventHandler(this.btnGuardarCodigo_Click);
            // 
            // btnImprime
            // 
            this.btnImprime.BackColor = System.Drawing.Color.LimeGreen;
            this.btnImprime.Location = new System.Drawing.Point(614, 406);
            this.btnImprime.Name = "btnImprime";
            this.btnImprime.Size = new System.Drawing.Size(300, 34);
            this.btnImprime.TabIndex = 9;
            this.btnImprime.Text = "Imprime Codigo";
            this.btnImprime.UseVisualStyleBackColor = false;
            this.btnImprime.Click += new System.EventHandler(this.btnImprime_Click);
            // 
            // btnGuardarCodigoPDF
            // 
            this.btnGuardarCodigoPDF.Location = new System.Drawing.Point(780, 362);
            this.btnGuardarCodigoPDF.Name = "btnGuardarCodigoPDF";
            this.btnGuardarCodigoPDF.Size = new System.Drawing.Size(134, 23);
            this.btnGuardarCodigoPDF.TabIndex = 10;
            this.btnGuardarCodigoPDF.Text = "Guardar PDF";
            this.btnGuardarCodigoPDF.UseVisualStyleBackColor = true;
            this.btnGuardarCodigoPDF.Click += new System.EventHandler(this.btnGuardarCodigoPDF_Click);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.BackColor = System.Drawing.SystemColors.Control;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label4.Location = new System.Drawing.Point(706, 101);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(107, 20);
            this.label4.TabIndex = 12;
            this.label4.Text = "Configuración";
            this.label4.Click += new System.EventHandler(this.label4_Click);
            // 
            // rbIndividual
            // 
            this.rbIndividual.AutoSize = true;
            this.rbIndividual.BackColor = System.Drawing.SystemColors.Control;
            this.rbIndividual.Location = new System.Drawing.Point(632, 143);
            this.rbIndividual.Name = "rbIndividual";
            this.rbIndividual.Size = new System.Drawing.Size(70, 17);
            this.rbIndividual.TabIndex = 14;
            this.rbIndividual.TabStop = true;
            this.rbIndividual.Text = "Individual";
            this.rbIndividual.UseVisualStyleBackColor = false;
            this.rbIndividual.CheckedChanged += new System.EventHandler(this.rbIndividual_CheckedChanged);
            // 
            // rbMatriz
            // 
            this.rbMatriz.AutoSize = true;
            this.rbMatriz.BackColor = System.Drawing.SystemColors.Control;
            this.rbMatriz.Location = new System.Drawing.Point(795, 143);
            this.rbMatriz.Name = "rbMatriz";
            this.rbMatriz.Size = new System.Drawing.Size(53, 17);
            this.rbMatriz.TabIndex = 15;
            this.rbMatriz.TabStop = true;
            this.rbMatriz.Text = "Matriz";
            this.rbMatriz.UseVisualStyleBackColor = false;
            this.rbMatriz.CheckedChanged += new System.EventHandler(this.radioButton2_CheckedChanged);
            // 
            // numUpDownColumna
            // 
            this.numUpDownColumna.Location = new System.Drawing.Point(678, 187);
            this.numUpDownColumna.Maximum = new decimal(new int[] {
            3,
            0,
            0,
            0});
            this.numUpDownColumna.Name = "numUpDownColumna";
            this.numUpDownColumna.Size = new System.Drawing.Size(53, 20);
            this.numUpDownColumna.TabIndex = 16;
            // 
            // lbColumnas
            // 
            this.lbColumnas.AutoSize = true;
            this.lbColumnas.BackColor = System.Drawing.SystemColors.Control;
            this.lbColumnas.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbColumnas.Location = new System.Drawing.Point(576, 187);
            this.lbColumnas.Name = "lbColumnas";
            this.lbColumnas.Size = new System.Drawing.Size(80, 20);
            this.lbColumnas.TabIndex = 17;
            this.lbColumnas.Text = "Columnas";
            // 
            // lbFilas
            // 
            this.lbFilas.AutoSize = true;
            this.lbFilas.BackColor = System.Drawing.SystemColors.Control;
            this.lbFilas.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbFilas.Location = new System.Drawing.Point(576, 221);
            this.lbFilas.Name = "lbFilas";
            this.lbFilas.Size = new System.Drawing.Size(42, 20);
            this.lbFilas.TabIndex = 18;
            this.lbFilas.Text = "Filas";
            // 
            // numUpDown2
            // 
            this.numUpDown2.Location = new System.Drawing.Point(678, 220);
            this.numUpDown2.Maximum = new decimal(new int[] {
            3,
            0,
            0,
            0});
            this.numUpDown2.Name = "numUpDown2";
            this.numUpDown2.Size = new System.Drawing.Size(53, 20);
            this.numUpDown2.TabIndex = 19;
            // 
            // lbAncho
            // 
            this.lbAncho.AutoSize = true;
            this.lbAncho.BackColor = System.Drawing.SystemColors.Control;
            this.lbAncho.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbAncho.Location = new System.Drawing.Point(777, 187);
            this.lbAncho.Name = "lbAncho";
            this.lbAncho.Size = new System.Drawing.Size(55, 20);
            this.lbAncho.TabIndex = 20;
            this.lbAncho.Text = "Ancho";
            // 
            // numUpDownAncho
            // 
            this.numUpDownAncho.Location = new System.Drawing.Point(862, 187);
            this.numUpDownAncho.Maximum = new decimal(new int[] {
            1000,
            0,
            0,
            0});
            this.numUpDownAncho.Minimum = new decimal(new int[] {
            150,
            0,
            0,
            0});
            this.numUpDownAncho.Name = "numUpDownAncho";
            this.numUpDownAncho.Size = new System.Drawing.Size(52, 20);
            this.numUpDownAncho.TabIndex = 21;
            this.numUpDownAncho.Value = new decimal(new int[] {
            150,
            0,
            0,
            0});
            // 
            // numUpDownAltura
            // 
            this.numUpDownAltura.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.numUpDownAltura.Location = new System.Drawing.Point(862, 220);
            this.numUpDownAltura.Maximum = new decimal(new int[] {
            1000,
            0,
            0,
            0});
            this.numUpDownAltura.Minimum = new decimal(new int[] {
            150,
            0,
            0,
            0});
            this.numUpDownAltura.Name = "numUpDownAltura";
            this.numUpDownAltura.Size = new System.Drawing.Size(53, 20);
            this.numUpDownAltura.TabIndex = 22;
            this.numUpDownAltura.Value = new decimal(new int[] {
            150,
            0,
            0,
            0});
            // 
            // lbAltura
            // 
            this.lbAltura.AutoSize = true;
            this.lbAltura.BackColor = System.Drawing.SystemColors.Control;
            this.lbAltura.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbAltura.Location = new System.Drawing.Point(777, 221);
            this.lbAltura.Name = "lbAltura";
            this.lbAltura.Size = new System.Drawing.Size(51, 20);
            this.lbAltura.TabIndex = 23;
            this.lbAltura.Text = "Altura";
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.SystemColors.Control;
            this.button1.FlatAppearance.BorderColor = System.Drawing.SystemColors.Control;
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button1.Location = new System.Drawing.Point(21, 21);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(90, 34);
            this.button1.TabIndex = 24;
            this.button1.Text = "Home";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // splitter1
            // 
            this.splitter1.Location = new System.Drawing.Point(0, 0);
            this.splitter1.Name = "splitter1";
            this.splitter1.Size = new System.Drawing.Size(3, 485);
            this.splitter1.TabIndex = 25;
            this.splitter1.TabStop = false;
            // 
            // button2
            // 
            this.button2.BackColor = System.Drawing.SystemColors.Highlight;
            this.button2.Enabled = false;
            this.button2.FlatAppearance.BorderColor = System.Drawing.SystemColors.Highlight;
            this.button2.FlatAppearance.BorderSize = 0;
            this.button2.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button2.Location = new System.Drawing.Point(-31, -41);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(1130, 117);
            this.button2.TabIndex = 26;
            this.button2.UseVisualStyleBackColor = false;
            // 
            // button3
            // 
            this.button3.BackColor = System.Drawing.SystemColors.Control;
            this.button3.Enabled = false;
            this.button3.FlatAppearance.BorderColor = System.Drawing.SystemColors.Control;
            this.button3.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button3.Location = new System.Drawing.Point(78, 89);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(422, 374);
            this.button3.TabIndex = 27;
            this.button3.UseVisualStyleBackColor = false;
            // 
            // button4
            // 
            this.button4.BackColor = System.Drawing.SystemColors.Control;
            this.button4.Enabled = false;
            this.button4.FlatAppearance.BorderColor = System.Drawing.SystemColors.Control;
            this.button4.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button4.Location = new System.Drawing.Point(550, 89);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(422, 374);
            this.button4.TabIndex = 28;
            this.button4.UseVisualStyleBackColor = false;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.BackColor = System.Drawing.SystemColors.Control;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.Location = new System.Drawing.Point(256, 101);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(69, 20);
            this.label5.TabIndex = 29;
            this.label5.Text = "Etiqueta";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.ClientSize = new System.Drawing.Size(1028, 485);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.splitter1);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.lbAltura);
            this.Controls.Add(this.numUpDownAltura);
            this.Controls.Add(this.numUpDownAncho);
            this.Controls.Add(this.lbAncho);
            this.Controls.Add(this.numUpDown2);
            this.Controls.Add(this.lbFilas);
            this.Controls.Add(this.lbColumnas);
            this.Controls.Add(this.numUpDownColumna);
            this.Controls.Add(this.rbMatriz);
            this.Controls.Add(this.rbIndividual);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.btnGuardarCodigoPDF);
            this.Controls.Add(this.btnImprime);
            this.Controls.Add(this.btnGuardarCodigo);
            this.Controls.Add(this.btnGenerarCodigo);
            this.Controls.Add(this.pitCodigo);
            this.Controls.Add(this.cbotipo);
            this.Controls.Add(this.txtcodigo);
            this.Controls.Add(this.txttitulo);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.button4);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.pitCodigo)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.numUpDownColumna)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.numUpDown2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.numUpDownAncho)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.numUpDownAltura)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox txttitulo;
        private System.Windows.Forms.TextBox txtcodigo;
        private System.Windows.Forms.ComboBox cbotipo;
        private System.Windows.Forms.PictureBox pitCodigo;
        private System.Windows.Forms.Button btnGenerarCodigo;
        private System.Windows.Forms.Button btnGuardarCodigo;
        private System.Windows.Forms.Button btnImprime;
        private System.Windows.Forms.Button btnGuardarCodigoPDF;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.RadioButton rbIndividual;
        private System.Windows.Forms.RadioButton rbMatriz;
        private System.Windows.Forms.NumericUpDown numUpDownColumna;
        private System.Windows.Forms.Label lbColumnas;
        private System.Windows.Forms.Label lbFilas;
        private System.Windows.Forms.NumericUpDown numUpDown2;
        private System.Windows.Forms.Label lbAncho;
        private System.Windows.Forms.NumericUpDown numUpDownAncho;
        private System.Windows.Forms.NumericUpDown numUpDownAltura;
        private System.Windows.Forms.Label lbAltura;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Splitter splitter1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.Button button4;
        private System.Windows.Forms.Label label5;
    }
}

