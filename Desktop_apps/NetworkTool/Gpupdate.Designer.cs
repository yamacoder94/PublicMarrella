
namespace NetworkTool
{
    partial class Gpupdate
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
            this.label1 = new System.Windows.Forms.Label();
            this.btnUpdate01 = new NetworkTool.Controls.RoundedButton();
            this.SuspendLayout();
            // 
            // textBox2
            // 
            this.textBox2.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.textBox2.Location = new System.Drawing.Point(134, 273);
            this.textBox2.Multiline = true;
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new System.Drawing.Size(918, 276);
            this.textBox2.TabIndex = 13;
            // 
            // label1
            // 
            this.label1.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Century Gothic", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(443, 77);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(300, 34);
            this.label1.TabIndex = 11;
            this.label1.Text = "Update Group Policy";
            // 
            // btnUpdate01
            // 
            this.btnUpdate01.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.btnUpdate01.BackColor = System.Drawing.Color.Purple;
            this.btnUpdate01.BackgroundColor = System.Drawing.Color.Purple;
            this.btnUpdate01.BordeColor = System.Drawing.Color.PaleVioletRed;
            this.btnUpdate01.BorderRadius = 40;
            this.btnUpdate01.BorderSize = 0;
            this.btnUpdate01.FlatAppearance.BorderSize = 0;
            this.btnUpdate01.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnUpdate01.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnUpdate01.ForeColor = System.Drawing.Color.GhostWhite;
            this.btnUpdate01.Location = new System.Drawing.Point(483, 156);
            this.btnUpdate01.Name = "btnUpdate01";
            this.btnUpdate01.Size = new System.Drawing.Size(220, 79);
            this.btnUpdate01.TabIndex = 14;
            this.btnUpdate01.Text = "Update";
            this.btnUpdate01.TextColor = System.Drawing.Color.GhostWhite;
            this.btnUpdate01.UseVisualStyleBackColor = false;
            this.btnUpdate01.Click += new System.EventHandler(this.btnUpdate01_Click);
            // 
            // Gpupdate
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1186, 623);
            this.Controls.Add(this.btnUpdate01);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Gpupdate";
            this.Text = "Gpupdate";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox textBox2;
        private System.Windows.Forms.Label label1;
        private Controls.RoundedButton btnUpdate01;
    }
}