---
sidebar_position: 2
---
# 🗨️ Chat Completions
**Endpoint:** `/v1/chat/completions`

This function allows you to send a chat request to the API.

#### 📝 Usage
```python
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Tell me a joke."}
]
response = client.chat(messages, model='gpt-4', temperature=0.7, max_tokens=100)
print(response)
```

#### 🔹 Parameters
| Parameter   | Type  | Description |
|------------|-------|-------------|
| `messages` | `list` | A list of dictionaries containing 'role' and 'content'. |
| `model` | `str` | The model ID to use. |
| `temperature` | `float` | Sampling temperature (default: `0.7`). |
| `max_tokens` | `int` | Maximum number of tokens to generate (default: `100`). |


#### 🔹 Response Example
```json
{
    model:"claude-3-5-sonnet-20241022",
    content:"Generated content",
    provider: "anthropic",
    usage: {
        all_tokens: 23,
        total_cost: 0.00001
    }
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `model` | string | Name of the model used |
| `content` | string | Generated content from the model |
| `provider` | string | Provider that generated the response (e.g., "OpenAI", "Anthropic") |
| `usage` | object | Token usage statistics containing prompt, completion, and total token counts |
---