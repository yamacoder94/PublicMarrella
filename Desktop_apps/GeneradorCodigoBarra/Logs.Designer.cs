namespace GeneradorCodigoBarra
{
    partial class Logs
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Logs));
            this.label1 = new System.Windows.Forms.Label();
            this.txtLogs = new System.Windows.Forms.TextBox();
            this.btnGenerarLogs = new System.Windows.Forms.Button();
            this.btnRegresoHome = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.BackColor = System.Drawing.SystemColors.Highlight;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.label1.Location = new System.Drawing.Point(374, 43);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(59, 25);
            this.label1.TabIndex = 0;
            this.label1.Text = "Logs";
            // 
            // txtLogs
            // 
            this.txtLogs.Location = new System.Drawing.Point(92, 167);
            this.txtLogs.Multiline = true;
            this.txtLogs.Name = "txtLogs";
            this.txtLogs.ReadOnly = true;
            this.txtLogs.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.txtLogs.Size = new System.Drawing.Size(642, 222);
            this.txtLogs.TabIndex = 1;
            // 
            // btnGenerarLogs
            // 
            this.btnGenerarLogs.Location = new System.Drawing.Point(323, 121);
            this.btnGenerarLogs.Name = "btnGenerarLogs";
            this.btnGenerarLogs.Size = new System.Drawing.Size(159, 23);
            this.btnGenerarLogs.TabIndex = 4;
            this.btnGenerarLogs.Text = "Generar Logs";
            this.btnGenerarLogs.UseVisualStyleBackColor = true;
            this.btnGenerarLogs.Click += new System.EventHandler(this.btnGenerarLogs_Click);
            // 
            // btnRegresoHome
            // 
            this.btnRegresoHome.BackColor = System.Drawing.SystemColors.Control;
            this.btnRegresoHome.FlatAppearance.BorderColor = System.Drawing.SystemColors.ActiveCaption;
            this.btnRegresoHome.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnRegresoHome.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnRegresoHome.ForeColor = System.Drawing.SystemColors.ControlText;
            this.btnRegresoHome.Location = new System.Drawing.Point(659, 33);
            this.btnRegresoHome.Name = "btnRegresoHome";
            this.btnRegresoHome.Size = new System.Drawing.Size(75, 35);
            this.btnRegresoHome.TabIndex = 5;
            this.btnRegresoHome.Text = "Home";
            this.btnRegresoHome.UseVisualStyleBackColor = false;
            this.btnRegresoHome.Click += new System.EventHandler(this.btnRegresoHome_Click);
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.SystemColors.Highlight;
            this.button1.Enabled = false;
            this.button1.FlatAppearance.BorderColor = System.Drawing.SystemColors.Highlight;
            this.button1.FlatAppearance.BorderSize = 0;
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button1.Location = new System.Drawing.Point(-27, -29);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(841, 122);
            this.button1.TabIndex = 6;
            this.button1.UseVisualStyleBackColor = false;
            // 
            // Logs
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnRegresoHome);
            this.Controls.Add(this.btnGenerarLogs);
            this.Controls.Add(this.txtLogs);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.button1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Logs";
            this.Load += new System.EventHandler(this.Logs_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox txtLogs;
        private System.Windows.Forms.Button btnGenerarLogs;
        private System.Windows.Forms.Button btnRegresoHome;
        private System.Windows.Forms.Button button1;
    }
}