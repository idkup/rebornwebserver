import cv2

for i in range(807):
    str_z = str(i+1).zfill(3)
    fn = f"icons/icon{str_z}.png"
    print(fn)
    img = cv2.imread(fn, -1)
    crop_img = img[0:64, 0:64]
    cv2.imwrite(f"new_icons/{i+1}.png", crop_img)