/*
	Helper Functions
*/
async function traceRaw(NS, value) {
	const shipFact = await getAsset(NS, 'Shipment', value);
	const shipTrade = await getAsset(NS, 'Shipment', shipFact.rawbatchId);
	const raw = await getAsset(NS, 'Raw_material', shipTrade.rawbatchId);
	console.log(shipFact)
	console.log(shipTrade)
	console.log(raw)
}

async function traceProduct(NS, value) {
	const shipRetail = await getAsset(NS, 'Shipment', value);
	const shipDist = await getAsset(NS, 'Shipment', shipRetail.rawbatchId);
	const product = await getAsset(NS, 'Jam', shipDist.rawbatchId);
	console.log(shipRetail)
	console.log(shipDist)
	console.log(product)
}

async function traceJam(NS, value) {
	const shipRetail = await getAsset(NS, 'Shipment', value);
	const shipDist = await getAsset(NS, 'Shipment', shipRetail.rawbatchId);
	const product = await getAsset(NS, 'Jam', shipDist.rawbatchId);
	console.log(shipRetail)
	console.log(shipDist)
	console.log(product)
	traceRaw(NS, product.Mango)
	// traceRaw(NS,product.Strawberry)
	// traceRaw(NS,product.Sugar)
}

async function traceCoffee(NS, value) {
	const shipRetail = await getAsset(NS, 'Shipment', value);
	const shipDist = await getAsset(NS, 'Shipment', shipRetail.rawbatchId);
	const product = await getAsset(NS, 'Jam', shipDist.rawbatchId);
	console.log(shipRetail)
	console.log(shipDist)
	console.log(product)
	traceRaw(NS, product.coffeebean)
	traceRaw(NS, product.chicory)
}

async function addAsset(NS, asset, value) {
	const assetRegistry = await getAssetRegistry(`${NS}.${asset}`);
	await assetRegistry.add(value);
}

function getAsset(NS, asset, value) {
	return getAssetRegistry(`${NS}.${asset}`)
		.then(function (assetRegistry) {
			return assetRegistry.get(value);
		})
}

async function updateAsset(NS, asset, value) {
	const assetRegistry = await getAssetRegistry(`${NS}.${asset}`);
	await assetResgistry.update(value);
}

/*	The End*/
/**
* Tracing history of Raw materials from Factory to Point of Origin
* @param {org.network.tracktrace.farmtotrader} own
* @transaction
*/
async function farmtotrader(own){
	const assetRegistry = await getAssetRegistry('org.network.tracktrace.Raw_material');
  	const packRegistry = await getAssetRegistry('org.network.tracktrace.Packing');
  	const payRegistry = await getAssetRegistry('org.network.tracktrace.Payment');
  	const shipRegistry = await getAssetRegistry('org.network.tracktrace.Shipment');
  	const raw = await assetRegistry.getAll()
    const pack = await packRegistry.getAll()
    const pay = await payRegistry.getAll()
    const ship = await shipRegistry.getAll()
    var trader=[]
    for (var r in raw){
    	//console.log(raw[r].owner.$identifier)
      	if(own.growerId==raw[r].owner.$identifier){
        	var payment = await query('Q2',{IdParam:raw[r].batchId})
            
            var packing = await query('Q3',{IdParam:raw[r].batchId})
            var shipment = await query('Q4',{IdParam:raw[r].batchId})
            var trade = {packing,packing,shipment}
     		trader.push(trade)
        }
      	
    }
  	console.log(trader)
}

/**
* Tracing history of Raw materials from Factory to Point of Origin
* @param {org.network.tracktrace.trace} Id
* @transaction
*/
async function trace(Id) {
	await traceJam('org.network.tracktrace',Id.shipprodId)
	// await traceRaw('org.network.tracktrace',Id.shiprawId)
}

/**
* Adding Raw material To the Ledger
* @param {org.network.tracktrace.addRaw} newMaterial
* @transaction
*/
async function addRaw(newMaterial) {
	var NS = 'org.network.tracktrace';
	var material = getFactory().newResource(NS, 'Raw_material', Math.random().toString(36).substring(3));
	material.materialName = newMaterial.materialName;
	material.initialqty = newMaterial.qty;
	material.qty = newMaterial.qty;
	material.batchState = newMaterial.batchState;
	material.owner = newMaterial.grower;
	var participantRegistry = await getParticipantRegistry('org.network.tracktrace.Grower');
	const exist = await participantRegistry.exists(newMaterial.grower.growerId);
	if(exist) {
		const assetRegistry = await getAssetRegistry('org.network.tracktrace.Raw_material');
		await assetRegistry.add(material);
	}
	else {
		throw new Error('Entered grower doesnt exist');
	}
}

