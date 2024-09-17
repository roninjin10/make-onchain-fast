export type App = {
  id: number;
  name: string;
  icon: string;
  description: string;
  rating: number;
  category: string;
  version: string;
  latestVersion: string;
  installedVersion?: string;
};

export const apps: App[] = [
  { id: 2, name: "Blockscout", icon: "/blockscout.svg", description: "Open-source, universally accessible, and fully customizable, the new Blockscout Explorer Portal is your definitive gateway to the blockchain world.", rating: 4.2, category: "Explorer", version: "1.9.0", latestVersion: "2.0.0" },
  { id: 6, name: "Coinbase wallet", icon: "/coinbase-wallet.svg", description: "", rating: 4.4, category: "wallet", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 1, name: "Uniswap", icon: "/uniswap.svg", description: "Swap, earn, and build on the leading decentralized crypto trading protocol.", rating: 4.5, category: "defi", version: "2.1.0", latestVersion: "2.1.0" },
  { id: 19, name: "Ens", icon: "/ens.svg", description: "", rating: 4.4, category: "naming", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 4, name: "Warpcast", icon: "/warpcast.svg", description: "A sufficiently decentralized social network", rating: 4.4, category: "social", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 16, name: "Across", icon: "/across.svg", description: "", rating: 4.4, category: "bridge", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 20, name: "Gnosis", icon: "/gnosis.svg", description: "", rating: 4.4, category: "wallet", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 30, name: "Polymarket", icon: "/polymarket.svg", description: "", rating: 4.4, category: "prediction", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 5, name: "Pumpdotfun", icon: "/pumpdotfun.svg", description: "Pump prevents rugs by making sure that all created tokens are safe. Each coin on pump is a fair-launch with no presale and no team allocation.", rating: 4.4, category: "degen", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 18, name: "Geth Full Node", icon: "/geth-light.svg", description: "", rating: 4.4, category: "node", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 27, name: "Tenderly", icon: "/dune.svg", description: "", rating: 4.4, category: "explorer", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 3, name: "Aave", icon: "/aave.svg", description: "The world’s largest liquidity protocol. Supply, borrow, swap, stake and more.", rating: 4.7, category: "defi", version: "3.0.1", latestVersion: "3.0.1" },
  { id: 26, name: "Remix IDE", icon: "/dune.svg", description: "", rating: 4.4, category: "developer", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 22, name: "Primodium", icon: "/gnosis.svg", description: "", rating: 4.4, category: "game", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 29, name: "Graph protocol", icon: "/dune.svg", description: "", rating: 4.4, category: "explorer", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 24, name: "Dune analytics", icon: "/dune.svg", description: "", rating: 4.4, category: "explorer", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 7, name: "Imgnai", icon: "/imgnai.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 8, name: "Blackbird", icon: "/blackbird.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 9, name: "Cowswap", icon: "/cowswap.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 11, name: "Parsa finance", icon: "/parsa-finance.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 12, name: "Daimo", icon: "/daimo.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 13, name: "Balancer", icon: "/balancer.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 14, name: "Aura", icon: "/aura.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 15, name: "1inch", icon: "/1inch.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 17, name: "Geth Full Node", icon: "/geth-full.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 21, name: "Mirror", icon: "/gnosis.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 23, name: "Audius", icon: "/gnosis.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 10, name: "Privacy app placeholder", icon: "/privacy-placeholder.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 25, name: "Anvil", icon: "/dune.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
  { id: 28, name: "Sourcify", icon: "/dune.svg", description: "", rating: 4.4, category: "", version: "2.5.0", latestVersion: "2.5.0" },
];
