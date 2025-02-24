---
sidebar_position: 1
---
# 📌 Fetch Available Models
**Endpoints:** `/v1/models/chat`, `/v1/models/image`

This functionality allows you to query the API for a list of all supported models. You can filter by model type (chat or image).

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
        name="gpt-4",
        provider="openai",
        description=(
            "OpenAI's flagship model excelling in complex reasoning and coding. "
            "Strengths: Technical explanations, API integrations, and multi-step problem solving. "
            "Weaknesses: Higher cost, slower response times. Hallucination rate 40% higher than GPT-4o"
        ),
        max_tokens=8192,
        benchmarks={
            "MMLU": 0.864,
            "GPQA": 0.414,
            "HumanEval": 0.866,
            "MATH": 0.529,
            "BFCL": 0.883,
            "MGSM": 0.86
        },
        cost_per_million_tokens=30.0,  # cost in USD
        latency=1.1          # tokens per second
    },
    "claude-3-5-sonnet": ModelInfo(
        name="claude-3-5-sonnet-20241022",
        provider="anthropic",
        description=(
            "Claude 3.5 Sonnet is Anthropic's first release in the forthcoming Claude 3.5 model family. Claude 3.5 Sonnet raises the industry bar for intelligence, outperforming competitor models and Claude 3 Opus on a wide range of evaluations, with the speed and cost of their mid-tier model, Claude 3 Sonnet."
            "Strengths: Claude 3.5 Sonnet stands out with its ability to write, edit, and execute code effectively, making it a valuable tool for fixing bugs, migrating codebases, and handling complex coding problems. Compared to previous Claude models, Sonnet operates significantly faster, which is beneficial for tasks requiring quick turnaround times like customer support or dynamic content generation. The model demonstrates strong reasoning capabilities, allowing it to understand context and provide accurate solutions to complex problems. Sonnet is often considered a more cost-efficient option due to its faster processing speed and lower token costs compared to older Claude models. "
            "Weaknesses: While proficient in many tasks, Claude 3.5 Sonnet may not be as adept at deep analytical tasks requiring a high level of nuance and complexity compared to older models like Claude 3 Opus. Compared to other AI models, Claude might lack advanced features in areas like image recognition or scientific research depending on the specific application. "
        ),
        max_tokens=4096,
        benchmarks={
            "MMLU": 0.887,
            "GPQA": 0.594,
            "HumanEval": 0.920,
            "MATH": 0.711,
            "BFCL": 0.902,
            "MGSM": 0.916
        },
        cost_per_million_tokens=15.0, # Example cost in USD
        latency=0.97        # Example: tokens per second
    ),
    "dall-e-3": {
        name:"dall-e-3",
        provider:"openai",
        description:"OpenAI's most advanced image generation model"
    },

]
```
#### 📋 Supported Chat Models

The Omni API aggregates several state-of-the-art chat models from multiple providers. Below is the list of all chat models currently supported:

**OpenAI Models:**

* gpt-4
* gpt-3.5-turbo
* gpt-4o-mini
* gpt-4o


**Anthropic Models:**

* claude-3-opus
* claude-3-5-sonnet


**DeepSeek Models:**

* deepseek-v3
* deepseek-r1


**Gemini Models:**

* gemini-2.0-flash
* gemini-2.0-pro-exp-02-05
* gemini-2.0-flash-thinking-exp-01-21
* gemini-exp-1206


**Gemini Models:**

* gemini-2.0-flash
* gemini-2.0-pro-exp-02-05
* gemini-2.0-flash-thinking-exp-01-21
* gemini-exp-1206


**Together AI Models:**

* meta-llama/Meta-Llama-3.3-70B-Instruct-Turbo
* meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo
* Qwen/Qwen2-VL-72B-Instruct
* mistralai/Mistral-7B-Instruct-v0.2
* microsoft/WizardLM-2-8x22B


---