# Track and Trace in the Supply Chain

<div align="center">

![TraceIT](https://i.imgur.com/LdBukbT.png)

<p align="center">A project that aims to make the supply chain easier to track and trace</p>
<br><br>
</div>

## Table of Contents <a name="contents"/>
+ [Table of Contents](#contents)
+ [About](#about)
+ [Problem Statement](#problem)
+ [Current Scenario](#scenario)
+ [Concept](#concept)
+ [Contributors](#contributors)

## About <a name="about"/>
+ This project was developed for Smart India Hackathon 2019.
+ The problem statement is "Track and Trace Supply Chain" issued by Hindustan Unilever.
+ We plan to implement a system that overlaps Unilever's existing Supply Chain Management System instead of rebuilding it from scratch.

## Problem Statement <a name="problem"/>
+ Large companies like Hindustan Unilever have millions and millions of products flowing through the supply chain.
+ This large scale of production could lead to faulty units or goods, which may need to be called back.
+ A system is needed to pin-point the batch that needs to be called back, and the location of all the products in the said batch.
+ This will improve the quality of products and quality of service that consumers and end-users receive from multinational companies, while making it easier for the said compaines to manage their supply chain.

## Current Scenario <a name="scenario"/>
+ The stakeholders in a generalised supply chain are as follows:
  1. Farmer
  2. Raw Material Supplier
  3. Factory
  4. Warehouse
  5. Distributor
  6. Retailer
  7. Consumer
+ The transaction of goods happens in pallets, cartons and individual products.
+ At the storage areas of every stake holder, there is a chance that products of different batches are grouped together. Hence, tracing and tracking of product batches becomes a hassel.

## Concept <a name="concept"/>
The idea is to design a system that can keep track of the flow of goods from pallets to cartons to individual products.

### Manufacturing and storing in a Warehouse
+ Once units are created, the container is scanned and then a product is scanned. Then the container is filled with products from the same batch. As a result, that container is mapped to the current batch of products.
+ This container is mapped to a pallet in a similar fashion.
+ Now, a pallet is added to a bin in the warehouse by mapping the pallet to the bin. If multiple containers are sent, then all of them are mapped to that pallet.

### Dispatching from Warehouse
+ The product that is to be dispatched is mapped to the container in which it will be shipped. The quantity of the product is entered.
+ This ensures that a batch of products is tracked throughout the supply chain, even if it gets split at any point.

## Blockchain

### Immutability of data
+ For compliance and security, IT infrastructure requires a high cost to maintain.
+ The key things to maintain in this solution is data integrity.
+ Blockchain comes out of the box with data integrity and tamper-proof data due to its decentralized nature.
+ Development of the blockchain in multiple stakeholder structure is cost effective. It is easier to build, deploy and maintain.
+ The current IT solutions require a lot of costs to maintain data integrity and security.

### Hyperledger
+ It is a private permissioned network.
+ The key benefit of using Hyperledger as opposed to an open-blockchain like Bitcoin or Ethereum is the number of transactions per second. Hyperledger can do roughly 10,000 transactions per second, whereas Ethereum can do roughly 6-7 transactions per second.
+ Data in permissioned networks is on need-to-know basis.
+ Unlike Ethereum or Bitcoin, where all transactions are stored on one ledger, Hyperledger fabric has two different paths - one keeps track of data while the other keeps track of world state.
+ In a Hyperledger fabric, each node cannot access all the data. The access to data that each stakeholder has is defined for each individual.
+ The adoption of Hyperledger fabric is increasing rapidly among major enterprises like IBM and Linux Foundations.

### Use Case
+ We are using Hyperledger to store the data of products flowing in the supply chain.
+ This data includes details like batch numbers, date of manufacture, path taken by a product in the supply chain, etc.
+ No stakeholder can change, modify or tamper with this data. This prevents malpractices like tampering with data in databases to earn profit.
+ Layers of stakeholders form a permission network to ensure security and immutability of data.

## Web Interface
+ The Web Interface allows stakeholders to view details of products pertaining to them.

## Contributors <a name="contributors" />
+ [Roshan James](https://github.com/sephiroth7712)
+ [Calden Rodrigues](https://github.com/caldenrodrigues)
+ [Kyle Lobo](https://github.com/chaitanyadukkipaty)
+ [Chaitanya Dukkipaty](https://github.com/chaitanyadukkipaty)
+ [Rajasi Jaiswal](https://github.com/Rajasi11)
+ [Pratik Nerurkar](https://github.com/PlayPratz)
