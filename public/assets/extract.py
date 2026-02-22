import pypdf

try:
    with open("MANUAL DE USO DA MARCA ECOBIER.pdf", "rb") as file:
        reader = pypdf.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        print(text)
except Exception as e:
    print(f"Error: {e}")
