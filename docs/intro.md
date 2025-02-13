---
sidebar_label: 'Quickstart'
sidebar_position: 1
---

# OmniAPI Documentation

## 📌 Introduction
OmniAPI is a powerful API client for interacting with language and image models. This documentation provides a quick start guide and detailed descriptions of each functionality.

---

## 🚀 Quickstart

### Installation
To install the package, use pip:
```sh
pip install omniapi
```

### Setting Up the API Client
First, initialize the `APIClient` by providing an API key manually or setting it as an environment variable.

#### Option 1: Initialize with API Key
```python
from omniapi import APIClient
client = APIClient(api_key='your-api-key-here')
```

#### Option 2: Use Environment Variable
```sh
export OMNI_API_KEY='your-api-key-here'
```
```python
client = APIClient()
```