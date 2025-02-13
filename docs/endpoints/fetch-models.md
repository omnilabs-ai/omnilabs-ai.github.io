---
sidebar_position: 1
---
# 📌 Fetch Available Models
**Endpoints:** `/v1/models/chat`, `/v1/models/image`

Retrieve a list of available models for chat and image generation.

#### 📝 Usage
```python
all_models = client.get_available_models()
chat_models = client.get_available_models(model_type='chat')
image_models = client.get_available_models(model_type='image')
```

#### 🔹 Parameters
| Parameter   | Type  | Description |
|------------|-------|-------------|
| `model_type` | `str` | Filter by 'chat' or 'image' models. If `None`, returns all models. |

#### 🔹 Response Example
```json
[
    "gpt-4": {
        name:"gpt-4",
        provider:"openai",
        description:"OpenAI's most capable model for both language understanding and generation",
        max_tokens:8192
    },
    "claude-3-5-sonnet": {
        name:"claude-3-5-sonnet-20241022",
        provider:"anthropic",
        description:"Anthropic's balanced model for performance and efficiency",
        max_tokens:4096,
    },
    "dall-e-3": {
        name:"dall-e-3",
        provider:"openai",
        description:"OpenAI's most advanced image generation model"
    },

]
```

---