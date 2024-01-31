import os
import requests

response = requests.get("https://plo.mp/feed/items")
data = response.json()

count = 0  # 初始化计数器
folder_path = "your_folder_path"  # 替换为你的文件夹路径

# 创建文件夹
if not os.path.exists(folder_path):
    os.mkdir(folder_path)

for item in data:
    for key, value in item.items():
        if key == 'urls':
            urls = value
            xxLarge_url = urls.get('xxLarge')  # 使用 get 方法获取值，避免键不存在时报错
            if xxLarge_url:  # 如果 xxLarge_url 不是 None 或空字符串
                count += 1
                full_url = "https://plo.mp/" + xxLarge_url
                image_data = requests.get(full_url).content
                image_path = os.path.join('爬图/img', f"image_{count}.jpg")
                with open(image_path, "wb") as f:
                    f.write(image_data)
                print(f"已保存图片 {image_path}")

print(f"共保存 {count} 张图片.")
