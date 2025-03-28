import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

// New CodeBlock component
function CodeBlock({ title, code, language = 'python', lineCount = 30 }) {
  // Create line numbers
  const lineNumbers = [];
  for (let i = 1; i <= lineCount; i++) {
    lineNumbers.push(<div key={i}>{i}</div>);
  }

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    // Strip HTML tags to get clean code
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = code;
    const cleanCode = tempDiv.textContent || tempDiv.innerText;
    
    navigator.clipboard.writeText(cleanCode)
      .then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        if (copyBtn) {
          copyBtn.classList.add('copied');
          copyBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Copied!
          `;
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy
            `;
          }, 2000);
        }
      })
      .catch(err => console.error('Error copying text: ', err));
  };

  return (
    <div className="code-display">
      <div className="code-header">
        <span className="code-title">{title}</span>
        <button className="copy-btn" onClick={copyToClipboard}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy
        </button>
      </div>
      <div className="code-content">
        <div className="line-numbers">
          {lineNumbers}
        </div>
        <pre dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </div>
  );
}

export default function BetaPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState('OmniRouter');
  const [dashboardTab, setDashboardTab] = useState('dashboard');
  const [signupCount, setSignupCount] = useState(152);
  const [activeFeedbackTab, setActiveFeedbackTab] = useState('all');
  const [activeFeedbackSort, setActiveFeedbackSort] = useState('popular');
  const [showNewFeedbackForm, setShowNewFeedbackForm] = useState(false);
  const [feedbackItems, setFeedbackItems] = useState([
    {
      id: 1,
      title: 'Support for Mixtral 7x8B model',
      description: 'Add support for Mixtral 7x8B, which provides excellent performance for a range of tasks while being much more affordable than larger models.',
      type: 'feature',
      votes: 42,
      upvoted: false,
      downvoted: false,
      author: 'David L.',
      date: '3 days ago',
      comments: 5,
      status: 'planned'
    },
    {
      id: 2,
      title: 'Financial Analysis Agent',
      description: 'Create a specialized agent for analyzing financial statements, earnings reports, and market data with domain-specific knowledge of financial metrics.',
      type: 'feature',
      votes: 38,
      upvoted: false,
      downvoted: false,
      author: 'Sarah M.',
      date: '1 week ago',
      comments: 3,
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'API for Model Feedback Loop',
      description: 'Provide an API for developers to submit feedback on model responses to improve Smart Router\'s model selection over time based on real-world performance.',
      type: 'improvement',
      votes: 31,
      upvoted: false,
      downvoted: false,
      author: 'Michael K.',
      date: '2 weeks ago',
      comments: 7,
      status: 'todo'
    },
    {
      id: 4,
      title: 'Local Model Support',
      description: 'Add support for connecting to locally hosted models through OmniLabs API for users who have their own model deployments or need to work with private data.',
      type: 'feature',
      votes: 27,
      upvoted: false,
      downvoted: false,
      author: 'Alicia T.',
      date: '2 weeks ago',
      comments: 4,
      status: 'todo'
    },
    {
      id: 5,
      title: 'Smart Router is not handling rate limits properly',
      description: 'When one model hits a rate limit, the Smart Router should automatically try the next best model instead of returning an error. Currently, it fails and requires manual retry.',
      type: 'bug',
      votes: 24,
      upvoted: false,
      downvoted: false,
      author: 'James P.',
      date: '3 weeks ago',
      comments: 8,
      status: 'completed'
    },
    {
      id: 6,
      title: 'Add support for fine-tuning models through the API',
      description: 'Allow developers to fine-tune models for specific use cases through the OmniLabs API, with a simple interface for uploading training data and managing fine-tuned models.',
      type: 'feature',
      votes: 19,
      upvoted: false,
      downvoted: false,
      author: 'Olivia R.',
      date: '1 month ago',
      comments: 2,
      status: 'planned'
    },
    {
      id: 7,
      title: 'Improve error messaging for API failures',
      description: 'Current error messages are too generic and don\'t provide enough information to debug issues. Please add more specific error messages with troubleshooting suggestions.',
      type: 'improvement',
      votes: 15,
      upvoted: false,
      downvoted: false,
      author: 'Tom W.',
      date: '1 month ago',
      comments: 1,
      status: 'in-progress'
    },
    {
      id: 8,
      title: 'Python SDK documentation needs better examples',
      description: 'The documentation for the Python SDK lacks comprehensive examples, especially for more advanced use cases. Please add more detailed examples with explanations.',
      type: 'improvement',
      votes: 12,
      upvoted: false,
      downvoted: false,
      author: 'Emma S.',
      date: '2 months ago',
      comments: 3,
      status: 'completed'
    }
  ]);
  
  // Add sample data for API usage chart
  const apiUsageData = [
    { day: '1', calls: 3200 },
    { day: '2', calls: 3800 },
    { day: '3', calls: 3500 },
    { day: '4', calls: 4200 },
    { day: '5', calls: 4800 },
    { day: '6', calls: 5100 },
    { day: '7', calls: 4700 },
    { day: '8', calls: 5400 },
    { day: '9', calls: 6200 },
    { day: '10', calls: 5800 },
    { day: '11', calls: 6500 },
    { day: '12', calls: 7100 },
    { day: '13', calls: 6800 },
    { day: '14', calls: 7300 },
    { day: '15', calls: 8200 },
    { day: '16', calls: 7900 },
    { day: '17', calls: 8700 },
    { day: '18', calls: 9200 },
    { day: '19', calls: 8900 },
    { day: '20', calls: 9600 },
    { day: '21', calls: 10300 },
    { day: '22', calls: 9800 },
    { day: '23', calls: 10500 },
    { day: '24', calls: 11200 },
    { day: '25', calls: 10900 },
    { day: '26', calls: 11500 },
    { day: '27', calls: 12100 },
    { day: '28', calls: 11700 },
    { day: '29', calls: 12400 },
    { day: '30', calls: 13100 },
  ];

  // Response times data
  const responseTimesData = [
    { week: 'Week 1', time: 320 },
    { week: 'Week 2', time: 280 },
    { week: 'Week 3', time: 240 },
    { week: 'Week 4', time: 310 },
    { week: 'Week 5', time: 290 },
    { week: 'Week 6', time: 220 },
    { week: 'Week 7', time: 200 },
  ];

  // Recent activity data
  const recentActivityData = [
    { model: 'GPT-4', time: '2 min ago', tokens: 1832, status: 'success' },
    { model: 'Llama 3', time: '15 min ago', tokens: 428, status: 'success' },
    { model: 'Claude 3', time: '24 min ago', tokens: 2241, status: 'success' },
    { model: 'Browser Agent', time: '1 hour ago', tokens: 1241, status: 'success' },
    { model: 'Gemini Pro', time: '2 hours ago', tokens: 843, status: 'error' },
  ];

  // Find max value for scaling
  const maxCalls = Math.max(...apiUsageData.map(d => d.calls));
  const maxResponseTime = Math.max(...responseTimesData.map(d => d.time));

  useEffect(() => {
    // Check if we have a stored count and update the state
    const storedCount = localStorage.getItem('betaSignupCount');
    if (storedCount) {
      setSignupCount(parseInt(storedCount));
    }
    
    // Founder call radio button logic
    const callYesRadio = document.getElementById('call_yes') as HTMLInputElement;
    const callNoRadio = document.getElementById('call_no') as HTMLInputElement;
    const phoneGroup = document.getElementById('phone_group');
    const calendlyGroup = document.getElementById('calendly_group');
    
    if (callYesRadio && callNoRadio && phoneGroup && calendlyGroup) {
      callYesRadio.addEventListener('change', () => {
        phoneGroup.style.display = 'block';
        calendlyGroup.style.display = 'block';
      });
      
      callNoRadio.addEventListener('change', () => {
        phoneGroup.style.display = 'none';
        calendlyGroup.style.display = 'none';
      });
    }
    
    // Form submission
    const betaForm = document.getElementById('beta-form');
    if (betaForm) {
      betaForm.addEventListener('submit', (e) => {
        // Increment the counter in state and localStorage
        const newCount = signupCount + 1;
        setSignupCount(newCount);
        localStorage.setItem('betaSignupCount', newCount.toString());
      });
    }
    
    // Handle feedback tabs
    const feedbackButton = document.getElementById('feedback-button');
    const roadmapButton = document.getElementById('roadmap-button');
    const feedbackTab = document.getElementById('feedback-tab');
    const roadmapTab = document.getElementById('roadmap-tab');
    const showFeedbackBtn = document.getElementById('show-feedback-btn');
    
    if (feedbackButton && roadmapButton && feedbackTab && roadmapTab) {
      feedbackButton.addEventListener('click', () => {
        feedbackButton.classList.add('active');
        roadmapButton.classList.remove('active');
        feedbackTab.classList.add('active');
        roadmapTab.classList.remove('active');
      });
      
      roadmapButton.addEventListener('click', () => {
        roadmapButton.classList.add('active');
        feedbackButton.classList.remove('active');
        roadmapTab.classList.add('active');
        feedbackTab.classList.remove('active');
      });
      
      if (showFeedbackBtn) {
        showFeedbackBtn.addEventListener('click', () => {
          // Redirect directly to Featurebase instead of showing a form
          window.open('https://omnilabs.featurebase.app/changelog', '_blank');
        });
      }
    }
    
    // Handle feedback interactions
    const postFeedbackBtn = document.getElementById('post-feedback-btn');
    const newFeedbackForm = document.getElementById('new-feedback-form');
    const feedbackTypeSelect = document.getElementById('feedback-type') as HTMLSelectElement;
    const feedbackTitleInput = document.getElementById('feedback-title') as HTMLInputElement;
    const feedbackDescriptionInput = document.getElementById('feedback-description') as HTMLTextAreaElement;
    const feedbackAuthorInput = document.getElementById('feedback-author') as HTMLInputElement;
    
    if (postFeedbackBtn) {
      postFeedbackBtn.addEventListener('click', () => {
        setShowNewFeedbackForm(true);
      });
    }
    
    // Handle feedback submission
    if (newFeedbackForm) {
      newFeedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Create new feedback item
        if (feedbackTypeSelect && feedbackTitleInput && feedbackDescriptionInput && feedbackAuthorInput) {
          const newFeedback = {
            id: feedbackItems.length + 1,
            title: feedbackTitleInput.value,
            description: feedbackDescriptionInput.value,
            type: feedbackTypeSelect.value,
            votes: 1, // Start with one vote (yours)
            upvoted: true, // You upvoted your own post
            downvoted: false,
            author: feedbackAuthorInput.value || 'Anonymous',
            date: 'Just now',
            comments: 0,
            status: 'todo' // New feedback starts in 'todo' status
          };
          
          // Add to feedback items
          setFeedbackItems([newFeedback, ...feedbackItems]);
          
          // Reset form
          feedbackTypeSelect.value = '';
          feedbackTitleInput.value = '';
          feedbackDescriptionInput.value = '';
          feedbackAuthorInput.value = '';
          
          // Hide form
          setShowNewFeedbackForm(false);
        }
      });
    }
    
    // Handle feedback tabs
    const feedbackTypeTabs = document.querySelectorAll('.feedback-tab');
    feedbackTypeTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const tabType = target.getAttribute('data-type');
        if (tabType) {
          setActiveFeedbackTab(tabType);
        }
      });
    });
    
    // Handle feedback sorting
    const feedbackSortOptions = document.querySelectorAll('.feedback-sort-option');
    feedbackSortOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const sortType = target.getAttribute('data-sort');
        if (sortType) {
          setActiveFeedbackSort(sortType);
        }
      });
    });
    
    // Handle voting
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      
      // Handle upvotes
      if (target.closest('.upvote-btn')) {
        const button = target.closest('.upvote-btn') as HTMLElement;
        const id = parseInt(button.getAttribute('data-id') || '0');
        
        if (id) {
          setFeedbackItems(prevItems => 
            prevItems.map(item => {
              if (item.id === id) {
                // If already upvoted, remove upvote
                if (item.upvoted) {
                  return {...item, upvoted: false, votes: item.votes - 1};
                }
                // If downvoted, switch to upvote
                else if (item.downvoted) {
                  return {...item, upvoted: true, downvoted: false, votes: item.votes + 2};
                }
                // Otherwise add upvote
                else {
                  return {...item, upvoted: true, votes: item.votes + 1};
                }
              }
              return item;
            })
          );
        }
      }
      
      // Handle downvotes
      if (target.closest('.downvote-btn')) {
        const button = target.closest('.downvote-btn') as HTMLElement;
        const id = parseInt(button.getAttribute('data-id') || '0');
        
        if (id) {
          setFeedbackItems(prevItems => 
            prevItems.map(item => {
              if (item.id === id) {
                // If already downvoted, remove downvote
                if (item.downvoted) {
                  return {...item, downvoted: false, votes: item.votes + 1};
                }
                // If upvoted, switch to downvote
                else if (item.upvoted) {
                  return {...item, upvoted: false, downvoted: true, votes: item.votes - 2};
                }
                // Otherwise add downvote
                else {
                  return {...item, downvoted: true, votes: item.votes - 1};
                }
              }
              return item;
            })
          );
        }
      }
    });
    
    // Code Tabs Functionality
    const codeTabs = document.querySelectorAll('.code-tab');
    
    if (codeTabs.length > 0) {
      codeTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          const example = tab.getAttribute('data-example');
          if (example) {
            setActiveTab(example);
          }
        });
      });
    }
    
    // Dashboard Tab Functionality - Update to use state
    const sectionTabs = document.querySelectorAll('.section-tab');
    
    if (sectionTabs.length > 0) {
      sectionTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          // Get the section to display
          const section = tab.getAttribute('data-section');
          if (section) {
            setDashboardTab(section);
          }
        });
      });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.scrollY,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, [signupCount, feedbackItems]);

  // Filter feedback items based on active tab
  const filteredFeedbackItems = feedbackItems.filter(item => {
    if (activeFeedbackTab === 'all') return true;
    return item.type === activeFeedbackTab;
  });
  
  // Sort feedback items based on active sort
  const sortedFeedbackItems = [...filteredFeedbackItems].sort((a, b) => {
    if (activeFeedbackSort === 'popular') {
      return b.votes - a.votes;
    }
    // Most recent first (simple approximation)
    else if (activeFeedbackSort === 'recent') {
      return b.id - a.id;
    }
    // Most discussed
    else if (activeFeedbackSort === 'discussed') {
      return b.comments - a.comments;
    }
    return 0;
  });

  // Group feedback items by status
  const groupedFeedbackItems = {
    todo: sortedFeedbackItems.filter(item => item.status === 'todo'),
    inProgress: sortedFeedbackItems.filter(item => item.status === 'in-progress'),
    planned: sortedFeedbackItems.filter(item => item.status === 'planned'),
    completed: sortedFeedbackItems.filter(item => item.status === 'completed')
  };

  // Sample code snippets
  const omnirouterCode = `<span class="python-keyword">from</span> omnilabs <span class="python-keyword">import</span> OmniClient

<span class="python-comment"># Initialize the client with your API key</span>
client = OmniClient(<span class="python-string">"sk_omni_c81e728d9d4c2f636f067f89cc14862c"</span>)

<span class="python-comment"># Access any model through one unified API</span>
response = client.chat.completions.create(
    model=<span class="python-string">"gpt-4o"</span>,  <span class="python-comment"># Can use any supported model</span>
    messages=[
        {<span class="python-string">"role"</span>: <span class="python-string">"user"</span>, <span class="python-string">"content"</span>: <span class="python-string">"Explain quantum computing"</span>}
    ]
)

<span class="python-comment"># Smart Router - Let OmniRouter choose the best model</span>
smart_response = client.chat.completions.create(
    model=<span class="python-string">"auto"</span>,  <span class="python-comment"># Automatic model selection</span>
    routing_preferences={
        <span class="python-string">"accuracy"</span>: <span class="python-number">0.7</span>,  <span class="python-comment"># Prioritize accuracy</span>
        <span class="python-string">"cost"</span>: <span class="python-number">0.2</span>,      <span class="python-comment"># Some cost consideration</span>
        <span class="python-string">"speed"</span>: <span class="python-number">0.1</span>      <span class="python-comment"># Less focus on speed</span>
    },
    messages=[
        {<span class="python-string">"role"</span>: <span class="python-string">"user"</span>, <span class="python-string">"content"</span>: <span class="python-string">"Explain quantum computing"</span>}
    ]
)

<span class="python-comment"># Access model-specific details and savings</span>
<span class="python-builtin">print</span>(<span class="python-string">f"Selected model: smart_response.model"</span>)
<span class="python-builtin">print</span>(<span class="python-string">f"Cost savings: smart_response.cost_savings"</span>)`;

  const agentsCode = `<span class="python-keyword">from</span> omnilabs <span class="python-keyword">import</span> OmniClient, AgentWorkflow

<span class="python-comment"># Initialize with one API key</span>
client = OmniClient(<span class="python-string">"sk_omni_c81e728d9d4c2f636f067f89cc14862c"</span>)

<span class="python-comment"># Create agents from any framework through a unified interface</span>
web_agent = client.get_agent(<span class="python-string">"web-researcher"</span>)  <span class="python-comment"># BrowserUse underneath</span>
analyst = client.get_agent(<span class="python-string">"document-analyzer"</span>)  <span class="python-comment"># LangChain underneath</span>
writer = client.get_agent(<span class="python-string">"content-writer"</span>)  <span class="python-comment"># Claude-backed</span>

<span class="python-comment"># Build a workflow connecting multiple agents</span>
workflow = AgentWorkflow(<span class="python-string">"Research Assistant"</span>)

<span class="python-comment"># Add workflow steps with standardized interfaces</span>
workflow.add_step(web_agent, {
    <span class="python-string">"query"</span>: <span class="python-string">"Latest advancements in quantum computing 2025"</span>,
    <span class="python-string">"depth"</span>: <span class="python-string">"comprehensive"</span>
})

workflow.add_step(analyst, {
    <span class="python-comment"># Reference previous step's output</span>
    <span class="python-string">"content"</span>: <span class="python-string">"steps.0.output.text"</span>,
    <span class="python-string">"analysis_type"</span>: <span class="python-string">"key_findings"</span>
})

workflow.add_step(writer, {
    <span class="python-string">"research"</span>: <span class="python-string">"steps.0.output.text"</span>,
    <span class="python-string">"analysis"</span>: <span class="python-string">"steps.1.output.analysis"</span>,
    <span class="python-string">"format"</span>: <span class="python-string">"blog_post"</span>,
    <span class="python-string">"tone"</span>: <span class="python-string">"technical"</span>
})

<span class="python-comment"># Execute the entire workflow with one call</span>
result = client.execute_workflow(workflow)

<span class="python-comment"># Access results across all agents</span>
research_data = result.get_step_output(0).text
key_findings = result.get_step_output(1).analysis
blog_post = result.get_step_output(2).text`;

  const benchmarkCode = `<span class="python-keyword">from</span> omnilabs <span class="python-keyword">import</span> OmniClient, BenchmarkSuite

<span class="python-comment"># Initialize the client</span>
client = OmniClient(<span class="python-string">"sk_omni_c81e728d9d4c2f636f067f89cc14862c"</span>)

<span class="python-comment"># Create a benchmark comparing multiple models</span>
benchmark = client.create_benchmark(
    models=[
        <span class="python-string">"gpt-4o"</span>, 
        <span class="python-string">"claude-3-5-sonnet"</span>, 
        <span class="python-string">"gemini-pro"</span>, 
        <span class="python-string">"llama-3-70b"</span>,
        <span class="python-string">"deepseek-r1"</span>
    ],
    test_suites=[<span class="python-string">"reasoning"</span>, <span class="python-string">"coding"</span>, <span class="python-string">"math"</span>],
    metrics=[<span class="python-string">"accuracy"</span>, <span class="python-string">"cost_efficiency"</span>, <span class="python-string">"token_efficiency"</span>]
)

<span class="python-comment"># Run the benchmark</span>
results = benchmark.run()

<span class="python-comment"># Get insights and visualization</span>
<span class="python-builtin">print</span>(results.summary())
model_recommendation = results.get_best_model(
    task_type=<span class="python-string">"coding"</span>,
    priority=<span class="python-string">"accuracy"</span>
)

<span class="python-comment"># Create a custom benchmark for your specific use case</span>
custom_benchmark = client.create_custom_benchmark(
    name=<span class="python-string">"Financial Analysis Benchmark"</span>,
    test_data=[
        {<span class="python-string">"input"</span>: <span class="python-string">"Analyze these quarterly results..."</span>, <span class="python-string">"expected"</span>: []}
        <span class="python-comment"># More test cases</span>
    ],
    evaluation_criteria={
        <span class="python-string">"factual_accuracy"</span>: <span class="python-number">0.6</span>,
        <span class="python-string">"insight_quality"</span>: <span class="python-number">0.4</span>
    }
)

<span class="python-comment"># Run custom benchmark</span>
custom_results = custom_benchmark.run(
    models=[<span class="python-string">"gpt-4o"</span>, <span class="python-string">"claude-3-opus"</span>]
)

<span class="python-comment"># Visualize results</span>
custom_results.generate_report(<span class="python-string">"financial_benchmark_results.pdf"</span>)`;

  // Raw code for copy functionality
  const omnirouterCodeRaw = 
