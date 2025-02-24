---
sidebar_label: 'Quickstart'
sidebar_position: 1
---

# OmniRouter Documentation

## 📌 Introduction
OmniRouter is a powerful API client for interacting with various Language Learning Models (LLMs) through a unified interface. It provides smart model selection, chat completions, and image generation capabilities.

---

## 🚀 Quickstart

### Installation
To install the package, use pip:
```sh
pip install omnilabs
```

### Setting Up the Client
Initialize the `OmniClient` by providing an API key manually or setting it as an environment variable.

#### Option 1: Initialize with API Key
```python
from omnilabs import OmniClient
client = OmniClient(api_key='your-api-key-here')
```

#### Option 2: Use Environment Variable
```sh
export OMNI_API_KEY='your-api-key-here'
```
```python
from omnilabs import OmniClient
client = OmniClient()
```

### Smart Model Selection
OmniRouter can automatically select the best model for your task based on your priorities:

```python
from omnilabs import OmniClient, ChatMessage

client = OmniClient()

# For complex math problems, prioritize accuracy over cost
response = client.smart_select(
    messages=[
        ChatMessage(role="user", content="Solve this calculus problem: ∫x²dx")
    ],
    rel_accuracy=0.8,  # High accuracy importance
    rel_cost=0.2,      # Lower cost importance
    verbose=True       # Get explanation of model selection
)

print(f"Selected model: {response['model']}")
print(f"Explanation: {response['explanation']}")
print(f"Response: {response['content']}")

# For creative writing, balance cost and quality
response = client.smart_select(
    messages=[
        ChatMessage(role="user", content="Write a short poem about spring")
    ],
    rel_accuracy=0.5,  # Balanced accuracy
    rel_cost=0.5,      # Balanced cost
)

print(f"Response: {response['content']}")
```

For more details on smart routing and other features, check out the respective documentation sections.

