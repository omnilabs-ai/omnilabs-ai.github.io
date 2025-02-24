---
sidebar_position: 4
---
# 🎯 Smart Model Selection
**Method:** `smart_select()`

OmniRouter provides a unique smart model selection feature that automatically chooses the best model for your specific needs by balancing factors like accuracy, cost, and latency.

#### 📝 Example Usage
```python
from omnilabs import OmniClient, ChatMessage

client = OmniClient()
response = client.smart_select(
    messages=[ChatMessage(role="user", content="Solve this calculus problem: ∫x²dx")],
    rel_accuracy=0.8,  # Prioritize accuracy
    rel_cost=0.2,
    verbose=True
)
print(f"Selected model: {response['model']}")
print(f"Response: {response['content']}")
```

#### 🔹Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `messages` | `List[Union[Dict[str, str], ChatMessage]]` | The chat messages to analyze for model selection |
| `k` | `int` | Number of top models to consider (default: `5`) |
| `model_names` | `Optional[List[str]]` | Specific models to select from (default: `None`) |
| `rel_cost` | `float` | Relative importance of cost (0-1) (default: `0.5`) |
| `rel_latency` | `float` | Relative importance of latency (0-1) (default: `0.0`) |
| `rel_accuracy` | `float` | Relative importance of accuracy (0-1) (default: `0.5`) |
| `verbose` | `bool` | Whether to return detailed explanation (default: `False`) |

#### 🔹Response Format
```json
{
    "model": "gpt-4",
    "content": "Generated response",
    "explanation": "Selected GPT-4 due to high accuracy requirements...",
    "provider": "openai",
    "usage": {
        "all_tokens": 45,
        "total_cost": 0.00002
    }
}
```

The smart selection algorithm considers:
- **Accuracy**: How well the model performs on complex tasks
- **Cost**: Token pricing and efficiency
- **Latency**: Response time for generation

You can adjust these priorities using the relative importance parameters (`rel_cost`, `rel_latency`, `rel_accuracy`).

--- 