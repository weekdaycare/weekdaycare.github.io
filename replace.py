import os
import re
import requests
import time

def upload_image(image_path, auth_token):
    url = "https://7bu.top/api/v1/upload"
    headers = {
        "Authorization": f"Bearer {auth_token}",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }
    files = {'file': open(image_path, 'rb')}
    try:
        response = requests.post(url, headers=headers, files=files)
        response.raise_for_status()  # 将引发异常的响应（如4xx或5xx）触发异常
        data = response.json()
        if data.get('status'):
            return data['data']['links']['url']
        else:
            raise Exception(f"Upload failed: {data.get('message')}")
    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error: {e}")
    except requests.exceptions.ConnectionError as e:
        print(f"Connection Error: {e}")
    except requests.exceptions.Timeout as e:
        print(f"Timeout Error: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
    time.sleep(1)  # 简单的限流措施，避免请求过快

def process_markdown_files(source_dir, auth_token):
    for root, dirs, files in os.walk(source_dir):
        for file in files:
            if file.endswith(".md"):
                print(f"Processing {file}...")
                file_path = os.path.join(root, file)
                with open(file_path, 'r+', encoding='utf-8') as f:
                    content = f.read()
                    images = re.findall(r'!\[.*?\]\((img/.+?)\)', content)
                    for image in images:
                        image_path = os.path.join(source_dir, image)
                        if os.path.exists(image_path):
                            image_url = upload_image(image_path, auth_token)
                            content = content.replace(f"![]({image})", f"![]({image_url})")
                            os.remove(image_path)
                            print(f"Deleted {image_path}")
                    if images:
                        f.seek(0)
                        f.write(content)
                        f.truncate()

if __name__ == "__main__":
    source_dir = './source'
    auth_token = os.getenv('IMAGE_UPLOAD_TOKEN')
    if not auth_token:
        raise ValueError("IMAGE_UPLOAD_TOKEN is not set.")
    print("Starting image upload and link replacement...")
    process_markdown_files(source_dir, auth_token)
