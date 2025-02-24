---
sidebar_position: 3
---
# 🖼️ Image Generation
**Method:** `generate_image()`

Generate images from text prompts using various image generation models.

#### 📝 Example Usage
```python
from omnilabs import OmniClient

client = OmniClient()
response = client.generate_image(
    prompt='A futuristic city at sunset',
    model='dall-e-3',
    size='1024x1024',
    quality='standard',
    n=1
)
print(response['urls'][0])  # URL of the generated image
```

#### 🔹Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `prompt` | `str` | The text prompt for image generation |
| `model` | `str` | The model ID to use (default: `"dall-e-3"`) |
| `size` | `Literal["256x256", "512x512", "1024x1024"]` | Image resolution (default: `"1024x1024"`) |
| `quality` | `Literal["standard", "hd"]` | Image quality (default: `"standard"`) |
| `n` | `int` | Number of images to generate (default: `1`) |

#### 🔹Response Format
```json
{
    "urls": ["https://hosted-url.com/image.png"],
    "model": "dall-e-3",
    "provider": "openai"
}
```

