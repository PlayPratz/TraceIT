function traceRaw(batchId){
	return query('Q1',{IdParam:batchId})
  			.then((raw)=>{
    			return raw
    })
}

async function addAsset(NS,asset,value){
	const assetRegistry = await getAssetRegistry(`${NS}.${asset}`);
    await assetRegistry.add(value);
}

function getAsset(NS,asset,value){
	return getAssetRegistry(`${NS}.${asset}`)
  			.then(function (assetRegistry) {
   				 return assetRegistry.get(value);
  				 })
}

async function updateAsset(NS,asset,value){
    const assetRegistry = await getAssetRegistry(`${NS}.${asset}`);
  	await assetResgistry.update(value);
}
/**
 * Adding Raw material transaction
 * @param {org.network.tracktrace.addRaw} newMaterial
 * @transaction
 */

async function addRaw(newMaterial) {

    const participantRegistry = await getParticipantRegistry('org.network.tracktrace.Grower');
    var NS = 'org.network.tracktrace';
    var material = getFactory().newResource(NS, 'Raw_material', Math.random().toString(36).substring(3));
  	console.log(material);
    material.materialName = newMaterial.materialName
    material.qty = newMaterial.qty
    material.batchState = newMaterial.batchState
    material.owner = newMaterial.grower

    const assetRegistry = await getAssetRegistry('org.network.tracktrace.Raw_material');
    await assetRegistry.add(material);
    await participantRegistry.update(newMaterial.grower);
  }

/**
 * Adding Raw material transaction
 * @param {org.network.tracktrace.paymentRaw} newPay
 * @transaction
 */

async function paymentRaw(newPay) {
  	
  		const participantRegistry = await getParticipantRegistry('org.network.tracktrace.Trader');	
		var NS = 'org.network.tracktrace';
    	var Pay = getFactory().newResource(NS, 'Payment', Math.random().toString(36).substring(3));
      	Pay.organizationName = newPay.organizationName
      	Pay.amount = newPay.amount
      	Pay.qty = newPay.qty
      	Pay.rawbatchId = newPay.rawbatchId
      	Pay.trader = newPay.trader
    	console.log(Pay)
  		const AssetRegistry = await getAssetRegistry('org.network.tracktrace.Payment');
      	await AssetRegistry.add(Pay);
      	await participantRegistry.update(newPay.trader);
}

/**
 * Adding Raw material transaction
 * @param {org.network.tracktrace.packing} newPack
 * @transaction
 */

async function packing(newPack) {
  	
		var NS = 'org.network.tracktrace';
    	var pack = getFactory().newResource(NS, 'Packing', Math.random().toString(36).substring(3));
      	pack.payId = newPack.payId
  		pack.rawbatchId = newPack.rawbatchId
    	await addAsset('org.network.tracktrace','Packing',pack);
  		
}

/**
 * Adding Raw material transaction
 * @param {org.network.tracktrace.shipment} newShip
 * @transaction
 */

async function shipment(newShip){
	var NS = 'org.network.tracktrace';
    var ship = getFactory().newResource(NS, 'Shipment', Math.random().toString(36).substring(3));
  	ship.packId = newShip.packId
  	ship.rawbatchId = newShip.rawbatchId
  	const assetRegistry = await getAssetRegistry('org.network.tracktrace.Raw_material');
  	const raw = await assetRegistry.get(newShip.rawbatchId)
    raw.trader = newShip.trader
  	const participantRegistry = await getParticipantRegistry('org.network.tracktrace.Trader');
    await participantRegistry.update(newShip.trader);
    await assetRegistry.update(raw)
  	await addAsset('org.network.tracktrace','Shipment',ship)
  	
  	console.log(traceRaw(newShip.rawbatchId))
}