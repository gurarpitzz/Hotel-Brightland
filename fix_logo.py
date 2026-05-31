from PIL import Image
import os

filepath = r"e:\ZWorks\Hotel BrightLand\webapp\public\assets\logo\logo.png"
if os.path.exists(filepath):
    img = Image.open(filepath)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    newData = []
    # threshold for black
    for item in datas:
        # if pixel is black or very dark
        if item[0] < 30 and item[1] < 30 and item[2] < 30:
            newData.append((0, 0, 0, 0)) # transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(filepath, "PNG")
    print("Logo transparency fixed.")
else:
    print("Logo not found.")
