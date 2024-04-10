
namespace NetworkTool
{
    partial class GPResult
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
            this.lblwaitingGP = new System.Windows.Forms.Label();
            this.lblwaitGPR = new System.Windows.Forms.Label();
            this.btnGPResult01 = new NetworkTool.Controls.RoundedButton();
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
            this.label1.Location = new System.Drawing.Point(446, 53);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(294, 34);
            this.label1.TabIndex = 11;
            this.label1.Text = "Generate GP Report";
            // 
            // lblwaitingGP
            // 
            this.lblwaitingGP.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.lblwaitingGP.AutoSize = true;
            this.lblwaitingGP.Location = new System.Drawing.Point(564, 109);
            this.lblwaitingGP.Name = "lblwaitingGP";
            this.lblwaitingGP.Size = new System.Drawing.Size(0, 25);
            this.lblwaitingGP.TabIndex = 14;
            this.lblwaitingGP.Click += new System.EventHandler(this.label2_Click);
            // 
            // lblwaitGPR
            // 
            this.lblwaitGPR.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.lblwaitGPR.AutoSize = true;
            this.lblwaitGPR.Location = new System.Drawing.Point(462, 109);
            this.lblwaitGPR.Name = "lblwaitGPR";
            this.lblwaitGPR.Size = new System.Drawing.Size(263, 25);
            this.lblwaitGPR.TabIndex = 15;
            this.lblwaitGPR.Text = " This might take up to 10 min ...";
            this.lblwaitGPR.Click += new System.EventHandler(this.lblwaitGPR_Click);
            // 
            // btnGPResult01
            // 
            this.btnGPResult01.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.btnGPResult01.BackColor = System.Drawing.Color.Purple;
            this.btnGPResult01.BackgroundColor = System.Drawing.Color.Purple;
            this.btnGPResult01.BordeColor = System.Drawing.Color.PaleVioletRed;
            this.btnGPResult01.BorderRadius = 40;
            this.btnGPResult01.BorderSize = 0;
            this.btnGPResult01.FlatAppearance.BorderSize = 0;
            this.btnGPResult01.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnGPResult01.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnGPResult01.ForeColor = System.Drawing.Color.GhostWhite;
            this.btnGPResult01.Location = new System.Drawing.Point(483, 155);
            this.btnGPResult01.Name = "btnGPResult01";
            this.btnGPResult01.Size = new System.Drawing.Size(220, 79);
            this.btnGPResult01.TabIndex = 16;
            this.btnGPResult01.Text = "Generate";
            this.btnGPResult01.TextColor = System.Drawing.Color.GhostWhite;
            this.btnGPResult01.UseVisualStyleBackColor = false;
            this.btnGPResult01.Click += new System.EventHandler(this.btnGPResult01_Click);
            // 
            // GPResult
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1186, 623);
            this.Controls.Add(this.btnGPResult01);
            this.Controls.Add(this.lblwaitGPR);
            this.Controls.Add(this.lblwaitingGP);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "GPResult";
            this.Text = "GPResult";
            this.Load += new System.EventHandler(this.GPResult_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox textBox2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label lblwaitingGP;
        private System.Windows.Forms.Label lblwaitGPR;
        private Controls.RoundedButton btnGPResult01;
    }
}