/**
* Adding Jam to the Ledger
* @param {org.network.tracktrace.addJam} newJam
* @transaction
*/
async function addJam(newJam) {
	var NS = 'org.network.tracktrace';
	var jam = getFactory().newResource(NS, 'Jam', Math.random().toString(36).substring(3));
	jam.Mango = newJam.Mango;
	jam.Strawberry = newJam.Strawberry;
	jam.Sugar = newJam.Sugar;
	jam.initialqty = newJam.qty;
	jam.qty = newJam.qty;
	jam.owner = newJam.owner;
	var participantRegistry = await getParticipantRegistry('org.network.tracktrace.Factory');
	const exist = await participantRegistry.exists(newJam.owner.factId);
	if(exist) {
		const assetRegistry = await getAssetRegistry('org.network.tracktrace.Bru');
		await assetRegistry.add(jam);
	}
	else {
		throw new Error('Entered Factory doesnt exist');
	}
}

/**
* Adding Jam to the Ledger
* @param {org.network.tracktrace.addBru} newBru
* @transaction
*/
async function addBru(newBru) {
	var NS = 'org.network.tracktrace';
	var bru = getFactory().newResource(NS, 'Bru', Math.random().toString(36).substring(3));
	bru.coffeebean = newBru.coffeebean;
	bru.chicory = newBru.chicory;
	bru.initialqty = newBru.qty;
	bru.qty = newBru.qty;
	bru.owner = newBru.owner;
	var participantRegistry = await getParticipantRegistry('org.network.tracktrace.Factory');
	const exist = await participantRegistry.exists(newBru.owner.factId);
	if(exist) {
		const assetRegistry = await getAssetRegistry('org.network.tracktrace.Bru');
		await assetRegistry.add(bru);
	}
	else {
		throw new Error('Entered Factory doesnt exist');
	}
}

/**
* Payment for any Raw material can be recorded using this
* @param {org.network.tracktrace.paymentRaw} newPay
* @transaction
*/
async function paymentRaw(newPay) {
	var NS = 'org.network.tracktrace';
	var Pay = getFactory().newResource(NS, 'Payment', Math.random().toString(36).substring(3));
	Pay.For = 'Raw Material from Grower';
	Pay.amount = newPay.amount;
	Pay.qty = newPay.qty;
	Pay.rawbatchId = newPay.rawbatchId;
	Pay.trader = (newPay.trader);

	const assetRegistry = await getAssetRegistry('org.network.tracktrace.Raw_material');
	const exist = await assetRegistry.exists(newPay.rawbatchId);
	if(exist) {
		const raw = await assetRegistry.get(newPay.rawbatchId);
		if(raw.qty <= newPay.qty) {
			throw new Error('Quantity ordered exceeds available quantity');
		}
		else {
			raw.qty = raw.qty - newPay.qty;
			await assetRegistry.update(raw);
			const AssetRegistry = await getAssetRegistry('org.network.tracktrace.Payment');
			await AssetRegistry.add(Pay);
		}
	}
	else {
		throw new Error('Asset BatchId doesnt exist: Failed at paymentRaw');
	}
}

/**
* Payment for any Middleman can be recorded using this
* @param {org.network.tracktrace.paymentTrade} newPay
* @transaction
*/
async function paymentTrade(newPay) {
	var NS = 'org.network.tracktrace';
	var Pay = getFactory().newResource(NS, 'Payment', Math.random().toString(36).substring(3));
	Pay.For = 'Raw Material From Trader';
	Pay.amount = newPay.amount;
	Pay.qty = newPay.qty;
	Pay.rawbatchId = newPay.rawbatchId;
	Pay.trader = (newPay.trader);

	const assetRegistry = await getAssetRegistry('org.network.tracktrace.Shipment');
	const exist = await assetRegistry.exists(newPay.rawbatchId);
	if(exist) {
		const raw = await assetRegistry.get(newPay.rawbatchId);
		if(raw.qty <= newPay.qty) {
			throw new Error('Quantity ordered exceeds available quantity');
		}
		else {
			raw.qty = raw.qty - newPay.qty;
			await assetRegistry.update(raw);
			const AssetRegistry = await getAssetRegistry('org.network.tracktrace.Payment');
			await AssetRegistry.add(Pay);
		}
	}
	else {
		throw new Error('Asset BatchId doesnt exist: Failed at PaymentTrade');
	}
}

