import os

unused_files = [
    "public/assets/ECOBIER 02 - SOCORRO.mp4",
    "public/assets/premium 350ml.pdf",
    "public/assets/ecobier chopp caneca.mp4",
    "public/assets/CHOPINHO .mov",
    "public/assets/dji_fly_20250411_113922_831_1744382389369_photo.jpg",
    "public/assets/MANUAL DE USO DA MARCA ECOBIER.pdf"
]

for f in unused_files:
    if os.path.exists(f):
        os.remove(f)
        print(f"Deleted: {f}")
    else:
        print(f"File not found: {f}")