`from omnilabs import OmniClient

# Initialize the client with your API key
client = OmniClient(api_key="YOUR_API_KEY")

# Create a router with your preferred settings
router = client.create_router(
    name="my_smart_router",
    models=["gpt-4o", "claude-3-sonnet", "gemini-pro"],
    routing_strategy="cost_effective"
)

# Use the router for a simple completion
response = router.complete(
    prompt="Explain the principles behind quantum computing in simple terms."
)

print(f"Selected model: {response.model}")
print(f"Response: {response.text}")
print("Cost: $" + str(response.cost))

# Router automatically adjusts based on task complexity
complex_response = router.complete(
    prompt="Create a recursive algorithm to solve the Tower of Hanoi problem.",
    routing_strategy="high_accuracy"  # Override for this request
)`;

  const agentsCodeRaw = `from omnilabs import OmniClient

# Initialize the client with your API key
client = OmniClient(api_key="YOUR_API_KEY")

# Create an agent with web browsing capabilities
researcher = client.create_agent(
    name="web_researcher",
    capabilities=["web_search", "web_browse", "summarize"],
    models={"default": "gpt-4o", "summarization": "claude-3-haiku"}
)

# Create a document analysis agent
analyzer = client.create_agent(
    name="doc_analyzer",
    capabilities=["file_analysis", "data_extraction"],
    models={"default": "claude-3-opus"}
)

# Define a multi-step workflow
workflow = client.create_workflow(
    name="research_workflow",
    steps=[
        {
            "agent": researcher,
            "task": "Research the latest advancements in quantum computing",
            "output_variable": "research_results"
        },
        {
            "agent": analyzer,
            "task": "Extract key findings and organize by category",
            "input_variables": ["research_results"],
            "output_variable": "organized_findings"
        }
    ]
)

# Execute the workflow
result = workflow.execute()
print(result.organized_findings)`;

  const benchmarkCodeRaw = `from omnilabs import OmniClient, OmniBenchmark

# Initialize the client with your API key
client = OmniClient(api_key="YOUR_API_KEY")

# Define models to benchmark
models = [
    "gpt-4o",
    "claude-3-opus",
    "claude-3-sonnet",
    "gemini-pro",
    "llama-3-70b"
]

# Create a benchmark with specific tests
benchmark = OmniBenchmark(
    name="reasoning_benchmark",
    models=models,
    metrics=["accuracy", "reasoning_depth", "response_time", "cost"]
)

# Add test categories
benchmark.add_category(
    name="logical_reasoning",
    examples=[
        {"input": "If all A are B, and all B are C, what can we conclude about A and C?"},
        {"input": "In a race, if Jane finished before Kim, and Kim finished before Tori, who finished last?"}
    ]
)

benchmark.add_category(
    name="mathematical_reasoning",
    examples=[
        {"input": "If a train travels 120 miles in 2 hours, how far will it travel in 5 hours?"},
        {"input": "What is the probability of rolling a sum of 7 with two six-sided dice?"}
    ]
)

# Run the benchmark
results = benchmark.run()

# Generate detailed performance report
report = benchmark.generate_report(results)
print(report.summary)

# Export results to CSV
benchmark.export_results(results, "benchmark_results.csv")`;

  return (
    <Layout
      title="Join the Beta"
      description="Join the OmniLabs AI beta program to access AI models with intelligent routing, build powerful agents, and optimize costs">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --omni-orange: #FF6B00;
            --omni-orange-light: #FF8C3D;
            --omni-dark: #1A1A1A;
            --omni-gray: #F5F5F7;
            --omni-text: #333333;
            --omni-blue: #2563EB;
            --omni-purple: #7C3AED;
            --omni-green: #16A34A;
            --omni-pink: #DB2777;
          }
          
          .beta-page * {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }
          
          .beta-page {
            color: var(--omni-text);
            background-color: white;
            line-height: 1.6;
          }
          
          .beta-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .hero {
            padding: 100px 0 80px;
            text-align: center;
          }
          
          .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
            font-weight: 700;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero h1 span {
            color: var(--omni-orange);
          }
          
          .hero p {
            font-size: 20px;
            color: #555;
            max-width: 700px;
            margin: 0 auto 40px;
          }
          
          .features {
            padding: 80px 0;
            background-color: var(--omni-gray);
          }
          
          .features-header {
            text-align: center;
            margin-bottom: 60px;
          }
          
          .features-header h2 {
            font-size: 36px;
            margin-bottom: 20px;
            font-weight: 700;
          }
          
          .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          
          .feature-card {
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }
          
          .feature-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: rgba(255, 107, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }
          
          .feature-icon svg {
            width: 24px;
            height: 24px;
            color: var(--omni-orange);
          }
          
          .feature-card h3 {
            font-size: 22px;
            margin-bottom: 15px;
            font-weight: 600;
          }
          
          .feature-card p {
            color: #555;
          }
          
          .feedback-link {
            padding: 60px 0;
          }
          
          .feedback-container {
            max-width: 700px;
            margin: 0 auto;
            text-align: center;
            padding: 40px;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }
          
          .feedback-container h3 {
            font-size: 24px;
            margin-bottom: 15px;
            font-weight: 600;
          }
          
          .feedback-container p {
            margin-bottom: 20px;
          }
          
          .signup {
            padding: 80px 0;
          }
          
          .signup-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }
          
          .signup-content h2 {
            font-size: 36px;
            margin-bottom: 20px;
            font-weight: 700;
          }
          
          .signup-content p {
            color: #555;
            margin-bottom: 30px;
          }
          
          .signup-counter {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 40px;
          }
          
          .counter {
            font-weight: 700;
            font-size: 28px;
            color: var(--omni-orange);
          }
          
          .signup-form {
            background-color: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .beta-page label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
          }
          
          .beta-page input,
          .beta-page select,
          .beta-page textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
          }
          
          .beta-page textarea {
            min-height: 100px;
            resize: vertical;
          }
          
          .radio-group {
            display: flex;
            gap: 20px;
          }
          
          .radio-option {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .radio-option input {
            width: auto;
          }
          
          .beta-btn {
            display: inline-block;
            background-color: var(--omni-orange);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: background-color 0.2s;
            border: none;
            cursor: pointer;
            font-size: 16px;
          }
          
          .beta-btn:hover {
            background-color: var(--omni-orange-light);
          }
          
          .form-note {
            font-size: 12px;
            color: #777;
            margin-bottom: 15px;
          }
          
          @media (max-width: 920px) {
            .features-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .signup-container {
              grid-template-columns: 1fr;
            }
            
            .signup-content {
              text-align: center;
            }
            
            .signup-counter {
              justify-content: center;
            }
          }
          
          @media (max-width: 640px) {
            .hero h1 {
              font-size: 36px;
            }
            
            .hero p {
              font-size: 18px;
            }
            
            .features-grid {
              grid-template-columns: 1fr;
            }
          }
          
          /* Updated Code Examples Section to match reference image */
          .code-examples {
            background-color: white;
            padding: 40px 0;
          }
          
          .code-examples .container {
            max-width: 1000px;
            margin: 0 auto;
          }
          
          .code-examples-header {
            text-align: center;
            margin-bottom: 30px;
          }
          
          .code-examples-header h2 {
            color: #333;
            font-size: 32px;
            font-weight: 700;
          }

          /* Simpler tabs matching reference image */
          .code-tabs {
            display: flex;
            margin-bottom: 0;
            background-color: white;
            border-bottom: 1px solid #e0e0e0;
            padding: 0;
          }

          .code-tab {
            padding: 10px 20px;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            color: #666;
            position: relative;
            margin-right: 2px;
            transition: color 0.2s ease;
          }

          .code-tab:hover {
            color: var(--omni-orange);
          }

          .code-tab.active {
            color: var(--omni-orange);
          }

          .code-tab.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 3px;
            background-color: var(--omni-orange);
          }

          /* Code display styling to match reference */
          .code-display {
            background-color: #1e1e1e;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
            margin: 20px 0;
          }
          
          .code-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #282828;
            padding: 12px 16px;
            border-bottom: 1px solid #3d3d3d;
          }
          
          .code-title {
            color: #e0e0e0;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.3px;
          }
          
          .code-content {
            display: flex;
            position: relative;
          }
          
          .line-numbers {
            padding: 16px 0;
            background-color: #1e1e1e;
            color: #636363;
            text-align: right;
            width: 40px;
            font-family: 'Consolas', 'Menlo', monospace;
            font-size: 13px;
            user-select: none;
            border-right: 1px solid #333;
          }
          
          .line-numbers div {
            padding: 0 10px;
            line-height: 1.6;
          }
          
          pre {
            margin: 0;
            padding: 16px 16px 16px 8px;
            background-color: #1e1e1e;
            color: #d4d4d4;
            font-family: 'Consolas', 'Menlo', monospace;
            font-size: 13px;
            line-height: 1.6;
            overflow-x: auto;
            flex-grow: 1;
          }

          /* Updated syntax highlighting to match reference image */
          .python-keyword {
            color: #d857cf;
          }
          
          .python-string {
            color: #ce9178;
          }
          
          .python-comment {
            color: #6a9955;
            font-style: italic;
          }
          
          .python-class {
            color: #4ec9b0;
          }
          
          .python-function {
            color: #dcdcaa;
          }
          
          .python-variable {
            color: #9cdcfe;
          }
          
          .python-parameter {
            color: #9cdcfe;
          }
          
          .python-number {
            color: #b5cea8;
          }
          
          .python-builtin {
            color: #569cd6;
          }
          
          /* Updated Dashboard Section Styles */
          .dashboard {
            padding: 40px 0 80px;
            background-color: #f8f9fc;
          }
          
          .dashboard-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .dashboard-header {
            text-align: center;
            margin-bottom: 40px;
          }
          
          .dashboard-header h2 {
            font-size: 36px;
            margin-bottom: 10px;
            font-weight: 700;
            color: #333;
          }
          
          .dashboard-header p {
            color: #666;
            max-width: 600px;
            margin: 0 auto;
          }

          /* Dashboard Navigation */
          .dashboard-nav {
            background-color: white;
            border-radius: 12px;
            padding: 5px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
            display: flex;
            margin-bottom: 30px;
            overflow: hidden;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .dashboard-nav-item {
            flex: 1;
            padding: 12px 15px;
            text-align: center;
            cursor: pointer;
            font-weight: 500;
            color: #555;
            transition: all 0.2s ease;
            position: relative;
            border-radius: 8px;
          }
          
          .dashboard-nav-item:hover {
            color: var(--omni-orange);
          }
          
          .dashboard-nav-item.active {
            background-color: var(--omni-orange);
            color: white;
          }
          
          /* Dashboard Cards */
          .dashboard-grid {
            display: grid;
            grid-template-columns: 3fr 1fr;
            gap: 25px;
          }

          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin-bottom: 25px;
          }
          
          .metric-card {
            background-color: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
            position: relative;
            overflow: hidden;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          
          .metric-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          }
          
          .metric-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background-color: var(--omni-orange);
            opacity: 0.7;
          }
          
          .metric-card:nth-child(2)::before {
            background-color: var(--omni-blue);
          }
          
          .metric-card:nth-child(3)::before {
            background-color: var(--omni-purple);
          }
          
          .metric-card:nth-child(4)::before {
            background-color: var(--omni-green);
          }
          
          .metric-title {
            font-size: 14px;
            color: #666;
            margin-bottom: 12px;
            font-weight: 500;
          }
          
          .metric-value {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 10px;
            color: #222;
          }
          
          .metric-secondary {
            font-size: 13px;
            color: #777;
            display: flex;
            align-items: center;
          }
          
          .metric-up {
            color: var(--omni-green);
            display: flex;
            align-items: center;
            margin-right: 5px;
          }
          
          /* Usage Charts */
          .chart-card {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
            padding: 24px;
            margin-bottom: 25px;
          }
          
          .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }
          
          .chart-title {
            font-weight: 600;
            font-size: 16px;
            color: #333;
          }
          
          .chart-period {
            font-size: 13px;
            color: #777;
            background-color: #f1f3f8;
            padding: 6px 12px;
            border-radius: 20px;
          }
          
          .api-usage-chart {
            display: flex;
            align-items: flex-end;
            height: 220px;
            padding: 15px 0;
            gap: 2px;
          }
          
          .chart-bar {
            flex: 1;
            background-color: var(--omni-blue);
            border-radius: 2px 2px 0 0;
            min-width: 3px;
            transition: height 0.3s ease;
          }
          
          .chart-bar:hover {
            background-color: var(--omni-orange);
          }
          
          .chart-axis {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            padding: 0 5px;
          }
          
          .chart-axis span {
            color: #999;
            font-size: 12px;
          }
          
          .chart-legend {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #eee;
          }
          
          .chart-legend-item {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #666;
          }
          
          .legend-color {
            width: 12px;
            height: 12px;
            border-radius: 2px;
            margin-right: 5px;
          }
          
          .legend-api {
            background-color: var(--omni-blue);
          }
          
          /* Response Times Chart */
          .response-time-chart {
            height: 175px;
            display: flex;
            align-items: flex-end;
            padding-top: 30px;
            position: relative;
          }
          
          .response-line {
            position: absolute;
            left: 0;
            right: 0;
            height: 2px;
            background-color: rgba(0, 0, 0, 0.05);
          }
          
          .response-line:nth-child(1) {
            top: 25%;
          }
          
          .response-line:nth-child(2) {
            top: 50%;
          }
          
          .response-line:nth-child(3) {
            top: 75%;
          }
          
          .response-time-points {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            align-items: flex-end;
            position: relative;
            z-index: 2;
          }
          
          .response-point {
            width: 10px;
            height: 10px;
            background-color: var(--omni-orange);
            border-radius: 50%;
            position: relative;
            z-index: 3;
          }
          
          .response-line-path {
            position: absolute;
            bottom: 5px;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, rgba(255,107,0,0.3) 0%, rgba(255,107,0,1) 100%);
            z-index: 1;
          }
          
          .response-time-labels {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
          }
          
          .response-label {
            font-size: 12px;
            color: #777;
            flex: 1;
            text-align: center;
          }
          
          .response-metrics {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #eee;
          }
          
          .response-metric {
            text-align: center;
          }
          
          .response-metric-value {
            font-size: 20px;
            font-weight: 600;
            color: #333;
          }
          
          .response-metric-label {
            font-size: 12px;
            color: #777;
            margin-top: 5px;
          }
          
          /* Recent Activity */
          .recent-activity {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
            height: calc(100% - 25px);
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
          
          .activity-header {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
          }
          
          .activity-title {
            font-weight: 600;
            font-size: 16px;
            color: #333;
          }
          
          .activity-action {
            color: var(--omni-orange);
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
          }
          
          .activity-list {
            padding: 15px 0;
            overflow-y: auto;
            flex: 1;
          }
          
          .activity-item {
            padding: 12px 20px;
            display: flex;
            align-items: center;
            border-left: 3px solid transparent;
            transition: background-color 0.2s ease;
            margin-bottom: 5px;
          }
          
          .activity-item:hover {
            background-color: #f8f9fc;
          }
          
          .activity-item.success {
            border-left-color: var(--omni-green);
          }
          
          .activity-item.error {
            border-left-color: var(--omni-pink);
          }
          
          .activity-status {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-right: 15px;
          }
          
          .activity-status.success {
            background-color: var(--omni-green);
          }
          
          .activity-status.error {
            background-color: var(--omni-pink);
          }
          
          .activity-details {
            flex: 1;
          }
          
          .activity-model {
            font-weight: 500;
            font-size: 14px;
            color: #333;
          }
          
          .activity-time {
            font-size: 12px;
            color: #777;
            margin-top: 2px;
          }
          
          .activity-tokens {
            font-size: 13px;
            color: #555;
            text-align: right;
          }
          
          .success-rate {
            padding: 15px 20px;
            border-top: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .success-label {
            font-size: 13px;
            color: #666;
          }
          
          .success-value {
            font-size: 18px;
            font-weight: 600;
            color: var(--omni-green);
          }
          
          /* Models Section */
          .models-card {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
            padding: 24px;
            margin-bottom: 25px;
          }
          
          .models-chart {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            height: 225px;
            margin-top: 25px;
          }
          
          .model-bar {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
          }
          
          .model-percentage {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 10px;
            color: #333;
          }
          
          .model-fill {
            width: 70%;
            max-width: 65px;
            border-radius: 8px 8px 0 0;
            transition: height 0.5s ease;
            position: relative;
            display: flex;
            justify-content: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          
          .model-count {
            position: absolute;
            top: -25px;
            font-size: 12px;
            font-weight: 500;
            color: #555;
            opacity: 0;
            transition: opacity 0.3s;
          }
          
          .model-fill:hover .model-count {
            opacity: 1;
          }
          
          .model-name {
            font-size: 12px;
            color: #666;
            margin-top: 12px;
            text-align: center;
          }
          
          .model-fill.gpt {
            background-color: var(--omni-blue);
          }
          
          .model-fill.claude {
            background-color: var(--omni-purple);
          }
          
          .model-fill.gemini {
            background-color: var(--omni-green);
          }
          
          .model-fill.llama {
            background-color: var(--omni-orange);
          }
          
          .model-fill.deepseek {
            background-color: var(--omni-pink);
          }
          
          /* Dashboard Footer */
          .dashboard-footer {
            text-align: center;
            margin-top: 30px;
            font-size: 13px;
            color: #888;
          }
          
          /* Responsive Dashboard */
          @media (max-width: 1200px) {
            .dashboard-grid {
              grid-template-columns: 1fr;
            }
            
            .recent-activity {
              height: auto;
              margin-bottom: 25px;
            }
            
            .activity-list {
              max-height: 400px;
            }
          }
          
          @media (max-width: 768px) {
            .metrics-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .models-chart {
              flex-wrap: wrap;
              gap: 20px;
              height: auto;
            }
            
            .model-bar {
              width: 30%;
              margin-bottom: 20px;
            }
            
            .model-fill {
              height: 120px !important;
            }
          }
          
          @media (max-width: 480px) {
            .metrics-grid {
              grid-template-columns: 1fr;
            }
            
            .dashboard-nav {
              flex-direction: column;
              padding: 5px;
            }
            
            .dashboard-nav-item {
              margin-bottom: 5px;
            }
          }
          
          /* Section Content Display Logic */
          .section-content {
            display: none;
          }
          
          .section-content.active {
            display: block;
          }

          /* Smart Router Styling Improvements */
          .model-response-card {
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
            margin-bottom: 20px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .model-response-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          }

          .model-response-header {
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
            font-weight: 500;
          }

          .model-response-header.gpt {
            background-color: var(--omni-blue);
          }

          .model-response-header.claude {
            background-color: var(--omni-purple);
          }

          .model-response-header.gemini {
            background-color: var(--omni-green);
          }

          .model-response-header.llama {
            background-color: var(--omni-orange);
          }

          .model-response-name {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            font-size: 16px;
          }

          .model-badge {
            background-color: rgba(255, 255, 255, 0.25);
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 500;
          }

          .model-metrics {
            display: flex;
            gap: 15px;
          }

          .model-metric {
            font-size: 13px;
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .model-response-content {
            padding: 20px;
            color: #333;
            line-height: 1.6;
          }

          .model-response-text {
            font-size: 15px;
          }

          .model-response-text p {
            margin-bottom: 12px;
          }

          .model-response-text ol,
          .model-response-text ul {
            padding-left: 20px;
            margin-bottom: 12px;
          }

          .model-response-text li {
            margin-bottom: 8px;
          }

          .model-response-text strong {
            font-weight: 600;
          }

          .query-section {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
            padding: 20px;
            margin-bottom: 25px;
          }

          .query-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
          }

          .query-title {
            font-weight: 600;
            font-size: 16px;
            color: #333;
          }

          .query-btn {
            background-color: var(--omni-orange);
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;
          }

          .query-btn:hover {
            background-color: #e25500;
          }

          .chat-message {
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 15px;
            max-width: 85%;
          }

          .system-message {
            background-color: #f0f0f5;
            color: #555;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .user-message {
            background-color: var(--omni-orange);
            color: white;
            margin-left: auto;
            border-radius: 12px 12px 0 12px;
          }

          .message-time {
            font-size: 12px;
            margin-top: 5px;
            opacity: 0.8;
            text-align: right;
          }

          /* Router Settings Styling */
          .router-settings {
            padding: 20px;
          }

          .router-setting {
            margin-bottom: 25px;
          }

          .router-label {
            display: block;
            font-weight: 500;
            color: #444;
            margin-bottom: 10px;
            font-size: 14px;
          }

          .router-slider-container {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .router-slider {
            flex: 1;
            -webkit-appearance: none;
            height: 4px;
            background: #eee;
            border-radius: 2px;
            outline: none;
          }

          .router-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: var(--omni-blue);
            cursor: pointer;
          }

          .router-value {
            font-weight: 600;
            color: #333;
            width: 40px;
            text-align: right;
          }

          .router-models {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .router-model-option {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .router-model-option input[type="checkbox"] {
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .router-model-option label {
            font-size: 14px;
            color: #444;
            cursor: pointer;
          }

          .metrics-comparison {
            padding: 5px;
          }

          .metrics-table {
            width: 100%;
            border-collapse: collapse;
          }

          .metrics-row {
            display: flex;
            border-bottom: 1px solid #eee;
          }

          .metrics-row:last-child {
            border-bottom: none;
          }

          .metrics-header {
            font-weight: 600;
            color: #444;
            background-color: #f8f9fc;
          }

          .metrics-cell {
            padding: 12px 15px;
            flex: 1;
            display: flex;
            align-items: center;
            font-size: 14px;
          }

          .model-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 8px;
          }

          .model-dot.gpt {
            background-color: var(--omni-blue);
          }

          .model-dot.claude {
            background-color: var(--omni-purple);
          }

          .model-dot.gemini {
            background-color: var(--omni-green);
          }

          .model-dot.llama {
            background-color: var(--omni-orange);
          }

          .accuracy-bar {
            height: 6px;
            background-color: var(--omni-green);
            border-radius: 3px;
            margin-right: 8px;
          }

          /* Updated Copy Button Styling */
          .copy-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 14px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            color: #e0e0e0;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
          }

          .copy-btn:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-1px);
          }

          .copy-btn:active {
            transform: translateY(0);
          }

          .copy-btn svg {
            width: 14px;
            height: 14px;
            transition: all 0.2s ease;
          }

          .copy-btn.copied {
            background: var(--omni-green);
            border-color: var(--omni-green);
            color: white;
          }

          .copy-btn.copied svg {
            stroke: white;
          }

          .copy-btn::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
            transform: translate(-50%, -50%) scale(0);
            border-radius: 50%;
            transition: transform 0.4s ease;
          }

          .copy-btn:active::after {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }

          /* Agent Marketplace Styling */
          .agents-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
            margin: 30px 0;
          }

          .agent-card {
            background: white;
            border-radius: 16px;
            padding: 25px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
            border: 1px solid #eee;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
          }

          .agent-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, var(--omni-orange), var(--omni-orange-light));
          }

          .agent-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          }

          .agent-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
          }

          .agent-icon {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(45deg, var(--omni-orange), var(--omni-orange-light));
            color: white;
            box-shadow: 0 4px 12px rgba(255, 107, 0, 0.2);
          }

          .agent-icon svg {
            width: 28px;
            height: 28px;
          }

          .agent-meta {
            flex: 1;
          }

          .agent-name {
            font-weight: 600;
            font-size: 18px;
            color: #333;
            margin-bottom: 6px;
          }

          .agent-rating {
            color: #666;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .agent-rating svg {
            color: #FFD700;
            width: 16px;
            height: 16px;
          }

          .agent-type {
            font-size: 13px;
            color: #666;
            margin-bottom: 16px;
            padding: 6px 12px;
            background: #f8f9fc;
            border-radius: 20px;
            display: inline-block;
            font-weight: 500;
          }

          .agent-description {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 25px;
            flex-grow: 1;
          }

          .agent-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
            padding-top: 20px;
            border-top: 1px solid #f0f0f5;
          }

          .agent-tags {
            display: flex;
            gap: 8px;
          }

          .agent-tag {
            font-size: 12px;
            padding: 5px 10px;
            background: rgba(255, 107, 0, 0.08);
            color: var(--omni-orange);
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.2s;
          }

          .agent-tag:hover {
            background: rgba(255, 107, 0, 0.12);
          }

          .agent-try {
            padding: 8px 18px;
            background: var(--omni-orange);
            color: white;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.2s;
            box-shadow: 0 4px 12px rgba(255, 107, 0, 0.15);
          }

          .agent-try:hover {
            background: var(--omni-orange-light);
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(255, 107, 0, 0.2);
          }

          .agent-stats {
            display: flex;
            gap: 20px;
            margin-top: 15px;
          }

          .agent-stat {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: #666;
          }

          .agent-stat svg {
            width: 14px;
            height: 14px;
            color: #999;
          }

          .workflow-list {
            margin: 20px 0;
          }

          .workflow-item {
            background: white;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 15px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
            border: 1px solid #eee;
          }

          .workflow-name {
            font-weight: 600;
            font-size: 16px;
            color: #333;
            margin-bottom: 8px;
          }

          .workflow-steps {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
          }

          .workflow-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .workflow-stat {
            font-size: 13px;
            color: #777;
          }

          .workflow-actions {
            display: flex;
            gap: 10px;
          }

          .workflow-action-btn {
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid #eee;
            background: white;
            color: #555;
          }

          .workflow-action-btn:hover {
            background: #f5f5f7;
            border-color: #ddd;
          }

          .workflow-add-btn {
            display: inline-flex;
            align-items: center;
            padding: 8px 16px;
            background: var(--omni-orange);
            color: white;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            transition: background 0.2s;
            border: none;
            cursor: pointer;
          }

          .workflow-add-btn:hover {
            background: var(--omni-orange-light);
          }

          .agent-usage-chart {
            margin-top: 20px;
          }

          .agent-usage-bar {
            margin-bottom: 12px;
            position: relative;
          }

          .agent-usage-fill {
            background: linear-gradient(90deg, var(--omni-orange) 0%, var(--omni-orange-light) 100%);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 500;
            transition: width 0.3s ease;
          }

          .agent-usage-count {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 13px;
            font-weight: 600;
            color: #333;
          }

          .view-all-container {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
          }

          /* Section Separation */
          .section-content {
            padding-bottom: 60px;
            margin-bottom: 40px;
            border-bottom: 2px solid #f5f5f7;
          }

          .section-content:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }

          /* Agent Marketplace Additional Styling */
          .marketplace-header {
            text-align: center;
            margin-bottom: 40px;
          }

          .marketplace-header h2 {
            font-size: 32px;
            font-weight: 700;
            color: #333;
            margin-bottom: 12px;
          }

          .marketplace-header p {
            color: #666;
            font-size: 16px;
            max-width: 600px;
            margin: 0 auto;
          }

          .marketplace-filters {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding: 20px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          }

          .filter-group {
            display: flex;
            gap: 15px;
          }

          .filter-btn {
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid #eee;
            background: white;
            color: #555;
          }

          .filter-btn:hover,
          .filter-btn.active {
            background: var(--omni-orange);
            border-color: var(--omni-orange);
            color: white;
          }

          .search-bar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 16px;
            background: #f5f5f7;
            border-radius: 20px;
            width: 300px;
          }

          .search-bar input {
            border: none;
            background: none;
            padding: 0;
            font-size: 14px;
            color: #333;
            width: 100%;
          }

          .search-bar input:focus {
            outline: none;
          }

          .search-bar svg {
            color: #666;
            width: 16px;
            height: 16px;
          }

          /* Fix for Agent Marketplace and Beta Form positioning */
          .dashboard {
            position: relative;
            z-index: 1;
          }

          .signup {
            position: relative;
            z-index: 0;
            margin-top: 40px;
            border-top: 1px solid #eee;
          }

          .section-content {
            padding-bottom: 60px;
            margin-bottom: 20px;
            border-bottom: 2px solid #f5f5f7;
          }

          .dashboard-sidebar {
            position: relative;
            z-index: 2;
          }

          /* Improve Agent Usage chart styling */
          .agent-usage-chart {
            margin-top: 20px;
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }

          .agent-usage-bar {
            margin-bottom: 12px;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            background: #f5f5f7;
          }

          .agent-usage-fill {
            background: linear-gradient(90deg, var(--omni-orange) 0%, var(--omni-orange-light) 100%);
            color: white;
            padding: 10px 16px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            transition: width 0.3s ease;
            box-shadow: 0 2px 8px rgba(255, 107, 0, 0.2);
          }

          .agent-usage-count {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            font-weight: 600;
            color: #333;
            background: rgba(255, 255, 255, 0.85);
            padding: 3px 8px;
            border-radius: 12px;
          }

          /* Clear containment for metrics */
          .dashboard-container {
            overflow: hidden;
            position: relative;
          }

          /* Additional container for the agent marketplace section */
          .agent-marketplace-container {
            position: relative;
            background: white;
            padding-bottom: 40px;
            margin-bottom: 40px;
            border-radius: 0 0 20px 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            overflow: hidden;
          }

          /* Feedback and Roadmap Section Styles */
          .feedback-section {
            padding: 60px 0 80px;
            background-color: #f8f9fc;
          }

          .content-tabs {
            background-color: var(--omni-gray);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          }

          .tab-buttons {
            display: flex;
            background-color: white;
            border-bottom: 1px solid #eaeaea;
          }

          .tab-button {
            flex: 1;
            padding: 15px;
            text-align: center;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            border: none;
            background: none;
            color: var(--omni-text);
          }

          .tab-button.active {
            background-color: var(--omni-gray);
            color: var(--omni-orange);
            border-bottom: 3px solid var(--omni-orange);
          }

          .tab-content {
            padding: 40px;
            display: none;
          }

          .tab-content.active {
            display: block;
          }

          .feedback-form {
            max-width: 700px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }

          .feedback-form h2 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #333;
          }

          .feedback-form p {
            color: #555;
            margin-bottom: 25px;
          }

          .community-requests {
            margin-top: 60px;
          }

          .community-requests h2 {
            font-size: 30px;
            margin-bottom: 30px;
            font-weight: 700;
            text-align: center;
          }

          .community-requests > p {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 30px;
            color: #555;
          }

          .request-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-top: 30px;
          }

          .request-card {
            background-color: white;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .request-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }

          .request-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 15px;
          }

          .request-title {
            font-size: 18px;
            font-weight: 600;
            margin-right: 15px;
            color: #333;
          }

          .request-votes {
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 4px 8px;
            background-color: rgba(255, 107, 0, 0.1);
            color: var(--omni-orange);
            border-radius: 6px;
            font-weight: 500;
            font-size: 14px;
          }

          .request-description {
            color: #555;
            font-size: 14px;
            margin-bottom: 20px;
            flex-grow: 1;
            line-height: 1.5;
          }

          .request-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
          }

          .request-author {
            color: #777;
            font-size: 14px;
          }

          .vote-button {
            border: 1px solid var(--omni-orange);
            color: var(--omni-orange);
            background: none;
            padding: 6px 12px;
            border-radius: 6px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }

          .vote-button:hover {
            background-color: var(--omni-orange);
            color: white;
          }

          .roadmap-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .timeline {
            position: relative;
            padding-left: 50px;
          }

          .timeline::before {
            content: '';
            position: absolute;
            left: 15px;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: var(--omni-orange);
          }

          .timeline-item {
            position: relative;
            margin-bottom: 50px;
            padding: 30px;
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
          }

          .timeline-item:hover {
            transform: translateX(5px);
          }

          .timeline-item::before {
            content: '';
            width: 16px;
            height: 16px;
            background-color: var(--omni-orange);
            border: 4px solid white;
            border-radius: 50%;
            position: absolute;
            left: -42px;
            top: 30px;
          }

          .timeline-date {
            display: inline-block;
            background-color: var(--omni-orange);
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 15px;
          }

          .timeline-item h3 {
            font-size: 24px;
            margin-bottom: 15px;
            font-weight: 600;
            color: #333;
          }

          .feature-list {
            list-style-type: none;
            margin-bottom: 20px;
          }

          .feature-list li {
            margin-bottom: 10px;
            padding-left: 25px;
            position: relative;
            color: #444;
          }

          .feature-list li::before {
            content: '✓';
            color: var(--omni-orange);
            position: absolute;
            left: 0;
            font-weight: bold;
          }

          .status {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: 500;
            font-size: 14px;
            margin-top: 10px;
          }

          .status-current {
            background-color: rgba(16, 185, 129, 0.1);
            color: #10B981;
          }

          .status-planned {
            background-color: rgba(14, 165, 233, 0.1);
            color: #0EA5E9;
          }

          .status-future {
            background-color: rgba(139, 92, 246, 0.1);
            color: #8B5CF6;
          }

          .feature-request-box {
            text-align: center;
            margin-top: 40px;
            padding: 30px;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }

          .feature-request-box h3 {
            font-size: 24px;
            margin-bottom: 15px;
            font-weight: 600;
            color: #333;
          }

          .feature-request-box p {
            color: #555;
            margin-bottom: 20px;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }

          @media (max-width: 920px) {
            .request-grid {
              grid-template-columns: 1fr;
            }
            
            .tab-content {
              padding: 25px;
            }
          }

          @media (max-width: 640px) {
            .timeline {
              padding-left: 30px;
            }
            
            .timeline-item::before {
              left: -22px;
            }
            
            .tab-content {
              padding: 20px;
            }
          }

          /* Interactive Feedback Wall Styling */
          .feedback-wall {
            max-width: 1000px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            overflow: hidden;
          }

          .feedback-board {
            display: flex;
            align-items: stretch;
            min-height: 600px;
            overflow: hidden;
          }

          .feedback-column {
            flex: 1;
            min-width: 260px;
            border-right: 1px solid #eee;
            display: flex;
            flex-direction: column;
          }

          .feedback-column:last-child {
            border-right: none;
          }

          .column-header {
            padding: 16px;
            background-color: #f8f9fc;
            border-bottom: 1px solid #eee;
            position: sticky;
            top: 0;
            z-index: 10;
          }

          .column-title {
            font-weight: 600;
            font-size: 16px;
            color: #333;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .column-count {
            background-color: #eee;
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 10px;
            color: #555;
          }

          .column-items {
            flex: 1;
            overflow-y: auto;
            padding: 10px;
          }

          .column-placeholder {
            text-align: center;
            color: #999;
            font-size: 14px;
            padding: 30px 20px;
          }

          .status-indicator {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 8px;
          }

          .status-todo {
            background-color: #64748b;
          }

          .status-in-progress {
            background-color: #3b82f6;
          }

          .status-planned {
            background-color: #8b5cf6;
          }

          .status-completed {
            background-color: #10b981;
          }

          .feedback-item {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            margin-bottom: 12px;
            padding: 15px;
            transition: transform 0.2s, box-shadow 0.2s;
            border: 1px solid #f0f0f5;
          }

          .feedback-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .feedback-stats {
            display: flex;
            gap: 12px;
            margin-bottom: 12px;
          }

          .feedback-stat {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
          }

          .feedback-stat-value {
            font-weight: 600;
            font-size: 16px;
            color: #333;
          }

          .feedback-stat-label {
            font-size: 11px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .feedback-title {
            font-weight: 600;
            color: #333;
            font-size: 16px;
            margin-bottom: 10px;
            line-height: 1.4;
          }

          .feedback-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 10px;
          }

          .feedback-tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
            margin-top: 10px;
          }

          .feedback-tag {
            background-color: #f8f9fc;
            color: #666;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 12px;
          }

          .feedback-toolbar {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
            background-color: white;
            padding: 12px 16px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }

          .feedback-sorting {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .sort-label {
            font-size: 14px;
            color: #555;
            font-weight: 500;
          }

          .feedback-filters {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-left: auto;
          }

          .feedback-filter {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
            color: #555;
            cursor: pointer;
          }

          .filter-checkbox {
            width: 18px;
            height: 18px;
            border-radius: 4px;
            border: 1px solid #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .filter-checkbox.checked {
            background-color: var(--omni-orange);
            border-color: var(--omni-orange);
            color: white;
          }

          .column-header.todo {
            border-bottom: 3px solid #64748b;
          }

          .column-header.in-progress {
            border-bottom: 3px solid #3b82f6;
          }

          .column-header.planned {
            border-bottom: 3px solid #8b5cf6;
          }

          .column-header.completed {
            border-bottom: 3px solid #10b981;
          }

          .status-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 500;
            margin-right: 6px;
          }

          .status-badge.todo {
            background-color: rgba(100, 116, 139, 0.1);
            color: #64748b;
          }

          .status-badge.in-progress {
            background-color: rgba(59, 130, 246, 0.1);
            color: #3b82f6;
          }

          .status-badge.planned {
            background-color: rgba(139, 92, 246, 0.1);
            color: #8b5cf6;
          }

          .status-badge.completed {
            background-color: rgba(16, 185, 129, 0.1);
            color: #10b981;
          }

          .feedback-page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
          }

          .feedback-page-title {
            font-size: 24px;
            font-weight: 700;
            color: #333;
          }

          .post-feedback-btn {
            background-color: var(--omni-orange);
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .post-feedback-btn:hover {
            background-color: var(--omni-orange-light);
          }

          .post-feedback-btn svg {
            width: 14px;
            height: 14px;
          }

          .feedback-tabs {
            display: flex;
            border-bottom: 1px solid #eee;
            background-color: #f8f9fc;
          }

          .feedback-tab {
            padding: 14px 20px;
            cursor: pointer;
            font-weight: 500;
            color: #555;
            font-size: 14px;
            border-bottom: 2px solid transparent;
            transition: all 0.2s;
          }

          .feedback-tab:hover {
            color: var(--omni-orange);
          }

          .feedback-tab.active {
            color: var(--omni-orange);
            border-bottom-color: var(--omni-orange);
            background-color: white;
          }

          .feedback-filters {
            display: flex;
            padding: 12px 20px;
            align-items: center;
            gap: 15px;
            border-bottom: 1px solid #eee;
          }

          .feedback-filter-label {
            color: #666;
            font-size: 13px;
            font-weight: 500;
          }

          .feedback-sort {
            display: flex;
            gap: 10px;
          }

          .feedback-sort-option {
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            color: #666;
            cursor: pointer;
            transition: all 0.2s;
          }

          .feedback-sort-option:hover {
            color: var(--omni-orange);
            background-color: rgba(255, 107, 0, 0.05);
          }

          .feedback-sort-option.active {
            background-color: rgba(255, 107, 0, 0.1);
            color: var(--omni-orange);
          }

          .feedback-items {
            max-height: 600px;
            overflow-y: auto;
            padding: 0;
          }

          .feedback-item:last-child {
            border-bottom: none;
          }

          .feedback-vote {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 50px;
          }

          .vote-buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
          }

          .upvote-btn, .downvote-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
            transition: all 0.2s;
            color: #aaa;
            border-radius: 4px;
          }

          .upvote-btn:hover, .downvote-btn:hover {
            background-color: #f0f0f0;
            color: #777;
          }

          .upvote-btn.active {
            color: var(--omni-orange);
          }

          .downvote-btn.active {
            color: #e74c3c;
          }

          .vote-count {
            font-weight: 600;
            font-size: 15px;
            color: #333;
            margin: 5px 0;
          }

          .feedback-content {
            flex: 1;
          }

          .feedback-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }

          .feedback-title {
            font-weight: 600;
            color: #333;
            font-size: 16px;
            margin-bottom: 6px;
          }

          .feedback-meta {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-bottom: 10px;
          }

          .feedback-type {
            background-color: rgba(255, 107, 0, 0.1);
            color: var(--omni-orange);
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 500;
          }

          .feedback-type.feature {
            background-color: rgba(52, 152, 219, 0.1);
            color: #3498db;
          }

          .feedback-type.bug {
            background-color: rgba(231, 76, 60, 0.1);
            color: #e74c3c;
          }

          .feedback-type.improvement {
            background-color: rgba(46, 204, 113, 0.1);
            color: #2ecc71;
          }

          .feedback-type.question {
            background-color: rgba(155, 89, 182, 0.1);
            color: #9b59b6;
          }

          .feedback-date {
            color: #999;
            font-size: 12px;
          }

          .feedback-author {
            color: #777;
            font-size: 13px;
          }

          .feedback-description {
            color: #555;
            font-size: 14px;
            line-height: 1.5;
            white-space: pre-line;
          }

          .feedback-actions {
            display: flex;
            gap: 15px;
            margin-top: 15px;
          }

          .feedback-action {
            color: #777;
            font-size: 13px;
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            transition: color 0.2s;
          }

          .feedback-action:hover {
            color: var(--omni-orange);
          }

          .feedback-action svg {
            width: 14px;
            height: 14px;
          }

          .new-feedback-form {
            max-width: 700px;
            margin: 0 auto;
            background-color: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }

          .new-feedback-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .new-feedback-header h3 {
            font-size: 20px;
            font-weight: 600;
            color: #333;
          }

          .feedback-section-title {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            margin-bottom: 5px;
          }

          .feedback-section-description {
            color: #666;
            font-size: 14px;
            margin-bottom: 20px;
          }

          .anonymous-note {
            margin-top: 15px;
            color: #777;
            font-size: 13px;
            line-height: 1.5;
          }

          .feedback-empty-state {
            padding: 60px 20px;
            text-align: center;
          }

          .feedback-empty-icon {
            color: #ddd;
            font-size: 48px;
            margin-bottom: 15px;
          }

          .feedback-empty-text {
            color: #888;
            font-size: 16px;
            margin-bottom: 20px;
          }

          .feedback-empty-action {
            background-color: var(--omni-orange);
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }

          .feedback-empty-action:hover {
            background-color: var(--omni-orange-light);
          }

          .close-button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 24px;
            color: #999;
            transition: color 0.2s;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
          }

          .close-button:hover {
            color: #333;
            background-color: #f5f5f5;
          }

          .form-actions {
            display: flex;
            gap: 15px;
            margin-top: 20px;
          }

          .cancel-btn {
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
            border: 1px solid #ddd;
            cursor: pointer;
            font-size: 16px;
            color: #666;
            background-color: white;
          }

          .cancel-btn:hover {
            background-color: #f5f5f5;
            border-color: #ccc;
            color: #333;
          }

          /* Additional CSS for feedback wall styling */
          .feedback-wall {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            overflow: hidden;
          }

          .feedback-wall-header {
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
          }

          .feedback-wall-title {
            font-weight: 600;
            font-size: 18px;
            color: #333;
          }

          .feedback-tabs {
            display: flex;
            border-bottom: 1px solid #eee;
            background-color: #f8f9fc;
          }

          .feedback-tab {
            padding: 14px 20px;
            cursor: pointer;
            font-weight: 500;
            color: #555;
            font-size: 14px;
            border-bottom: 2px solid transparent;
            transition: all 0.2s;
          }

          .feedback-tab:hover {
            color: var(--omni-orange);
          }

          .feedback-tab.active {
            color: var(--omni-orange);
            border-bottom-color: var(--omni-orange);
            background-color: white;
          }

          .feedback-filters {
            display: flex;
            padding: 12px 20px;
            align-items: center;
            gap: 15px;
            border-bottom: 1px solid #eee;
          }

          .feedback-filter-label {
            color: #666;
            font-size: 13px;
            font-weight: 500;
          }

          .feedback-sort {
            display: flex;
            gap: 10px;
          }

          .feedback-sort-option {
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            color: #666;
            cursor: pointer;
            transition: all 0.2s;
          }

          .feedback-sort-option:hover {
            color: var(--omni-orange);
            background-color: rgba(255, 107, 0, 0.05);
          }

          .feedback-sort-option.active {
            background-color: rgba(255, 107, 0, 0.1);
            color: var(--omni-orange);
          }

          .feedback-items {
            max-height: 600px;
            overflow-y: auto;
            padding: 0;
          }

          .feedback-item {
            padding: 20px;
            border-bottom: 1px solid #eee;
            display: flex;
            gap: 16px;
            transition: background-color 0.2s;
          }

          .feedback-item:hover {
            background-color: #f9f9fb;
          }

          .feedback-item:last-child {
            border-bottom: none;
          }

          .feedback-vote {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 50px;
          }

          .vote-buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
          }

          .upvote-btn, .downvote-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
            transition: all 0.2s;
            color: #aaa;
            border-radius: 4px;
          }

          .upvote-btn:hover, .downvote-btn:hover {
            background-color: #f0f0f0;
            color: #777;
          }

          .upvote-btn.active {
            color: var(--omni-orange);
          }

          .downvote-btn.active {
            color: #e74c3c;
          }

          .vote-count {
            font-weight: 600;
            font-size: 15px;
            color: #333;
            margin: 5px 0;
          }

          .feedback-content {
            flex: 1;
          }

          .feedback-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }

          .feedback-title {
            font-weight: 600;
            color: #333;
            font-size: 16px;
            margin-bottom: 6px;
          }

          .feedback-meta {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-bottom: 10px;
          }

          .feedback-type {
            background-color: rgba(255, 107, 0, 0.1);
            color: var(--omni-orange);
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 500;
          }

          .feedback-type.feature {
            background-color: rgba(52, 152, 219, 0.1);
            color: #3498db;
          }

          .feedback-type.bug {
            background-color: rgba(231, 76, 60, 0.1);
            color: #e74c3c;
          }

          .feedback-type.improvement {
            background-color: rgba(46, 204, 113, 0.1);
            color: #2ecc71;
          }

          .feedback-type.question {
            background-color: rgba(155, 89, 182, 0.1);
            color: #9b59b6;
          }

          .feedback-date {
            color: #999;
            font-size: 12px;
          }

          .feedback-author {
            color: #777;
            font-size: 13px;
          }

          .feedback-status {
            font-size: 12px;
            color: #777;
            background-color: #f0f0f0;
            padding: 2px 8px;
            border-radius: 4px;
          }

          .feedback-description {
            color: #555;
            font-size: 14px;
            line-height: 1.5;
            white-space: pre-line;
          }

          .feedback-actions {
            display: flex;
            gap: 15px;
            margin-top: 15px;
          }

          .feedback-action {
            color: #777;
            font-size: 13px;
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            transition: color 0.2s;
          }

          .feedback-action:hover {
            color: var(--omni-orange);
          }

          .feedback-action svg {
            width: 14px;
            height: 14px;
          }

          .new-feedback-form {
            max-width: 700px;
            margin: 0 auto;
            background-color: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }

          .new-feedback-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .new-feedback-header h3 {
            font-size: 20px;
            font-weight: 600;
            color: #333;
          }

          .feedback-section-title {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            margin-bottom: 5px;
          }

          .feedback-section-description {
            color: #666;
            font-size: 14px;
            margin-bottom: 20px;
          }

          .anonymous-note {
            margin-top: 15px;
            color: #777;
            font-size: 13px;
            line-height: 1.5;
          }

          .feedback-empty-state {
            padding: 60px 20px;
            text-align: center;
          }

          .feedback-empty-icon {
            color: #ddd;
            font-size: 48px;
            margin-bottom: 15px;
          }

          .feedback-empty-text {
            color: #888;
            font-size: 16px;
            margin-bottom: 20px;
          }

          .feedback-empty-action {
            background-color: var(--omni-orange);
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }

          .feedback-empty-action:hover {
            background-color: var(--omni-orange-light);
          }

          .close-button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 24px;
            color: #999;
            transition: color 0.2s;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
          }

          .close-button:hover {
            color: #333;
            background-color: #f5f5f5;
          }

          .form-actions {
            display: flex;
            gap: 15px;
            margin-top: 20px;
          }

          .cancel-btn {
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
            border: 1px solid #ddd;
            cursor: pointer;
            font-size: 16px;
            color: #666;
            background-color: white;
          }

          .cancel-btn:hover {
            background-color: #f5f5f5;
            border-color: #ccc;
            color: #333;
          }

          .post-feedback-btn {
            background-color: var(--omni-orange);
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .post-feedback-btn:hover {
            background-color: var(--omni-orange-light);
          }

          .post-feedback-btn svg {
            width: 14px;
            height: 14px;
          }

          /* Add CSS for the redirect section */
          .feedback-redirect-container {
            display: flex;
            max-width: 900px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            padding: 40px;
            gap: 40px;
            align-items: center;
          }

          .feedback-redirect-content {
            flex: 1;
          }

          .feedback-redirect-content h3 {
            font-size: 28px;
            font-weight: 700;
            color: #333;
            margin-bottom: 15px;
          }

          .feedback-redirect-content p {
            color: #555;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .feedback-features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 30px;
          }

          .feedback-feature {
            display: flex;
            align-items: flex-start;
            gap: 15px;
          }

          .feedback-feature-icon {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background-color: rgba(255, 107, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--omni-orange);
          }

          .feedback-feature-text h4 {
            font-size: 16px;
            font-weight: 600;
            color: #333;
            margin-bottom: 5px;
          }

          .feedback-feature-text p {
            font-size: 14px;
            color: #666;
            margin-bottom: 0;
          }

          .feedback-redirect-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background-color: var(--omni-orange);
            color: white;
            padding: 14px 24px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            text-decoration: none;
            transition: all 0.2s ease;
            border: none;
            cursor: pointer;
          }

          .feedback-redirect-btn:hover {
            background-color: var(--omni-orange-light);
            transform: translateY(-2px);
          }

          .feedback-redirect-image {
            flex: 1;
            max-width: 400px;
          }

          .feedback-redirect-image img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          @media (max-width: 768px) {
            .feedback-redirect-container {
              flex-direction: column;
              padding: 30px;
            }
            
            .feedback-redirect-image {
              max-width: 100%;
              margin-top: 20px;
            }
            
            .feedback-features {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </Head>
      <main className="beta-page">    
        <section className="hero">
          <div className="beta-container">
            <h1>One API. <span>Endless AI Capabilities.</span></h1>
            <p>Access 100+ AI models with intelligent routing, build powerful agents, and optimize costs—all through a single, unified interface.</p>
            <a href="#beta" className="beta-btn">Join the Beta</a>
          </div>
        </section>
        
        <section className="features" id="features">
          <div className="beta-container">
            <div className="features-header">
              <h2>Powerful AI Infrastructure for Developers & Enterprises</h2>
              <p>Access, orchestrate, and optimize all AI models and agents through a single platform</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3>Smart Routing</h3>
                <p>Our proprietary algorithm automatically selects the optimal model based on your preferences for accuracy, cost, and speed—reducing AI costs by up to 70%.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3>Omni Benchmark</h3>
                <p>Compare model performance across standardized benchmarks to make data-driven decisions. Build your own benchmarks and test models.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3>Developer Dashboard</h3>
                <p>Monitor usage, costs, and performance across all your AI models in one centralized interface. Track smart router savings and performance.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3>Omni Agents</h3>
                <p>Build powerful AI agents that can use any model or combine multiple frameworks through one unified interface. Get specialized agents for various tasks.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3>Enterprise Solutions</h3>
                <p>Governance, compliance controls, and single sign-on for organizations with multiple AI users. Simplify billing and maintain control across teams.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3>Agent Marketplace</h3>
                <p>Browse our marketplace of specialized agents for different industries and tasks. See which models and agents other developers are using.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Move Code Examples Section here, before dashboard */}
        <section className="code-examples">
          <div className="beta-container">
            <div className="code-examples-header">
              <h2>Simple Integration</h2>
              <p>Access any AI model through one unified interface</p>
            </div>
            
            <div className="code-tabs">
              <button 
                className={`code-tab ${activeTab === 'OmniRouter' ? 'active' : ''}`} 
                onClick={() => setActiveTab('OmniRouter')}
              >
                OmniRouter
              </button>
              <button 
                className={`code-tab ${activeTab === 'OmniAgents' ? 'active' : ''}`}
                onClick={() => setActiveTab('OmniAgents')}
              >
                OmniAgents
              </button>
              <button 
                className={`code-tab ${activeTab === 'OmniBenchmark' ? 'active' : ''}`}
                onClick={() => setActiveTab('OmniBenchmark')}
              >
                OmniBenchmark
              </button>
            </div>

            {activeTab === 'OmniRouter' && (
              <CodeBlock
                title="Smart Model Routing"
                code={omnirouterCode}
                language="python"
              />
            )}
            
            {activeTab === 'OmniAgents' && (
              <CodeBlock
                title="Build Powerful Agents"
                code={agentsCode}
                language="python"
              />
            )}
            
            {activeTab === 'OmniBenchmark' && (
              <CodeBlock
                title="Benchmark & Compare Models"
                code={benchmarkCode}
                language="python"
              />
            )}
          </div>
        </section>
        
        <section className="dashboard">
          <div className="dashboard-container">
            <div className="dashboard-header">
              <h2>Explore OmniLabs Platform</h2>
              <p>Monitor your AI usage, optimize costs, and gain insights across all models and agents</p>
            </div>
            
            <div className="dashboard-nav">
              <div 
                className={`dashboard-nav-item ${dashboardTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => setDashboardTab('dashboard')}
                data-section="dashboard"
              >
                Developer Dashboard
              </div>
              <div 
                className={`dashboard-nav-item ${dashboardTab === 'router' ? 'active' : ''}`}
                onClick={() => setDashboardTab('router')}
                data-section="router"
              >
                Smart Router Analysis
              </div>
              <div 
                className={`dashboard-nav-item ${dashboardTab === 'agents' ? 'active' : ''}`}
                onClick={() => setDashboardTab('agents')}
                data-section="agents"
              >
                Agent Marketplace
              </div>
            </div>
            
            <div id="dashboard-section" className={`section-content ${dashboardTab === 'dashboard' ? 'active' : ''}`}>
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-title">Total API Calls</div>
                  <div className="metric-value">124,582</div>
                  <div className="metric-secondary">
                    <span className="metric-up">▲ 12.4%</span> from last month
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-title">Active Agents</div>
                  <div className="metric-value">8</div>
                  <div className="metric-secondary">
                    <span className="metric-up">+2</span> new this month
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-title">Tokens Used</div>
                  <div className="metric-value">10.2M</div>
                  <div className="metric-secondary">
                    42% of monthly limit
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-title">Cost Savings</div>
                  <div className="metric-value">$1,840</div>
                  <div className="metric-secondary">
                    via Smart Routing
                  </div>
                </div>
              </div>
              
              <div className="dashboard-grid">
                <div className="dashboard-main">
                  <div className="chart-card">
                    <div className="chart-header">
                      <div className="chart-title">API Usage Over Time</div>
                      <div className="chart-period">Last 30 days</div>
                    </div>
                    <div className="chart-content">
                      <div className="api-usage-chart">
                        {apiUsageData.map((data, index) => (
                          <div 
                            key={index} 
                            className="chart-bar" 
                            style={{height: `${(data.calls / maxCalls) * 100}%`}}
                            title={`Day ${data.day}: ${data.calls.toLocaleString()} calls`}
                          ></div>
                        ))}
                      </div>
                      <div className="chart-axis">
                        <span>1</span>
                        <span>10</span>
                        <span>20</span>
                        <span>30</span>
                      </div>
                      <div className="chart-legend">
                        <div className="chart-legend-item">
                          <div className="legend-color legend-api"></div>
                          <span>API Calls</span>
                        </div>
                        <span>Total: 124,582 calls</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="chart-card">
                    <div className="chart-header">
                      <div className="chart-title">Response Times</div>
                      <div className="chart-period">Last 7 weeks</div>
                    </div>
                    <div className="chart-content">
                      <div className="response-time-chart">
                        <div className="response-line"></div>
                        <div className="response-line"></div>
                        <div className="response-line"></div>
                        <div className="response-line-path" style={{
                          height: '2px', 
                          bottom: `${(responseTimesData[0].time / maxResponseTime) * 100}%`, 
                          background: 'linear-gradient(90deg, rgba(255,107,0,0.3) 0%, rgba(255,107,0,1) 100%)'
                        }}></div>
                        <div className="response-time-points">
                          {responseTimesData.map((data, index) => (
                            <div key={index} style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'flex-end',
                              height: `${(data.time / maxResponseTime) * 100}%`
                            }}>
                              <div className="response-point"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="response-time-labels">
                        {responseTimesData.map((data, index) => (
                          <div key={index} className="response-label">{data.week.substring(5)}</div>
                        ))}
                      </div>
                      <div className="response-metrics">
                        <div className="response-metric">
                          <div className="response-metric-value">267ms</div>
                          <div className="response-metric-label">Average</div>
                        </div>
                        <div className="response-metric">
                          <div className="response-metric-value">178ms</div>
                          <div className="response-metric-label">Fastest</div>
                        </div>
                        <div className="response-metric">
                          <div className="response-metric-value">312ms</div>
                          <div className="response-metric-label">P95</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="models-card">
                    <div className="chart-header">
                      <div className="chart-title">Most Used Models</div>
                      <div className="chart-period">Last 30 days</div>
                    </div>
                    <div className="models-chart">
                      <div className="model-bar">
                        <div className="model-percentage">45%</div>
                        <div className="model-fill gpt" style={{height: '180px'}}>
                          <div className="model-count">56,023 calls</div>
                        </div>
                        <div className="model-name">GPT-4o</div>
                      </div>
                      <div className="model-bar">
                        <div className="model-percentage">22%</div>
                        <div className="model-fill claude" style={{height: '88px'}}>
                          <div className="model-count">27,408 calls</div>
                        </div>
                        <div className="model-name">Claude 3.7</div>
                      </div>
                      <div className="model-bar">
                        <div className="model-percentage">18%</div>
                        <div className="model-fill gemini" style={{height: '72px'}}>
                          <div className="model-count">22,425 calls</div>
                        </div>
                        <div className="model-name">Gemini Pro</div>
                      </div>
                      <div className="model-bar">
                        <div className="model-percentage">10%</div>
                        <div className="model-fill llama" style={{height: '40px'}}>
                          <div className="model-count">12,458 calls</div>
                        </div>
                        <div className="model-name">Llama 3</div>
                      </div>
                      <div className="model-bar">
                        <div className="model-percentage">5%</div>
                        <div className="model-fill deepseek" style={{height: '20px'}}>
                          <div className="model-count">6,268 calls</div>
                        </div>
                        <div className="model-name">DeepSeek</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="dashboard-sidebar">
                  <div className="recent-activity">
                    <div className="activity-header">
                      <div className="activity-title">Recent Activity</div>
                      <a href="#" className="activity-action">View All</a>
                    </div>
                    <div className="activity-list">
                      {recentActivityData.map((activity, index) => (
                        <div key={index} className={`activity-item ${activity.status}`}>
                          <div className={`activity-status ${activity.status}`}></div>
                          <div className="activity-details">
                            <div className="activity-model">{activity.model}</div>
                            <div className="activity-time">{activity.time}</div>
                          </div>
                          <div className="activity-tokens">{activity.tokens} tokens</div>
                        </div>
                      ))}
                    </div>
                    <div className="success-rate">
                      <div className="success-label">Success rate today:</div>
                      <div className="success-value">99.8%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-footer">
                OmniLabs AI Platform • Developer Dashboard • v1.0.2
              </div>
            </div>
            
            <div id="router-section" className={`section-content ${dashboardTab === 'router' ? 'active' : ''}`}>
              <div className="dashboard-grid">
                <div className="dashboard-main">
                  <div className="chart-card">
                    <div className="chart-header">
                      <div className="chart-title">Smart Router Comparison</div>
                      <div className="chart-period">Response Testing</div>
                    </div>
                    <div className="query-section">
                      <div className="query-header">
                        <div className="query-title">Query Results</div>
                        <button className="query-btn">New Comparison</button>
                      </div>
                      <div className="chat-messages">
                        <div className="chat-message system-message">
                          Welcome to the Smart Router demonstration. What would you like to compare?
                        </div>
                        <div className="chat-message user-message">
                          Explain the principles behind quantum computing in simple terms.
                          <div className="message-time">You, 3 minutes ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="chart-card">
                    <div className="chart-header">
                      <div className="chart-title">Model Responses</div>
                      <div className="chart-period">Performance Analysis</div>
                    </div>
                    <div className="response-grid">
                      <div className="model-response-card">
                        <div className="model-response-header gpt">
                          <div className="model-response-name">
                            GPT-4o <span className="model-badge">Recommended</span>
                          </div>
                          <div className="model-metrics">
                            <div className="model-metric">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="1 4 1 10 7 10"></polyline>
                                <polyline points="23 20 23 14 17 14"></polyline>
                                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                              </svg>
                              623 tokens
                            </div>
                            <div className="model-metric">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                              </svg>
                              $0.018
                            </div>
                          </div>
                        </div>
                        <div className="model-response-content">
                          <div className="model-response-text">
                            <p>Quantum computing leverages the weird rules of quantum physics to solve problems in new ways. Here's a simple explanation:</p>
                            <p>In classical computers (what you use daily), information is processed as bits—either 0 or a 1. Like a light switch, it's either off or on.</p>
                            <p>Quantum computers use quantum bits or "qubits." The key differences are:</p>
                            <ol>
                              <li><strong>Superposition:</strong> A qubit can be 0, 1, or both simultaneously. This is like a spinning coin—while it's spinning, it's neither heads nor tails, but in a sense, both.</li>
                              <li><strong>Entanglement:</strong> Qubits can be mysteriously connected so that what happens to one instantly affects another, regardless of distance. This allows quantum computers to process related information in sync.</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      
                      <div className="model-response-card">
                        <div className="model-response-header claude">
                          <div className="model-response-name">Claude 3.7 Sonnet</div>
                          <div className="model-metrics">
                            <div className="model-metric">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="1 4 1 10 7 10"></polyline>
                                <polyline points="23 20 23 14 17 14"></polyline>
                                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                              </svg>
                              651 tokens
                            </div>
                            <div className="model-metric">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                              </svg>
                              $0.022
                            </div>
                          </div>
                        </div>
                        <div className="model-response-content">
                          <div className="model-response-text">
                            <p>Let me explain quantum computing in simple terms:</p>
                            <p>Regular computers (like your phone or laptop) process information using bits, which are like tiny switches that can be either ON (1) or OFF (0). Every calculation, image, video, or text is ultimately processed using combinations of these binary states.</p>
                            <p>Quantum computers work with something called qubits, which follow the strange rules of quantum physics. Qubits have two key special properties:</p>
                            <p><strong>1. Superposition:</strong> While regular bits must be either 0 OR 1, qubits can exist in a state that's effectively 0 AND 1 at the same time.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="chart-card">
                    <div className="chart-header">
                      <div className="chart-title">Model Performance Metrics</div>
                      <div className="chart-period">Comparative Analysis</div>
                    </div>
                    <div className="metrics-comparison">
                      <div className="metrics-table">
                        <div className="metrics-row metrics-header">
                          <div className="metrics-cell">Model</div>
                          <div className="metrics-cell">Response Time</div>
                          <div className="metrics-cell">Cost</div>
                          <div className="metrics-cell">Accuracy</div>
                          <div className="metrics-cell">Tokens</div>
                        </div>
                        <div className="metrics-row">
                          <div className="metrics-cell"><span className="model-dot gpt"></span>GPT-4o</div>
                          <div className="metrics-cell">428ms</div>
                          <div className="metrics-cell">$0.018</div>
                          <div className="metrics-cell"><div className="accuracy-bar" style={{width: '92%'}}></div><span>92%</span></div>
                          <div className="metrics-cell">623</div>
                        </div>
                        <div className="metrics-row">
                          <div className="metrics-cell"><span className="model-dot claude"></span>Claude 3.7</div>
                          <div className="metrics-cell">512ms</div>
                          <div className="metrics-cell">$0.022</div>
                          <div className="metrics-cell"><div className="accuracy-bar" style={{width: '89%'}}></div><span>89%</span></div>
                          <div className="metrics-cell">651</div>
                        </div>
                        <div className="metrics-row">
                          <div className="metrics-cell"><span className="model-dot gemini"></span>Gemini Pro</div>
                          <div className="metrics-cell">378ms</div>
                          <div className="metrics-cell">$0.012</div>
                          <div className="metrics-cell"><div className="accuracy-bar" style={{width: '78%'}}></div><span>78%</span></div>
                          <div className="metrics-cell">589</div>
                        </div>
                        <div className="metrics-row">
                          <div className="metrics-cell"><span className="model-dot llama"></span>Llama 3</div>
                          <div className="metrics-cell">291ms</div>
                          <div className="metrics-cell">$0.009</div>
                          <div className="metrics-cell"><div className="accuracy-bar" style={{width: '75%'}}></div><span>75%</span></div>
                          <div className="metrics-cell">592</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="dashboard-sidebar">
                  <div className="recent-activity">
                    <div className="activity-header">
                      <div className="activity-title">Router Settings</div>
                      <a href="#" className="activity-action">Reset</a>
                    </div>
                    <div className="router-settings">
                      <div className="router-setting">
                        <label className="router-label">Accuracy</label>
                        <div className="router-slider-container">
                          <input type="range" className="router-slider" min="0" max="100" defaultValue="70" />
                          <div className="router-value">70%</div>
                        </div>
                      </div>
                      <div className="router-setting">
                        <label className="router-label">Cost</label>
                        <div className="router-slider-container">
                          <input type="range" className="router-slider" min="0" max="100" defaultValue="20" />
                          <div className="router-value">20%</div>
                        </div>
                      </div>
                      <div className="router-setting">
                        <label className="router-label">Speed</label>
                        <div className="router-slider-container">
                          <input type="range" className="router-slider" min="0" max="100" defaultValue="10" />
                          <div className="router-value">10%</div>
                        </div>
                      </div>
                      <div className="router-setting">
                        <label className="router-label">Models to Consider</label>
                        <div className="router-models">
                          <div className="router-model-option">
                            <input type="checkbox" id="model-gpt4" defaultChecked />
                            <label htmlFor="model-gpt4">GPT-4 Models</label>
                          </div>
                          <div className="router-model-option">
                            <input type="checkbox" id="model-claude" defaultChecked />
                            <label htmlFor="model-claude">Claude Models</label>
                          </div>
                          <div className="router-model-option">
                            <input type="checkbox" id="model-gemini" defaultChecked />
                            <label htmlFor="model-gemini">Gemini Models</label>
                          </div>
                          <div className="router-model-option">
                            <input type="checkbox" id="model-llama" defaultChecked />
                            <label htmlFor="model-llama">Llama Models</label>
                          </div>
                          <div className="router-model-option">
                            <input type="checkbox" id="model-mistral" />
                            <label htmlFor="model-mistral">Mistral Models</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="success-rate">
                      <div className="success-label">Estimated savings:</div>
                      <div className="success-value">42%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="agents-section" className={`section-content ${dashboardTab === 'agents' ? 'active' : ''}`}>
              <div className="agent-marketplace-container">
                <div className="marketplace-header">
                  <h2>Agent Marketplace</h2>
                  <p>Discover and deploy powerful AI agents for your specific needs</p>
                </div>

                <div className="marketplace-filters">
                  <div className="filter-group">
                    <button className="filter-btn active">All Agents</button>
                    <button className="filter-btn">Research</button>
                    <button className="filter-btn">Analysis</button>
                    <button className="filter-btn">Content</button>
                    <button className="filter-btn">Support</button>
                  </div>
                  <div className="search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" placeholder="Search agents..." />
                  </div>
                </div>

                <div className="dashboard-grid">
                  <div className="dashboard-main">
                    <div className="chart-card">
                      <div className="chart-header">
                        <div className="chart-title">Featured Agents</div>
                        <div className="chart-period">Marketplace Highlights</div>
                      </div>
                      <div className="agents-grid">
                        <div className="agent-card">
                          <div className="agent-header">
                            <div className="agent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                              </svg>
                            </div>
                            <div className="agent-meta">
                              <div className="agent-name">Web Researcher</div>
                              <div className="agent-rating">⭐ 4.9</div>
                            </div>
                          </div>
                          <div className="agent-type">BrowserUse Framework</div>
                          <div className="agent-description">
                            Browses the web, extracts information, and generates detailed reports with accurate citations.
                          </div>
                          <div className="agent-footer">
                            <div className="agent-tags">
                              <span className="agent-tag">Research</span>
                              <span className="agent-tag">Web</span>
                            </div>
                            <a href="#" className="agent-try">Try it</a>
                          </div>
                        </div>
                        
                        <div className="agent-card">
                          <div className="agent-header">
                            <div className="agent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                            </div>
                            <div className="agent-meta">
                              <div className="agent-name">Document Analyzer</div>
                              <div className="agent-rating">⭐ 4.8</div>
                            </div>
                          </div>
                          <div className="agent-type">LangChain Framework</div>
                          <div className="agent-description">
                            Processes documents, extracts key information, and answers specific questions about the content.
                          </div>
                          <div className="agent-footer">
                            <div className="agent-tags">
                              <span className="agent-tag">Documents</span>
                              <span className="agent-tag">Analysis</span>
                            </div>
                            <a href="#" className="agent-try">Try it</a>
                          </div>
                        </div>
                        
                        <div className="agent-card">
                          <div className="agent-header">
                            <div className="agent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                            <div className="agent-meta">
                              <div className="agent-name">Customer Support</div>
                              <div className="agent-rating">⭐ 4.6</div>
                            </div>
                          </div>
                          <div className="agent-type">CrewAI Framework</div>
                          <div className="agent-description">
                            Handles customer inquiries, escalates complex issues, and generates effective responses.
                          </div>
                          <div className="agent-footer">
                            <div className="agent-tags">
                              <span className="agent-tag">Support</span>
                              <span className="agent-tag">Customer Service</span>
                            </div>
                            <a href="#" className="agent-try">Try it</a>
                          </div>
                        </div>
                        
                        <div className="agent-card">
                          <div className="agent-header">
                            <div className="agent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                            <div className="agent-meta">
                              <div className="agent-name">Content Writer</div>
                              <div className="agent-rating">⭐ 4.7</div>
                            </div>
                          </div>
                          <div className="agent-type">Claude-backed</div>
                          <div className="agent-description">
                            Creates engaging, SEO-optimized content for blogs, articles, and marketing materials.
                          </div>
                          <div className="agent-footer">
                            <div className="agent-tags">
                              <span className="agent-tag">Writing</span>
                              <span className="agent-tag">Content</span>
                            </div>
                            <a href="#" className="agent-try">Try it</a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="view-all-container">
                        <a href="#" className="beta-btn">View All Agents</a>
                      </div>
                    </div>
                    
                    <div className="chart-card">
                      <div className="chart-header">
                        <div className="chart-title">Agent Workflows</div>
                        <div className="chart-period">Your Customized Pipelines</div>
                      </div>
                      <div className="workflow-list">
                        <div className="workflow-item">
                          <div className="workflow-name">Research Assistant</div>
                          <div className="workflow-steps">3 steps • Web Researcher → Document Analyzer → Content Writer</div>
                          <div className="workflow-meta">
                            <div className="workflow-stat">Used 12 times</div>
                            <div className="workflow-actions">
                              <button className="workflow-action-btn">Edit</button>
                              <button className="workflow-action-btn">Run</button>
                            </div>
                          </div>
                        </div>
                        <div className="workflow-item">
                          <div className="workflow-name">Support Triage</div>
                          <div className="workflow-steps">2 steps • Customer Support → Document Analyzer</div>
                          <div className="workflow-meta">
                            <div className="workflow-stat">Used 28 times</div>
                            <div className="workflow-actions">
                              <button className="workflow-action-btn">Edit</button>
                              <button className="workflow-action-btn">Run</button>
                            </div>
                          </div>
                        </div>
                        <div className="workflow-item">
                          <div className="workflow-name">Code Assistant</div>
                          <div className="workflow-steps">2 steps • Code Generator → Document Analyzer</div>
                          <div className="workflow-meta">
                            <div className="workflow-stat">Used 43 times</div>
                            <div className="workflow-actions">
                              <button className="workflow-action-btn">Edit</button>
                              <button className="workflow-action-btn">Run</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="view-all-container">
                        <a href="#" className="workflow-add-btn">Create New Workflow</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="dashboard-sidebar">
                    <div className="recent-activity">
                      <div className="activity-header">
                        <div className="activity-title">Recent Agent Runs</div>
                        <a href="#" className="activity-action">View All</a>
                      </div>
                      <div className="activity-list">
                        <div className="activity-item success">
                          <div className="activity-status success"></div>
                          <div className="activity-details">
                            <div className="activity-model">Web Researcher</div>
                            <div className="activity-time">5 min ago</div>
                          </div>
                          <div className="activity-tokens">12m 42s</div>
                        </div>
                        <div className="activity-item success">
                          <div className="activity-status success"></div>
                          <div className="activity-details">
                            <div className="activity-model">Content Writer</div>
                            <div className="activity-time">28 min ago</div>
                          </div>
                          <div className="activity-tokens">3m 17s</div>
                        </div>
                        <div className="activity-item error">
                          <div className="activity-status error"></div>
                          <div className="activity-details">
                            <div className="activity-model">Research Assistant (Workflow)</div>
                            <div className="activity-time">1 hour ago</div>
                          </div>
                          <div className="activity-tokens">Error</div>
                        </div>
                        <div className="activity-item success">
                          <div className="activity-status success"></div>
                          <div className="activity-details">
                            <div className="activity-model">Document Analyzer</div>
                            <div className="activity-time">3 hours ago</div>
                          </div>
                          <div className="activity-tokens">8m 05s</div>
                        </div>
                        <div className="activity-item success">
                          <div className="activity-status success"></div>
                          <div className="activity-details">
                            <div className="activity-model">Customer Support</div>
                            <div className="activity-time">Yesterday</div>
                          </div>
                          <div className="activity-tokens">2m 33s</div>
                        </div>
                      </div>
                      <div className="success-rate">
                        <div className="success-label">Success rate:</div>
                        <div className="success-value">94.2%</div>
                      </div>
                    </div>
                    
                    <div className="chart-card">
                      <div className="chart-header">
                        <div className="chart-title">Agent Usage</div>
                        <div className="chart-period">Last 30 days</div>
                      </div>
                      <div className="agent-usage-chart">
                        <div className="agent-usage-bar">
                          <div className="agent-usage-fill" style={{width: '85%'}}>Web Researcher</div>
                          <div className="agent-usage-count">85</div>
                        </div>
                        <div className="agent-usage-bar">
                          <div className="agent-usage-fill" style={{width: '62%'}}>Document Analyzer</div>
                          <div className="agent-usage-count">62</div>
                        </div>
                        <div className="agent-usage-bar">
                          <div className="agent-usage-fill" style={{width: '47%'}}>Content Writer</div>
                          <div className="agent-usage-count">47</div>
                        </div>
                        <div className="agent-usage-bar">
                          <div className="agent-usage-fill" style={{width: '38%'}}>Customer Support</div>
                          <div className="agent-usage-count">38</div>
                        </div>
                        <div className="agent-usage-bar">
                          <div className="agent-usage-fill" style={{width: '24%'}}>Code Generator</div>
                          <div className="agent-usage-count">24</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="signup" id="beta">
          <div className="beta-container">
            <div className="signup-container">
              <div className="signup-content">
                <h2>Join the Beta Program</h2>
                <p>Be among the first to access OmniLabs AI's unified platform. Help shape the future of AI infrastructure and get early access to our revolutionary tools.</p>
                <div className="signup-counter">
                  <span className="counter">{signupCount}</span>
                  <span>beta testers have already joined</span>
                </div>
              </div>
              <div className="signup-form">
                <form id="beta-form" action="https://formspree.io/f/myzedzev" method="POST">
                  <input type="hidden" name="_cc" value="kimia@omni-labs.ai,satya@omni-labs.ai" />
                  <input type="hidden" name="_subject" value="New OmniLabs Beta Program Signup" />
                  <input type="hidden" name="_next" value="https://omnilabs-ai.github.io/thank-you" />
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company/Organization</label>
                    <input type="text" id="company" name="company" placeholder="Company name (if applicable)" />
                  </div>
                  <div className="form-group">
                    <label>User Type</label>
                    <div className="radio-group">
                      <div className="radio-option">
                        <input type="radio" id="individual" name="user_type" value="individual" defaultChecked />
                        <label htmlFor="individual">Individual Developer</label>
                      </div>
                      <div className="radio-option">
                        <input type="radio" id="enterprise" name="user_type" value="enterprise" />
                        <label htmlFor="enterprise">Enterprise</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="interested_features">Most Interested Features</label>
                    <select id="interested_features" name="interested_features">
                      <option value="smart_routing">Smart Routing</option>
                      <option value="omni_agents">Omni Agents</option>
                      <option value="omni_benchmark">Omni Benchmark</option>
                      <option value="dashboard">Developer Dashboard</option>
                      <option value="enterprise">Enterprise Solution</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="feature_request">Feature Requests or Comments</label>
                    <textarea id="feature_request" name="feature_request" placeholder="Share any specific features you'd like to see or how you plan to use OmniLabs AI..."></textarea>
                  </div>
                  <div className="form-group">
                    <label>Would you be willing to have a 10-minute call with our founders?</label>
                    <div className="radio-group">
                      <div className="radio-option">
                        <input type="radio" id="call_yes" name="founder_call" value="yes" />
                        <label htmlFor="call_yes">Yes</label>
                      </div>
                      <div className="radio-option">
                        <input type="radio" id="call_no" name="founder_call" value="no" defaultChecked />
                        <label htmlFor="call_no">No</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group" id="phone_group" style={{display: 'none'}}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
                  </div>
                  <div className="form-group" id="calendly_group" style={{display: 'none'}}>
                    <a href="https://calendly.com/omni-labs-support" target="_blank" style={{color: 'var(--omni-orange)'}}>Schedule a call with our founders</a>
                  </div>
                  <p className="form-note">By submitting this form, you agree to be contacted about the OmniLabs AI beta program. Your information will be sent to both of our founders.</p>
                  <button type="submit" className="beta-btn">Join the Beta</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Add a new Feedback section after the signup section */}
        <section className="feedback-section" id="feedback">
          <div className="beta-container">
            <div className="page-header">
              <h2>Roadmap & Feedback</h2>
              <p>Help shape the future of OmniLabs AI by providing feedback and suggesting new features.</p>
            </div>
            
            <div className="content-tabs">
              <div className="tab-buttons">
                <button 
                  className="tab-button active" 
                  id="feedback-button" 
                  onClick={() => window.open('https://omnilabs.featurebase.app/changelog', '_blank')}
                >
                  Feature Requests
                </button>
                <button className="tab-button" id="roadmap-button">Roadmap</button>
              </div>
              
              <div id="feedback-tab" className="tab-content active">
                <div className="feedback-redirect-container">
                  <div className="feedback-redirect-content">
                    <h3>We Value Your Feedback</h3>
                    <p>Share your suggestions, report bugs, request features, or ask questions on our community feedback board. View what others have posted and vote on ideas that matter to you.</p>
                    
                    <div className="feedback-features">
                      <div className="feedback-feature">
                        <div className="feedback-feature-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </div>
                        <div className="feedback-feature-text">
                          <h4>Submit Ideas</h4>
                          <p>Share your suggestions for new features or improvements</p>
                        </div>
                      </div>
                      
                      <div className="feedback-feature">
                        <div className="feedback-feature-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        </div>
                        <div className="feedback-feature-text">
                          <h4>Vote on Ideas</h4>
                          <p>Help us prioritize by voting on features that matter to you</p>
                        </div>
                      </div>
                      
                      <div className="feedback-feature">
                        <div className="feedback-feature-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                        <div className="feedback-feature-text">
                          <h4>Discuss Ideas</h4>
                          <p>Comment on suggestions and engage with the community</p>
                        </div>
                      </div>
                      
                      <div className="feedback-feature">
                        <div className="feedback-feature-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12" y2="8"></line>
                          </svg>
                        </div>
                        <div className="feedback-feature-text">
                          <h4>Track Progress</h4>
                          <p>See which features we're working on and what's coming next</p>
                        </div>
                      </div>
                    </div>

                    <a 
                      href="https://omnilabs.featurebase.app/changelog" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="feedback-redirect-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('https://omnilabs.featurebase.app/changelog', '_blank');
                      }}
                    >
                      Go to Feedback Board
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                  
                  <div className="feedback-redirect-image">
                    <img 
                      src="img/feedback-board.png" 
                      alt="OmniLabs Feedback Board" 
                      onError={(e) => { 
                        const img = e.target as HTMLImageElement; 
                        img.style.display = 'none'; 
                      }} 
                    />
                  </div>
                </div>
              </div>
              
              <div id="roadmap-tab" className="tab-content">
                <div className="roadmap-content">
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-date">Now</div>
                      <h3>Beta Launch</h3>
                      <p>Our initial beta release focuses on providing core OmniRouter functionality with essential features.</p>
                      <ul className="feature-list">
                        <li>Unified API access to 20+ models across leading providers</li>
                        <li>Basic Smart Router for intelligent model selection</li>
                        <li>Simple developer dashboard for usage tracking</li>
                        <li>Python SDK with OpenAI-compatible interface</li>
                      </ul>
                      <div className="status status-current">Current Release</div>
                    </div>
                    
                    <div className="timeline-item">
                      <div className="timeline-date">Q2 2025</div>
                      <h3>OmniAgents Launch</h3>
                      <p>Our next major release will focus on agent orchestration capabilities.</p>
                      <ul className="feature-list">
                        <li>Support for multiple agent frameworks (BrowserUse, LangChain, CrewAI)</li>
                        <li>Agent workflow creation and orchestration</li>
                        <li>Agent marketplace with pre-built specialized agents</li>
                        <li>Custom agent development tools</li>
                        <li>Enhanced observability and debugging tools</li>
                      </ul>
                      <div className="status status-planned">In Development</div>
                    </div>
                    
                    <div className="timeline-item">
                      <div className="timeline-date">Q3 2025</div>
                      <h3>OmniBenchmark & Enterprise Features</h3>
                      <p>This release will focus on advanced benchmarking and enterprise-grade features.</p>
                      <ul className="feature-list">
                        <li>Comprehensive model benchmarking across standardized tasks</li>
                        <li>Custom benchmark creation tools</li>
                        <li>Advanced Smart Router with learning capabilities</li>
                        <li>Single sign-on and team management</li>
                        <li>Enhanced governance and compliance controls</li>
                        <li>Private agent and model deployment</li>
                      </ul>
                      <div className="status status-planned">Planned</div>
                    </div>
                    
                    <div className="timeline-item">
                      <div className="timeline-date">Q4 2025</div>
                      <h3>Advanced Orchestration & Customization</h3>
                      <p>Our long-term roadmap focuses on advanced AI orchestration capabilities.</p>
                      <ul className="feature-list">
                        <li>Multi-modal workflows (text, image, audio, video)</li>
                        <li>Advanced agent collaboration patterns</li>
                        <li>Custom fine-tuning integration</li>
                        <li>Edge deployment options</li>
                        <li>Industry-specific solution templates</li>
                      </ul>
                      <div className="status status-future">Future Roadmap</div>
                    </div>
                  </div>
                  
                  <div className="feature-request-box">
                    <h3>Don't See What You Need?</h3>
                    <p>We're building OmniLabs AI based on developer feedback. Let us know what features you need!</p>
                    <button className="beta-btn" id="show-feedback-btn">Request a Feature</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 