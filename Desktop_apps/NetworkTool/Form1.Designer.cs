
namespace NetworkTool
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.panelside = new System.Windows.Forms.Panel();
            this.btnping = new System.Windows.Forms.Button();
            this.btnHome = new System.Windows.Forms.Button();
            this.btnToGpresult = new System.Windows.Forms.Button();
            this.btnToGPUptate = new System.Windows.Forms.Button();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.btnccache = new System.Windows.Forms.Button();
            this.btntrace = new System.Windows.Forms.Button();
            this.panel3 = new System.Windows.Forms.Panel();
            this.panel1 = new System.Windows.Forms.Panel();
            this.lbllogonuser = new System.Windows.Forms.Label();
            this.lblhostname = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.mainpanel = new System.Windows.Forms.Panel();
            this.panelheader = new System.Windows.Forms.Panel();
            this.label2 = new System.Windows.Forms.Label();
            this.panel2 = new System.Windows.Forms.Panel();
            this.button1 = new System.Windows.Forms.Button();
            this.btnexit = new System.Windows.Forms.Button();
            this.shadowPanel1 = new NetworkTool.Controls.ShadowPanel();
            this.panelside.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.panel3.SuspendLayout();
            this.panel1.SuspendLayout();
            this.panelheader.SuspendLayout();
            this.shadowPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // panelside
            // 
            this.panelside.BackColor = System.Drawing.SystemColors.ButtonShadow;
            this.panelside.Controls.Add(this.btnping);
            this.panelside.Controls.Add(this.btnHome);
            this.panelside.Controls.Add(this.btnToGpresult);
            this.panelside.Controls.Add(this.btnToGPUptate);
            this.panelside.Controls.Add(this.pictureBox1);
            this.panelside.Controls.Add(this.btnccache);
            this.panelside.Controls.Add(this.btntrace);
            this.panelside.Controls.Add(this.panel3);
            this.panelside.Controls.Add(this.label1);
            this.panelside.Location = new System.Drawing.Point(-2, 13);
            this.panelside.Name = "panelside";
            this.panelside.Size = new System.Drawing.Size(257, 651);
            this.panelside.TabIndex = 0;
            this.panelside.Paint += new System.Windows.Forms.PaintEventHandler(this.panelside_Paint);
            // 
            // btnping
            // 
            this.btnping.BackColor = System.Drawing.SystemColors.ButtonShadow;
            this.btnping.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.btnping.FlatAppearance.BorderSize = 0;
            this.btnping.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Purple;
            this.btnping.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnping.Font = new System.Drawing.Font("Century Gothic", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnping.ForeColor = System.Drawing.Color.White;
            this.btnping.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnping.Location = new System.Drawing.Point(5, 343);
            this.btnping.Name = "btnping";
            this.btnping.Size = new System.Drawing.Size(252, 53);
            this.btnping.TabIndex = 0;
            this.btnping.Text = "Ping";
            this.btnping.UseVisualStyleBackColor = false;
            this.btnping.Click += new System.EventHandler(this.button1_Click);
            // 
            // btnHome
            // 
            this.btnHome.BackColor = System.Drawing.SystemColors.ButtonShadow;
            this.btnHome.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.btnHome.FlatAppearance.BorderSize = 0;
            this.btnHome.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Purple;
            this.btnHome.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnHome.Font = new System.Drawing.Font("Century Gothic", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnHome.ForeColor = System.Drawing.Color.White;
            this.btnHome.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnHome.Location = new System.Drawing.Point(5, 284);
            this.btnHome.Name = "btnHome";
            this.btnHome.Size = new System.Drawing.Size(252, 53);
            this.btnHome.TabIndex = 8;
            this.btnHome.Text = "General";
            this.btnHome.UseVisualStyleBackColor = false;
            this.btnHome.Click += new System.EventHandler(this.btnHome_Click);
            // 
            // btnToGpresult
            // 
            this.btnToGpresult.BackColor = System.Drawing.SystemColors.ButtonShadow;
            this.btnToGpresult.BackgroundImage = global::NetworkTool.Properties.Resources.ping;
            this.btnToGpresult.FlatAppearance.BorderSize = 0;
            this.btnToGpresult.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Purple;
            this.btnToGpresult.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnToGpresult.Font = new System.Drawing.Font("Century Gothic", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnToGpresult.ForeColor = System.Drawing.Color.White;
            this.btnToGpresult.Location = new System.Drawing.Point(5, 579);
            this.btnToGpresult.Name = "btnToGpresult";
            this.btnToGpresult.Size = new System.Drawing.Size(252, 53);
            this.btnToGpresult.TabIndex = 7;
            this.btnToGpresult.Text = "GPResult";
            this.btnToGpresult.UseVisualStyleBackColor = false;
            this.btnToGpresult.Click += new System.EventHandler(this.btnToGpresult_Click);
            // 
            // btnToGPUptate
            // 
            this.btnToGPUptate.BackColor = System.Drawing.SystemColors.ButtonShadow;
            this.btnToGPUptate.BackgroundImage = global::NetworkTool.Properties.Resources.ping;
            this.btnToGPUptate.FlatAppearance.BorderSize = 0;
            this.btnToGPUptate.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Purple;
            this.btnToGPUptate.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnToGPUptate.Font = new System.Drawing.Font("Century Gothic", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnToGPUptate.ForeColor = System.Drawing.Color.White;
            this.btnToGPUptate.Location = new System.Drawing.Point(5, 520);
            this.btnToGPUptate.Name = "btnToGPUptate";
            this.btnToGPUptate.Size = new System.Drawing.Size(252, 53);
            this.btnToGPUptate.TabIndex = 6;
            this.btnToGPUptate.Text = "Gpupdate";
            this.btnToGPUptate.UseVisualStyleBackColor = false;
            this.btnToGPUptate.Click += new System.EventHandler(this.btnToGPUptate_Click);
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackColor = System.Drawing.SystemColors.ButtonShadow;
            this.pictureBox1.BackgroundImage = global::NetworkTool.Properties.Resources.traceRoute;
            this.pictureBox1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.pictureBox1.Location = new System.Drawing.Point(34, 17);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(195, 100);
            this.pictureBox1.TabIndex = 3;
            this.pictureBox1.TabStop = false;
            this.pictureBox1.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // btnccache
            // 
            this.btnccache.BackColor = System.Drawing.SystemColors.ButtonShadow;
            this.btnccache.BackgroundImage = global::NetworkTool.Properties.Resources.ping;
            this.btnccache.FlatAppearance.BorderSize = 0;
            this.btnccache.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Purple;
            this.btnccache.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnccache.Font = new System.Drawing.Font("Century Gothic", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnccache.ForeColor = System.Drawing.Color.White;
            this.btnccache.Location = new System.Drawing.Point(5, 461);
            this.btnccache.Name = "btnccache";
            this.btnccache.Size = new System.Drawing.Size(252, 53);
            this.btnccache.TabIndex = 2;
            this.btnccache.Text = "ClearCache";
            this.btnccache.UseVisualStyleBackColor = false;
            this.btnccache.Click += new System.EventHandler(this.btnccache_Click);
            // 
            // btntrace
            // 
            this.btntrace.BackColor = System.Drawing.SystemColors.ButtonShadow;
            this.btntrace.FlatAppearance.BorderSize = 0;
            this.btntrace.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Purple;
            this.btntrace.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btntrace.Font = new System.Drawing.Font("Century Gothic", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btntrace.ForeColor = System.Drawing.Color.White;
            this.btntrace.Location = new System.Drawing.Point(5, 402);
            this.btntrace.Name = "btntrace";
            this.btntrace.Size = new System.Drawing.Size(252, 53);
            this.btntrace.TabIndex = 1;
            this.btntrace.Text = "Traceroute";
            this.btntrace.UseVisualStyleBackColor = false;
            this.btntrace.Click += new System.EventHandler(this.btntrace_Click);
            // 
            // panel3
            // 
            this.panel3.BackColor = System.Drawing.Color.Purple;
            this.panel3.Controls.Add(this.panel1);
            this.panel3.Location = new System.Drawing.Point(17, 140);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(226, 120);
            this.panel3.TabIndex = 0;
            // 
            // panel1
            // 
            this.panel1.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.panel1.BackColor = System.Drawing.SystemColors.ControlLightLight;
            this.panel1.Controls.Add(this.lbllogonuser);
            this.panel1.Controls.Add(this.lblhostname);
            this.panel1.Location = new System.Drawing.Point(17, 9);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(195, 99);
            this.panel1.TabIndex = 10;
            this.panel1.Paint += new System.Windows.Forms.PaintEventHandler(this.panel1_Paint);
            // 
            // lbllogonuser
            // 
            this.lbllogonuser.AutoSize = true;
            this.lbllogonuser.Font = new System.Drawing.Font("Century Gothic", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lbllogonuser.Location = new System.Drawing.Point(3, 20);
            this.lbllogonuser.Name = "lbllogonuser";
            this.lbllogonuser.Size = new System.Drawing.Size(94, 21);
            this.lbllogonuser.TabIndex = 5;
            this.lbllogonuser.Text = "Logon User";
            this.lbllogonuser.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.lbllogonuser.Click += new System.EventHandler(this.label2_Click);
            // 
            // lblhostname
            // 
            this.lblhostname.AutoSize = true;
            this.lblhostname.Font = new System.Drawing.Font("Century Gothic", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.lblhostname.Location = new System.Drawing.Point(3, 56);
            this.lblhostname.Name = "lblhostname";
            this.lblhostname.Size = new System.Drawing.Size(80, 21);
            this.lblhostname.TabIndex = 4;
            this.lblhostname.Text = "PCName";
            this.lblhostname.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            this.lblhostname.Click += new System.EventHandler(this.label1_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 11F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label1.ForeColor = System.Drawing.Color.Purple;
            this.label1.Location = new System.Drawing.Point(17, 251);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(229, 30);
            this.label1.TabIndex = 9;
            this.label1.Text = "________________________";
            // 
            // mainpanel
            // 
            this.mainpanel.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.mainpanel.Location = new System.Drawing.Point(230, 30);
            this.mainpanel.Name = "mainpanel";
            this.mainpanel.Size = new System.Drawing.Size(978, 648);
            this.mainpanel.TabIndex = 2;
            this.mainpanel.Paint += new System.Windows.Forms.PaintEventHandler(this.mainpanel_Paint);
            // 
            // panelheader
            // 
            this.panelheader.AccessibleRole = System.Windows.Forms.AccessibleRole.TitleBar;
            this.panelheader.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.panelheader.Controls.Add(this.label2);
            this.panelheader.Controls.Add(this.panel2);
            this.panelheader.Controls.Add(this.button1);
            this.panelheader.Controls.Add(this.btnexit);
            this.panelheader.Dock = System.Windows.Forms.DockStyle.Top;
            this.panelheader.Location = new System.Drawing.Point(0, 0);
            this.panelheader.Name = "panelheader";
            this.panelheader.Size = new System.Drawing.Size(1208, 38);
            this.panelheader.TabIndex = 1;
            this.panelheader.MouseDown += new System.Windows.Forms.MouseEventHandler(this.panelheader_MouseDown);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI", 7F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label2.Location = new System.Drawing.Point(71, 10);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(86, 19);
            this.label2.TabIndex = 9;
            this.label2.Text = "NetworkTool";
            // 
            // panel2
            // 
            this.panel2.BackgroundImage = global::NetworkTool.Properties.Resources.logo;
            this.panel2.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.panel2.Location = new System.Drawing.Point(12, 3);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(53, 35);
            this.panel2.TabIndex = 8;
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.button1.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.button1.FlatAppearance.BorderSize = 0;
            this.button1.FlatAppearance.MouseOverBackColor = System.Drawing.Color.DimGray;
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button1.Font = new System.Drawing.Font("Century Gothic", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.button1.ForeColor = System.Drawing.Color.White;
            this.button1.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.button1.Location = new System.Drawing.Point(1105, 0);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(51, 38);
            this.button1.TabIndex = 7;
            this.button1.Text = "-";
            this.button1.TextAlign = System.Drawing.ContentAlignment.TopCenter;
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click_1);
            // 
            // btnexit
            // 
            this.btnexit.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.btnexit.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Zoom;
            this.btnexit.FlatAppearance.BorderSize = 0;
            this.btnexit.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Red;
            this.btnexit.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnexit.Font = new System.Drawing.Font("Century Gothic", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnexit.ForeColor = System.Drawing.Color.White;
            this.btnexit.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.btnexit.Location = new System.Drawing.Point(1156, 0);
            this.btnexit.Name = "btnexit";
            this.btnexit.Size = new System.Drawing.Size(52, 38);
            this.btnexit.TabIndex = 6;
            this.btnexit.Text = "x";
            this.btnexit.TextAlign = System.Drawing.ContentAlignment.TopCenter;
            this.btnexit.UseVisualStyleBackColor = false;
            this.btnexit.Click += new System.EventHandler(this.btnexit_Click);
            // 
            // shadowPanel1
            // 
            this.shadowPanel1.BackColor = System.Drawing.SystemColors.ButtonShadow;
            this.shadowPanel1.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.shadowPanel1.Controls.Add(this.panelside);
            this.shadowPanel1.Location = new System.Drawing.Point(-5, 12);
            this.shadowPanel1.Name = "shadowPanel1";
            this.shadowPanel1.Size = new System.Drawing.Size(257, 693);
            this.shadowPanel1.TabIndex = 0;
            this.shadowPanel1.Paint += new System.Windows.Forms.PaintEventHandler(this.shadowPanel1_Paint);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(10F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1208, 679);
            this.Controls.Add(this.panelheader);
            this.Controls.Add(this.shadowPanel1);
            this.Controls.Add(this.mainpanel);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "NetworkTool";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.panelside.ResumeLayout(false);
            this.panelside.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.panel3.ResumeLayout(false);
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.panelheader.ResumeLayout(false);
            this.panelheader.PerformLayout();
            this.shadowPanel1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panelside;
        private System.Windows.Forms.Panel panelheader;
        private System.Windows.Forms.Panel mainpanel;
        private System.Windows.Forms.Button btnccache;
        private System.Windows.Forms.Button btnping;
        private System.Windows.Forms.Button btntrace;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Button btnexit;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button btnToGPUptate;
        private System.Windows.Forms.Button btnToGpresult;
        private System.Windows.Forms.Button btnHome;
        private System.Windows.Forms.Label label1;
        private Controls.ShadowPanel shadowPanel1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label lbllogonuser;
        private System.Windows.Forms.Label lblhostname;
        private System.Windows.Forms.Panel panel3;
    }
}

