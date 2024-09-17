export const copy = {
    heroTitle: "Making Onchain Fast",
    heroSubtitle: "Five ways to improve application performance",
    heroCTAButton: "Skip to interactive demo",
    
    compileTimeTitle: "Prefer doing work at compile-Time",
    compileTimeContent: "Avoid doing anything at runtime that can be done at compile time. This includes contract constants that do not change, chain ids, compiling bytecode, and configuring chain ids.",
    compileTimeOptimizationTitle: "Compile-Time Optimization",
    runtimeFetchingTitle: "Runtime Fetching",
    
    localExecutionTitle: "Local Execution of Pure Functions",
    localExecutionContent: "If a method is pure executing locally with Tevm instead of doing an eth_call will avoid unnecessary network latency.",
    
    cachingTitle: "Cached View Function Results",
    cachingContent: "Anytime view data is cached it will also benifit from executing locally with Tevm. Be careful though. If Tevm does not have the state doing a normal eth_call will be faster.",
    
    prefetchingTitle: "Optimistic Prefetching",
    prefetchingContent: "Apps should take advantage of situations where they can anticipte data will be needed. By executing transactions locally we can proactively cache any state they modify. For most apps this is state that other view functions in the app fetch.",
    
    deploylessCallsTitle: "Deployless Calls for Waterfall Requests",
    deploylessCallsContent: "Oftentimes we will need to execute an eth_call on a remote node. When we do this we must minimize round trips by doing it in a single eth_call. Tevm+Viem makes this simple.",
    
    demoTitle: "Interactive stackblitz",
    demoContent: "Every example above is available in vitest benchmark tests below",
    optimizationPlaygroundTitle: "Optimization Playground",
    runCodeButton: "View Stackblitz",
    resetCodeButton: "View Github",
    outputTitle: "Todo: delete me",
    
    footerTitle: "Let us know if these tips helped make your onchain application performant",
    footerSubtitle: "loren ipsum",
    websiteTooltip: "Tevm.sh",
    githubTooltip: "View source on GitHub",
    coffeeTooltip: "Tevm.app",
    copyrightText: "MIT licensed",
  
    demoInitialCode: `
  // Example optimization code
  function optimizedFunction(x) {
    // Implement your optimization here
    return x * 2;
  }
  
  // Test the function
  console.log(optimizedFunction(5));
    `,
  
    CODE_SAMPLES: {
      compileTime: `
  // Compile-time optimization
  const CONSTANT_VALUE = 42;
  function optimizedFunction(x) {
    return x * CONSTANT_VALUE;
  }`,
      runtime: `
  // Runtime fetching
  async function fetchValue() {
    const response = await fetch('/api/value');
    const data = await response.json();
    return data.value;
  }
  async function runtimeFunction(x) {
    const value = await fetchValue();
    return x * value;
  }`,
      localExecution: `
  // Local execution
  function localFunction(x, y) {
    return x * y + Math.sqrt(x);
  }`,
      remoteExecution: `
  // Remote execution
  async function remoteFunction(x, y) {
    const response = await fetch(\`/api/calculate?x=\${x}&y=\${y}\`);
    const result = await response.json();
    return result.value;
  }`,
      cachedViewFunction: `
  // Cached view function
  const cache = new Map();
  
  async function cachedViewFunction(address) {
    if (cache.has(address)) {
      return cache.get(address);
    }
    
    const balance = await getBalance(address);
    cache.set(address, balance);
    return balance;
  }`,
      uncachedViewFunction: `
  // Uncached view function
  async function uncachedViewFunction(address) {
    const balance = await getBalance(address);
    return balance;
  }`,
      optimisticPrefetching: `
  // Optimistic prefetching
  function prefetchUserData(userId) {
    const prefetchPromise = fetch(\`/api/user/\${userId}\`)
      .then(response => response.json())
      .then(data => {
        // Store prefetched data in cache
        cache.set(\`user_\${userId}\`, data);
      });
    
    // Return promise for potential error handling
    return prefetchPromise;
  }
  
  // Usage
  prefetchUserData(123);  // Prefetch data for user 123
  `,
      regularFetching: `
  // Regular fetching
  async function fetchUserData(userId) {
    const response = await fetch(\`/api/user/\${userId}\`);
    const data = await response.json();
    return data;
  }
  
  // Usage
  const userData = await fetchUserData(123);
  `,
      deploylessCalls: `
  // Deployless calls
  import { ethers } from 'ethers';
  
  async function deploylessCall(contractAddress, abi, functionName, args) {
    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');
    const contract = new ethers.Contract(contractAddress, abi, provider);
    
    const data = contract.interface.encodeFunctionData(functionName, args);
    const result = await provider.call({ to: contractAddress, data });
    
    return contract.interface.decodeFunctionResult(functionName, result);
  }
  
  // Usage
  const result = await deploylessCall(
    '0x1234...5678',
    ['function balanceOf(address) view returns (uint256)'],
    'balanceOf',
    ['0xabcd...ef01']
  );
  `,
      traditionalCalls: `
  // Traditional contract deployment and calls
  import { ethers } from 'ethers';
  
  async function traditionalCall(contractAddress, abi, functionName, args) {
    const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');
    const signer = new ethers.Wallet('YOUR-PRIVATE-KEY', provider);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    
    const tx = await contract[functionName](...args);
    await tx.wait();
    
    return tx;
  }
  
  // Usage
  const tx = await traditionalCall(
    '0x1234...5678',
    ['function transfer(address to, uint256 amount) returns (bool)'],
    'transfer',
    ['0xabcd...ef01', ethers.utils.parseEther('1.0')]
  );
  `,
    },
  
    PERFORMANCE_DATA: {
      compileTime: [
        { label: 'Compile-time', value: 0 },
        { label: 'Runtime', value: 100 },
      ],
      localExecution: [
        { label: 'Local', value: 1 },
        { label: 'Remote', value: 100 },
      ],
      cachedViewFunction: [
        { label: 'Cached', value: 5 },
        { label: 'Uncached', value: 100 },
      ],
      optimisticPrefetching: [
        { label: 'Prefetched', value: 10 },
        { label: 'Regular', value: 100 },
      ],
      deploylessCalls: [
        { label: 'Deployless', value: 20 },
        { label: 'Traditional', value: 100 },
      ],
    },
  };