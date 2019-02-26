from PIL import Image
import pytesseract
import argparse
import cv2
import os
import json
import sys

parameters = ['Sales Order Number','Date of dispatch','Expected Arrival date','Quantity','Total']

# ap = argparse.ArgumentParser()
# ap.add_argument("-i", "--image", required=True,
# 	help="path to input image to be OCR'd")
# ap.add_argument("-p", "--preprocess", type=str, default="thresh",
# 	help="type of preprocessing to be done")
# args = vars(ap.parse_args())


image = cv2.imread(sys.argv[1])
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

gray = cv2.threshold(gray, 0, 255,
		cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
 
# if args["preprocess"] == "thresh":
# 	gray = cv2.threshold(gray, 0, 255,
# 		cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
 
# elif args["preprocess"] == "blur":
# 	gray = cv2.medianBlur(gray, 3)
 
filename = "{}.png".format(os.getpid())
cv2.imwrite(filename, gray)

data={}

#storing text output in file
text = pytesseract.image_to_string(Image.open(filename))
os.remove(filename)
x=text.split("\n")
# print(x)
for i in range (0,len(parameters)):
	for j in range (0,len(x)):
		if(i!=3):
			if(x[j].find(parameters[i])>=0):
				key,v=x[j].split(':')
				data[key.lstrip().rstrip()]=v.rstrip().lstrip()
		else:
			if(x[j].find(parameters[i])>=0):
				# print(x[j+1])
				q,n,up,a=x[j+1].split(' ')
				data['quantity']=q.rstrip().lstrip()
				data['material_name']=n.rstrip().lstrip()
				data['unit_price']=up.rstrip().lstrip()
				data['amount']=a.rstrip().lstrip()
json_data=json.dumps(data, sort_keys=True, indent = 4)
print(json_data)
sys.stdout.flush()


# print("Done")

#showing output image
# cv2.imshow("Image", image)
# cv2.imshow("Output", gray)
# cv2.waitKey(0)
