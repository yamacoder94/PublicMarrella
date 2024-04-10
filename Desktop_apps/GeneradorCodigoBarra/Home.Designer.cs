namespace GeneradorCodigoBarra
{
    partial class Home
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Home));
            this.btnLink1 = new System.Windows.Forms.Button();
            this.btnLogsPagina = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.label1 = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.btnAjustesNavega = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // btnLink1
            // 
            this.btnLink1.Location = new System.Drawing.Point(332, 305);
            this.btnLink1.Name = "btnLink1";
            this.btnLink1.Size = new System.Drawing.Size(135, 56);
            this.btnLink1.TabIndex = 0;
            this.btnLink1.Text = "Generar Codigo";
            this.btnLink1.UseVisualStyleBackColor = true;
            this.btnLink1.Click += new System.EventHandler(this.btnLink1_Click);
            // 
            // btnLogsPagina
            // 
            this.btnLogsPagina.FlatAppearance.BorderColor = System.Drawing.SystemColors.Control;
            this.btnLogsPagina.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnLogsPagina.Location = new System.Drawing.Point(655, 24);
            this.btnLogsPagina.Name = "btnLogsPagina";
            this.btnLogsPagina.Size = new System.Drawing.Size(46, 29);
            this.btnLogsPagina.TabIndex = 1;
            this.btnLogsPagina.Text = "Logs";
            this.btnLogsPagina.UseVisualStyleBackColor = true;
            this.btnLogsPagina.Click += new System.EventHandler(this.btnLogsPagina_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.BackColor = System.Drawing.SystemColors.Highlight;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 24F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.label2.Location = new System.Drawing.Point(192, 84);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(429, 37);
            this.label2.TabIndex = 2;
            this.label2.Text = "Generador de Codigos Barra";
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = global::GeneradorCodigoBarra.Properties.Resources.download;
            this.pictureBox1.Location = new System.Drawing.Point(309, 168);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(183, 122);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 3;
            this.pictureBox1.TabStop = false;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(715, 363);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(31, 13);
            this.label1.TabIndex = 4;
            this.label1.Text = "v 1.0";
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.SystemColors.Highlight;
            this.button1.Enabled = false;
            this.button1.FlatAppearance.BorderColor = System.Drawing.SystemColors.Highlight;
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button1.Location = new System.Drawing.Point(-22, -17);
            this.button1.Margin = new System.Windows.Forms.Padding(0);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(869, 158);
            this.button1.TabIndex = 5;
            this.button1.UseVisualStyleBackColor = false;
            // 
            // btnAjustesNavega
            // 
            this.btnAjustesNavega.FlatAppearance.BorderColor = System.Drawing.SystemColors.Control;
            this.btnAjustesNavega.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnAjustesNavega.Location = new System.Drawing.Point(707, 24);
            this.btnAjustesNavega.Name = "btnAjustesNavega";
            this.btnAjustesNavega.Size = new System.Drawing.Size(57, 29);
            this.btnAjustesNavega.TabIndex = 6;
            this.btnAjustesNavega.Text = "Ajustes";
            this.btnAjustesNavega.UseVisualStyleBackColor = true;
            // 
            // Home
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 396);
            this.Controls.Add(this.btnAjustesNavega);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.btnLogsPagina);
            this.Controls.Add(this.btnLink1);
            this.Controls.Add(this.button1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Home";
            this.Load += new System.EventHandler(this.Home_Load);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnLink1;
        private System.Windows.Forms.Button btnLogsPagina;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button btnAjustesNavega;
    }
}