/**
* Payment for any Jam can be recorded using this
* @param {org.network.tracktrace.paymentJam} newPay
* @transaction
*/
async function paymentJam(newPay) {
	var NS = 'org.network.tracktrace';
		var Pay = getFactory().newResource(NS, 'Payment', Math.random().toString(36).substring(3));
		Pay.For = 'Jam from Factory';
		Pay.amount = newPay.amount;
		Pay.qty = newPay.qty;
		Pay.rawbatchId = newPay.rawbatchId;
		Pay.trader = (newPay.trader);

		const assetRegistry = await getAssetRegistry('org.network.tracktrace.Jam');
		const exist = await assetRegistry.exists(newPay.rawbatchId);
		if(exist) {
			const raw = await assetRegistry.get(newPay.rawbatchId);
				if(raw.qty <= newPay.qty) {
					throw new Error('Quantity ordered exceeds available quantity');
				}
				else {
					raw.qty = raw.qty - newPay.qty;
					await assetRegistry.update(raw);
					const AssetRegistry = await getAssetRegistry('org.network.tracktrace.Payment');
					await AssetRegistry.add(Pay);
				}
		}
		else {
			throw new Error('Asset BatchId doesnt exist: Failed at paymentJam');
		}
}

/**
* Shipment Details of any Asset is recorded using this
* @param {org.network.tracktrace.packing} newPack
* @transaction
*/
async function packing(newPack) {
	var NS = 'org.network.tracktrace';
	var pack = getFactory().newResource(NS, 'Packing', Math.random().toString(36).substring(3));
  	pack.PL_Invoice_no  = newPack.PL_Invoice_no ;
  	pack.PL_IssueDate = newPack.PL_IssueDate;
  	pack.expectedDate = newPack.expectedDate;
  	pack.remark = newPack.remark;
  	pack.qty = newPack.remark;
  	pack.payId = newPack.payId;
	pack.rawbatchId = newPack.rawbatchId;
	pack.owner = newPack.owner;
	const assetRegistry = await getAssetRegistry('org.network.tracktrace.Payment');
	const exist = await assetRegistry.exists(newPack.payId);
	if(exist) {
		await addAsset('org.network.tracktrace', 'Packing', pack);
	}
	else {
		throw new Error('Asset BatchId doesnt exist: Failed at Packing');
	}
}

/**
* Contidions after Shipment has arrived of any Asset can be recorded using this
* @param {org.network.tracktrace.shipment} newShip
* @transaction
*/
async function shipment(newShip) {
var NS = 'org.network.tracktrace';
	var ship = getFactory().newResource(NS, 'Shipment', Math.random().toString(36).substring(3));
  	ship.dateArrived = newShip.dateArrived;
  	ship.remark = newShip.remark;
  	ship.condition = newShip.condition;
	ship.packId = newShip.packId;
	ship.rawbatchId = newShip.rawbatchId;
	ship.trader = newShip.trader;
	ship.initialqty = newShip.qty;
	ship.qty = newShip.qty;
	const assetRegistry = await getAssetRegistry('org.network.tracktrace.Packing');
	const exist = await assetRegistry.exists(newShip.packId);
	if(exist) {
		await addAsset('org.network.tracktrace', 'Shipment', ship);
	}
	else {
		throw new Error('Asset BatchId doesnt exist: Failed at Shipment');
	}
}

/*
Flow of the Process:
1. All required users are created
2. Raw materials are added to ledger each batch has its own unique batchId
3. Trader receives package after invoking PaymentRaw, Packing, Shipment contracts
4. Traders shipment becomes batchId for the Factories purpose
5. Factory receives package after invoking PaymentRaw, Packing, Shipment contracts
6. Factory creates products, Products are added to the ledger each batch has its own unique batchId
7. Distributor receives package after invoking PaymentRaw, Packing, Shipment contracts
8. Distributors shipment becomes batchId for the Retailers purpose
*/
