import random
import ddddocr
import execjs
from PIL import Image
from io import BytesIO
from PIL import Image
import requests

with open('顶象oppo定制.js', 'rb') as f:
    js = f.read().decode()
ctx = execjs.compile(js)
prefix = "dx-"
suffix = "-1"

random_number_1 = str(random.randrange(1000000000000, 10000000000000))
random_number_2 = str(random.randrange(1000000, 10000000))

result = prefix + random_number_1 + "-" + random_number_2 + suffix
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
}

params = (
    ('w', '288'),
    ('h', '144'),
    ('s', '50'),
    ('ak', '9624bfa96b3675a4b8f27b683882e15f'),
    ('c', '658cee79DrNFIXLYJV5RkG7B4vOzlA6yFhuQYLz1'),
    ('jsv', '1.3.41.439'),
    ('aid', result),
    ('wp', '1'),
    ('de', '0'),
    ('uid', ''),
    ('lf', '0'),
    ('tpc', ''),
    ('isDark', 'false'),
    ('wtf', 'false'),
    ('_r', '0.6218359241176445'),
)

response = requests.get('https://captcha-sec.heytapmobi.com/api/a', headers=headers, params=params).json()
# print(response)
o = response["o"]
sid=response["sid"]
url = response["p1"]
hk=response["p2"]
y=response["y"]
url = "https://captcha-sec.heytapmobi.com" + url
# print(url)
url2 = "https://captcha-sec.heytapmobi.com" + hk
# print(url2)

index_array = ctx.call('get_img', o)
# print(index_array)
img_response = requests.get(url)
img2_response = requests.get(url2)
img_data = BytesIO(img_response.content)

_img = Image.open(img_data)

arr =index_array

new_img = Image.new('RGB', (400, 200))

for index in range(len(arr)):
    c = arr[index] * 12

    l = _img.crop((c, 0, c + 12, 200))

    new_x = index * 12

    new_img.paste(l, (new_x, 0))

new_img.paste(_img.crop((384, 0, 400, 200)), (384, 0))
output_buffer = BytesIO()
new_img.save("aaa.jpg")
new_img.save(output_buffer, format="JPEG")

slide = ddddocr.DdddOcr(det=False, ocr=False)


target_bytes = img2_response.content

with open('aaa.jpg', 'rb') as f:
    background_bytes = f.read()

res = slide.slide_match(target_bytes, background_bytes, simple_target=True)
x=res["target"][0]
print(res)

x=int(x/400*288)
with open('ac.js', 'rb') as f:
    js = f.read().decode()
ctx = execjs.compile(js)
actoken=ctx.call("get_actoken",x,y,sid)
import requests

headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-type": "application/x-www-form-urlencoded",
    "Origin": "https://support.oppo.com",
    "Pragma": "no-cache",
    "Referer": "https://support.oppo.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://captcha-sec.heytapmobi.com/api/v1"
print(actoken)
data = {
    "ac": actoken,
    "ak": "9624bfa96b3675a4b8f27b683882e15f",
    "c": "658cee79DrNFIXLYJV5RkG7B4vOzlA6yFhuQYLz1",
    "jsv": "1.3.41.439",
    "sid": sid,
    "aid": "dx-1708602602463-7133609-1",
    "x":x,
    "y":y
}
response = requests.post(url, headers=headers, data=data).json()
print(response)
token=response["token"]
import requests
import json


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json; charset=UTF-8",
    "Origin": "https://support.oppo.com",
    "PersonalCaptchaToken": f"{token}:658cee79DrNFIXLYJV5RkG7B4vOzlA6yFhuQYLz1",
    "Pragma": "no-cache",
    "Referer": "https://support.oppo.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "aes-decryptkey": "KuBeOhfXx1pGIeDbF+V4ggj+RwYM1XrJw2+2bZmV8/zBdBI5sACHYODjEBmZ+XyLQ6fX+HuRtXsuey8NB2tXgy6sPrmndreiayzx9jiuJPn8ExhHEDBFSUdnk4npcDU3/VPypGZ1tCyhQ3l7Dyuh+QENZuXhssaCEcY4HFP0hlU=",
    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
url = "https://sow-cms.oppo.com/oppo-api/basic/v1/getDeviceInfo"
data = {
    "imei": "JUcIb9DI5UrAW+O298MTwb4Df/7er/U3Lk41rd/grS4=",
    "region": "cn",
    "isoLanguageCode": "zh-CN",
    "sourceRoute": "1"
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, data=data)

print(response.text)
print(response)