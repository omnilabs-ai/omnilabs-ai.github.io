---
sidebar_position: 3
---
# 🖼️ Image Generation
**Endpoint:** `/v1/images/generate`

This function generates images from a given text prompt.

#### 📝 Usage
```python
response = client.generate_image(prompt='A futuristic city at sunset', model='dalle-3', n=1, size='1024x1024')
print(response)
```

#### 🔹 Parameters
| Parameter   | Type  | Description |
|------------|-------|-------------|
| `prompt` | `str` | The text prompt for image generation. |
| `model` | `str` | The model ID to use. |
| `n` | `int` | Number of images to generate (default: `1`). |
| `size` | `str` | Image resolution (default: `1024x1024`). |


#### 🔹 Response Example
```json
{
    urls: ["hosted-url.com"],
    model: "dall-e-3",
    provider: "openai"
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| urls | array[string] | URLs of the generated images |
| model | string | Name of the model used |
| provider | string | Provider that generated the images |


---