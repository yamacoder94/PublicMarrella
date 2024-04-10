
namespace NetworkTool
{
    partial class Ping
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
            this.label1 = new System.Windows.Forms.Label();
            this.txtip = new System.Windows.Forms.TextBox();
            this.textBox2 = new System.Windows.Forms.TextBox();
            this.btnPing01 = new NetworkTool.Controls.RoundedButton();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Century Gothic", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(501, 58);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(203, 34);
            this.label1.TabIndex = 0;
            this.label1.Text = "Enter IP or URL";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // txtip
            // 
            this.txtip.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.txtip.Location = new System.Drawing.Point(258, 156);
            this.txtip.Name = "txtip";
            this.txtip.Size = new System.Drawing.Size(688, 31);
            this.txtip.TabIndex = 1;
            this.txtip.TextChanged += new System.EventHandler(this.txtip_TextChanged);
            // 
            // textBox2
            // 
            this.textBox2.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.textBox2.Location = new System.Drawing.Point(143, 335);
            this.textBox2.Multiline = true;
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new System.Drawing.Size(918, 276);
            this.textBox2.TabIndex = 3;
            this.textBox2.TextChanged += new System.EventHandler(this.textBox2_TextChanged);
            // 
            // btnPing01
            // 
            this.btnPing01.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.btnPing01.BackColor = System.Drawing.Color.Purple;
            this.btnPing01.BackgroundColor = System.Drawing.Color.Purple;
            this.btnPing01.BordeColor = System.Drawing.Color.PaleVioletRed;
            this.btnPing01.BorderRadius = 40;
            this.btnPing01.BorderSize = 0;
            this.btnPing01.FlatAppearance.BorderSize = 0;
            this.btnPing01.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnPing01.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnPing01.ForeColor = System.Drawing.Color.GhostWhite;
            this.btnPing01.Location = new System.Drawing.Point(492, 228);
            this.btnPing01.Name = "btnPing01";
            this.btnPing01.Size = new System.Drawing.Size(220, 79);
            this.btnPing01.TabIndex = 4;
            this.btnPing01.Text = "Ping";
            this.btnPing01.TextColor = System.Drawing.Color.GhostWhite;
            this.btnPing01.UseVisualStyleBackColor = false;
            this.btnPing01.Click += new System.EventHandler(this.btnPing01_Click);
            // 
            // Ping
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1208, 679);
            this.Controls.Add(this.btnPing01);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.txtip);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Ping";
            this.Text = "Ping";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox txtip;
        private System.Windows.Forms.TextBox textBox2;
        private Controls.RoundedButton btnPing01;
    }
}