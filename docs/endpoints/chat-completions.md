---
sidebar_position: 2
---
# 🗨️ Chat Completions
**Method:** `chat()`

Send chat completion requests to various LLM models through a unified interface.

#### 📝 Example Usage
```python
from omnilabs import OmniClient, ChatMessage

client = OmniClient()

# Using ChatMessage objects
messages = [
    ChatMessage(role="system", content="You are a helpful assistant."),
    ChatMessage(role="user", content="Tell me a joke.")
]

# Or using dictionaries
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Tell me a joke."}
]

response = client.chat(
    messages=messages,
    model='gpt-4',
    temperature=0.7,
    max_tokens=100
)
print(response['content'])
```

#### 🔹Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `messages` | `List[Union[Dict[str, str], ChatMessage]]` | List of messages. Each message can be a dictionary with 'role' and 'content' keys, or a ChatMessage object. |
| `model` | `str` | The model ID to use. |
| `temperature` | `float` | Sampling temperature (default: `0.7`). |
| `max_tokens` | `Optional[int]` | Maximum tokens to generate. If None, uses model default. |
| `stream` | `bool` | Whether to stream the response (default: `False`). |

#### 🔹Response Format
```json
{
    "model": "claude-3-5-sonnet-20241022",
    "content": "Generated content",
    "provider": "anthropic",
    "usage": {
        "all_tokens": 23,
        "total_cost": 0.00001
    }
}
```
---
### Smart Model Selection
OmniRouter also provides a unique smart model selection feature through the `smart_select()` method:

```python
response = client.smart_select(
    messages=[ChatMessage(role="user", content="Solve this calculus problem: ∫x²dx")],
    rel_accuracy=0.8,  # Prioritize accuracy
    rel_cost=0.2,
    verbose=True
)
print(f"Selected model: {response['model']}")
print(f"Response: {response['content']}")
```

This feature automatically selects the best model based on your specific needs, balancing factors like accuracy, cost, and latency.

---