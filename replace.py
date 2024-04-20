import os
import re
import requests

def upload_image(image_path, auth_token):
    print(f"Attempting to upload {image_path}")
    url = "https://7bu.top/api/v1/upload"
    headers = {
        "Authorization": f"Bearer {auth_token}",
        "Accept": "application/json"
    }
    files = {'file': open(image_path, 'rb')}
    response = requests.post(url, headers=headers, files=files)
    if response.status_code == 200 and response.json()['status']:
        print(f"Upload successful: {response.json()['data']['links']['url']}")
        return response.json()['data']['links']['url']
    else:
        raise Exception(f"Failed to upload image {image_path}: {response.text}")

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
    auth_token = 'os.getenv('IMAGE_UPLOAD_TOKEN')'
    if not auth_token:
        raise ValueError("IMAGE_UPLOAD_TOKEN is not set.")
    print("Starting image upload and link replacement...")
    process_markdown_files(source_dir, auth_token)
