
namespace NetworkTool
{
    partial class Traceroute
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
            this.textBox2 = new System.Windows.Forms.TextBox();
            this.txtip = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.btnTracert01 = new NetworkTool.Controls.RoundedButton();
            this.SuspendLayout();
            // 
            // textBox2
            // 
            this.textBox2.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.textBox2.Location = new System.Drawing.Point(145, 339);
            this.textBox2.Multiline = true;
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new System.Drawing.Size(918, 276);
            this.textBox2.TabIndex = 7;
            this.textBox2.TextChanged += new System.EventHandler(this.textBox2_TextChanged);
            // 
            // txtip
            // 
            this.txtip.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.txtip.Location = new System.Drawing.Point(260, 162);
            this.txtip.Name = "txtip";
            this.txtip.Size = new System.Drawing.Size(688, 31);
            this.txtip.TabIndex = 5;
            this.txtip.TextChanged += new System.EventHandler(this.txtip_TextChanged);
            // 
            // label1
            // 
            this.label1.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Century Gothic", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(503, 64);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(203, 34);
            this.label1.TabIndex = 4;
            this.label1.Text = "Enter IP or URL";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // btnTracert01
            // 
            this.btnTracert01.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.btnTracert01.BackColor = System.Drawing.Color.Purple;
            this.btnTracert01.BackgroundColor = System.Drawing.Color.Purple;
            this.btnTracert01.BordeColor = System.Drawing.Color.PaleVioletRed;
            this.btnTracert01.BorderRadius = 40;
            this.btnTracert01.BorderSize = 0;
            this.btnTracert01.FlatAppearance.BorderSize = 0;
            this.btnTracert01.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnTracert01.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnTracert01.ForeColor = System.Drawing.Color.GhostWhite;
            this.btnTracert01.Location = new System.Drawing.Point(494, 235);
            this.btnTracert01.Name = "btnTracert01";
            this.btnTracert01.Size = new System.Drawing.Size(220, 79);
            this.btnTracert01.TabIndex = 8;
            this.btnTracert01.Text = "Traceroute";
            this.btnTracert01.TextColor = System.Drawing.Color.GhostWhite;
            this.btnTracert01.UseVisualStyleBackColor = false;
            this.btnTracert01.Click += new System.EventHandler(this.btnTracert01_Click);
            // 
            // Traceroute
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1208, 679);
            this.Controls.Add(this.btnTracert01);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.txtip);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Traceroute";
            this.Text = "Traceroute";
            this.Load += new System.EventHandler(this.Traceroute_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox textBox2;
        private System.Windows.Forms.TextBox txtip;
        private System.Windows.Forms.Label label1;
        private Controls.RoundedButton btnTracert01;
    }
}