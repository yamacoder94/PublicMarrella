
namespace NetworkTool
{
    partial class Clearcache
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
            this.btnClearCache01 = new NetworkTool.Controls.RoundedButton();
            this.SuspendLayout();
            // 
            // textBox2
            // 
            this.textBox2.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.textBox2.Location = new System.Drawing.Point(137, 264);
            this.textBox2.Multiline = true;
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new System.Drawing.Size(918, 276);
            this.textBox2.TabIndex = 10;
            // 
            // label1
            // 
            this.label1.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Century Gothic", 14F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.Location = new System.Drawing.Point(500, 64);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(192, 34);
            this.label1.TabIndex = 8;
            this.label1.Text = "Clear Cache";
            // 
            // btnClearCache01
            // 
            this.btnClearCache01.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.btnClearCache01.BackColor = System.Drawing.Color.Purple;
            this.btnClearCache01.BackgroundColor = System.Drawing.Color.Purple;
            this.btnClearCache01.BordeColor = System.Drawing.Color.PaleVioletRed;
            this.btnClearCache01.BorderRadius = 40;
            this.btnClearCache01.BorderSize = 0;
            this.btnClearCache01.FlatAppearance.BorderSize = 0;
            this.btnClearCache01.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnClearCache01.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnClearCache01.ForeColor = System.Drawing.Color.GhostWhite;
            this.btnClearCache01.Location = new System.Drawing.Point(486, 143);
            this.btnClearCache01.Name = "btnClearCache01";
            this.btnClearCache01.Size = new System.Drawing.Size(220, 79);
            this.btnClearCache01.TabIndex = 17;
            this.btnClearCache01.Text = "Clear";
            this.btnClearCache01.TextColor = System.Drawing.Color.GhostWhite;
            this.btnClearCache01.UseVisualStyleBackColor = false;
            this.btnClearCache01.Click += new System.EventHandler(this.btnClearCache01_Click);
            // 
            // Clearcache
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1186, 623);
            this.Controls.Add(this.btnClearCache01);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Clearcache";
            this.Text = "Clearcache";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox textBox2;
        private System.Windows.Forms.Label label1;
        private Controls.RoundedButton btnClearCache01;
    }
}