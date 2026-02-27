import os
from PIL import Image

input_path = 'public/assets/Foto de perfil - Chopp Moc 1.png'
output_path = 'public/assets/choppmoc-logo-social.jpg'

print(f"Opening {input_path}...")
img = Image.open(input_path)

# Convert to RGB (in case it's RGBA PNG) so we can save as JPEG
if img.mode in ("RGBA", "P"):
    img = img.convert("RGB")

# Force 800x800 thumbnail for optimal WhatsApp scaling
max_width = 800
w, h = img.size
if w > max_width or h > max_width:
    img.thumbnail((max_width, max_width), Image.Resampling.LANCZOS)

# Save as highly optimized JPG
img.save(output_path, "JPEG", optimize=True, quality=85)

size_kb = os.path.getsize(output_path) / 1024
print(f"Saved optimized social image to {output_path} ({size_kb:.2f} KB)")
