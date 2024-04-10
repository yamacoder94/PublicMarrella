using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.ComponentModel;

namespace NetworkTool.Controls
{
    public class RoundedButton : Button
    {
        //Fields
        private int borderSize = 0;
        private int borderRadius = 40;
        private Color bordeColor = Color.PaleVioletRed;

        public int BorderSize {
            get { 
                return borderSize; 
            }
            set { 
                borderSize = value;
                this.Invalidate();
            } 
        }
        [Category("Yamas")]
        public int BorderRadius {
            get { return borderRadius; }
            set { borderRadius = value;
                this.Invalidate();
            }
        }
        [Category("Yamas")]
        public Color BordeColor {
            get { return bordeColor; }
            set { bordeColor = value;
                this.Invalidate();
            }
        }
        [Category("Yamas")]
        public Color BackgroundColor
        {
            get { return this.BackColor; }
            set { this.BackColor = value; }
        
        }

        [Category ("Yamas")]
        public Color TextColor
        {
            get { return this.ForeColor; }
            set { this.ForeColor = value; }

        }

        //Constructor
        public RoundedButton()
        {
            this.FlatStyle = FlatStyle.Flat;
            this.FlatAppearance.BorderSize = 0;
            this.Size = new Size(150, 40);
            this.BackColor = Color.MediumSlateBlue;
            this.ForeColor = Color.White;
        }

        //methods
        private GraphicsPath GetFigurePath(RectangleF rect , float radius)
        {
            GraphicsPath path = new GraphicsPath();
            path.StartFigure();
            path.AddArc(rect.X, rect.Y, radius,radius, 180, 90);
            path.AddArc(rect.Width-radius,rect.Y,radius,radius,270,90);
            path.AddArc(rect.Width - radius, rect.Height-radius, radius, radius, 0, 90);
            path.AddArc(rect.X, rect.Height - radius, radius, radius, 90, 90);

            return path;
        }

        protected override void OnPaint(PaintEventArgs pevent)
        {
            base.OnPaint(pevent);
            pevent.Graphics.SmoothingMode = SmoothingMode.AntiAlias;

            RectangleF rectSurface = new RectangleF(0, 0, this.Width, this.Height);
            RectangleF rectBorder = new RectangleF(1, 1, this.Width - 0.8F, this.Height - 1);

            if (BorderRadius > 2) //Rounded button
            {
                using (GraphicsPath pathSurface = GetFigurePath(rectSurface, BorderRadius)) 
                using (GraphicsPath pathBorder = GetFigurePath(rectBorder, BorderRadius - 1F)) 
                using (Pen penSurface = new Pen(this.Parent.BackColor,2)) 
                using (Pen penBorder = new Pen(BordeColor, BorderSize))
                {
                    penBorder.Alignment = PenAlignment.Inset;
                    //Button surface
                    this.Region = new Region(pathSurface);
                    //Draw surface border for HD result
                    pevent.Graphics.DrawPath(penSurface, pathSurface);

                    //Button border
                    if (BorderSize >= 1)
                        pevent.Graphics.DrawPath(penBorder, pathBorder);
                }
            }
            else //Normal button
            {
                //Button surface
                this.Region = new Region(rectSurface);
                
                //Button border
                if(BorderSize >=1)
                {
                    using (Pen penBorder = new Pen(BordeColor, BorderSize))
                    {
                        penBorder.Alignment = PenAlignment.Inset;
                        pevent.Graphics.DrawRectangle(penBorder, 0, 0, this.Width - 1, this.Height - 1);
                    }
                }
            }
        }

        protected override void OnHandleCreated(EventArgs e)
        {
            base.OnHandleCreated(e);
            this.Parent.BackColorChanged += new EventHandler(Container_BackColorChanged);
        
        }

        private void Container_BackColorChanged(object sender, EventArgs e)
        {
            if (this.DesignMode)
                this.Invalidate();
        
        }
    }
}

