

# **GasGuardian: Optimized Ethereum Gas Fee Automation**

🚀 **GasGuardian** is a Web3-powered solution designed to **optimize gas fee usage** for Ethereum-based transactions. This project focuses on **automating transactions** when gas fees are low and notifying users once transactions are completed, enabling developers and users to save costs on Ethereum networks.

---

## **Features**
- 🌐 **Real-time Gas Tracking**: Fetches current gas prices using Ethereum RPC providers.
- 🤖 **Automated Transactions**: Automatically executes transactions when gas fees meet predefined thresholds.
- 🔔 **Notifications**: Sends notifications to users (via Telegram, WhatsApp, or email) after successful transactions.
- 💾 **Data Persistence**: Stores gas fee logs and transaction data using AWS DynamoDB.
- 🔄 **Cross-Network Support**: Works seamlessly on Ethereum Mainnet, Sepolia, Goerli, and Holéksy Testnets.
- 🛠 **Extensibility**: Built with n8n, making it easy for anyone to extend and customize.

---

## **Tech Stack**
- **Blockchain**: Ethereum (Mainnet and Testnets)
- **Automation**: [n8n](https://n8n.io/) (workflow automation)
- **Frontend**: [Next.js](https://nextjs.org/)
- **Database**: AWS DynamoDB for storing transaction and gas fee data
- **Ethereum SDK**: [Ethers.js](https://docs.ethers.org/)

---

## **How It Works**
1. **Gas Fee Monitoring**:
   - The system fetches gas prices at regular intervals using Ethereum RPC (e.g., Sepolia, Holéksy).
2. **Condition-Based Execution**:
   - Transactions are queued and executed when gas fees fall below a defined threshold.
3. **User Notification**:
   - Users are notified via messaging platforms like WhatsApp or Telegram after the transaction is executed.
4. **Data Storage**:
   - Logs gas prices and transaction details in AWS DynamoDB for historical tracking and debugging.

---

## **Getting Started**
### **Prerequisites**
- Node.js (v18 or higher)
- MetaMask Wallet (or any Ethereum-compatible wallet)
- AWS Account (for DynamoDB setup)
- n8n (self-hosted or cloud-hosted instance)

---

### **Installation**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/gasguardian.git
   cd gasguardian
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file with the following:
   ```env
   ETH_RPC_URL=https://rpc.sepolia.org
   PRIVATE_KEY=your_private_key_here
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   ```

4. **Start n8n**:
   - Ensure your n8n instance runs and import the provided workflow file in the `/workflows` folder.

5. **Run the Backend**:
   ```bash
   node scripts/transaction.mjs
   ```

---

### **Contributing**
We welcome contributions to make **GasGuardian** even better! Here's how you can help:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push to your fork:
   ```bash
   git commit -m "Add your message here"
   git push origin feature/your-feature-name
   ```
4. Open a Pull Request (PR) with a detailed explanation of your changes.

---

### **Roadmap**
- [ ] Add support for additional messaging platforms (e.g., Slack, Discord).
- [ ] Improve error handling and logging for transaction failures.
- [ ] Create a web-based dashboard to visualize gas fee trends and logs.
- [ ] Integrate a local Ethereum node for better performance.

---

### **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### **Acknowledgments**
- [Ethereum Foundation](https://ethereum.org) for building the ecosystem.
- [n8n](https://n8n.io/) for enabling no-code automation.
- Contributors who helped improve this project!

---

### **Contact**
Feel free to reach out if you have questions or suggestions:
- **Email**: luiz@lupalabs.com.br
- **Twitter**: [@yourhandle](https://twitter.com/luizuk4

---
