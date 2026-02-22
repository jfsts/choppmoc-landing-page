import os
from PIL import Image

assets_dir = 'public/assets'

for filename in os.listdir(assets_dir):
    filepath = os.path.join(assets_dir, filename)
    
    # Compress massive Jpegs down to web-friendly versions
    if filename.startswith('dji_fly_') and filename.endswith('.jpg'):
        size_mb = os.path.getsize(filepath) / (1024*1024)
        if size_mb > 3:  # Only compress the massive originals
            print(f"Compressing {filename} ({size_mb:.2f} MB)...")
            img = Image.open(filepath)
            
            # Resize if bigger than 1920px width
            max_width = 1920
            w, h = img.size
            if w > max_width:
                img = img.resize((max_width, int(max_width * h / w)), Image.Resampling.LANCZOS)
                
            img.save(filepath, "JPEG", optimize=True, quality=80)
            print(f"Finished {filename}. New size: {os.path.getsize(filepath)/(1024*1024):.2f} MB")
            
    # Compress 28MB Copo Joinvile PNG
    elif filename == 'Copo_Joinvile_EcobierChopp.png':
        size_mb = os.path.getsize(filepath) / (1024*1024)
        if size_mb > 5:
            print(f"Compressing {filename} ({size_mb:.2f} MB)...")
            img = Image.open(filepath)
            
            max_width = 1000
            w, h = img.size
            if w > max_width:
                img = img.resize((max_width, int(max_width * h / w)), Image.Resampling.LANCZOS)
                
            img.save(filepath, "PNG", optimize=True)
            print(f"Finished {filename}. New size: {os.path.getsize(filepath)/(1024*1024):.2f} MB")

print("Compression complete.")
