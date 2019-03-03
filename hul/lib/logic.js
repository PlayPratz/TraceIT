/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Add new raw material by supplier
 * @param {org.network.hul.addRaw} newRaw
 * @transaction
 */
async function addRaw(newRaw) {
	var NS = 'org.network.hul';
	var raw = getFactory().newResource(NS, 'rawmaterial', Math.random().toString(36).substring(3));
  	raw.material = newRaw.material;
  	raw.initialqty = newRaw.qty;
  	raw.qty = newRaw.qty;
  	raw.owner = newRaw.owner;
  
  	var participantRegistry = await getParticipantRegistry('org.network.hul.rawmaterialSupplier');
  	var exists = await participantRegistry.exists(newRaw.owner);
  	if(exists){
    	const rawRegistry = await getAssetRegistry('org.network.hul.rawmaterial');
      	await rawRegistry.add(raw);
    }
  	else {
    	throw new Error('Entered Raw material supplier doesnt exist')
    }
}



/**
 * Add new Ketchup by factory
 * @param {org.network.hul.addketchup} newket
 * @transaction
 */
async function addketchup(newket) {
	var NS = 'org.network.hul';
	var ket = getFactory().newResource(NS, 'ketchup', Math.random().toString(36).substring(3));
 	ket.tomato = newket.tomato
  	const rawRegistry = await getAssetRegistry('org.network.hul.rawmaterial');
  	var exists = await rawRegistry.exists(newket.tomato);
  	if(exists){
    	var tomato = await rawRegistry.get(newket.tomato);
      	if(tomato.qty >= newket.tomatoqty)
      		tomato.qty = tomato.qty - newket.tomatoqty;
      	else
        	throw new Error('Quantity of tomato is less');
    }
  	else
    	throw new Error('Entered tomato Id doesnt exist');
  	ket.tomatoqty = newket.tomatoqty
  	ket.sugar = newket.sugar;
  	var exists = await rawRegistry.exists(newket.sugar);
  	if(exists){
    	var sugar = await rawRegistry.get(newket.sugar);
      	if(sugar.qty >= newket.sugarqty)
      		sugar.qty = sugar.qty - newket.sugarqty;
      	else
        	throw new Error('Quantity of sugar is less');
    }
  	else
    	throw new Error('Entered Sugar Id doesnt exist');
  	ket.sugarqty = newket.sugarqty;
  	ket.salt = newket.salt;
  	var exists = await rawRegistry.exists(newket.salt);
	if(exists){
    	var salt = await rawRegistry.get(newket.salt);
      	if(salt.qty >= newket.saltqty)
      		salt.qty = salt.qty - newket.saltqty;
      	else
        	throw new Error('Quantity of Salt is less');
    }
  	else
    	throw new Error('Entered Salt Id doesnt exist');
  	ket.saltqty = newket.saltqty;
  	ket.initialqty = newket.qty;
  	ket.qty = newket.qty;
  	ket.owner = newket.owner;
  	
  	const ketRegistry = await getAssetRegistry('org.network.hul.ketchup');
  	await ketRegistry.add(ket);
}



/**
 * Add new Coffee by factory
 * @param {org.network.hul.addCoffee} newcof
 * @transaction
 */
async function addCoffee(newcof){
	var NS = 'org.network.hul';
	var cof = getFactory().newResource(NS, 'Bru', Math.random().toString(36).substring(3));
  	cof.coffee = newcof.coffee;
  	cof.coffeeqty = newcof.coffeeqty;
  	cof.chicory = newcof.chicory;
  	cof.chicoryqty = newcof.chicoryqty;
  	cof.initialqty = newcof.qty;
  	cof.qty = newcof.qty;
  	cof.owner = newcof.owner;
  	const assetRegistry = await getAssetRegistry('org.network.hul.Bru');
  	await assetRegistry.add(cof);
}

/**
 * Create container
 * @param {org.network.hul.makeContainer} newcont
 * @transaction
 */
async function makeContainer(newcont){
	var NS = 'org.network.hul';
	var cont = getFactory().newResource(NS, 'container', Math.random().toString(36).substring(3));
  	cont.rfid = newcont.rfid;
  	cont.productId = newcont.productId;
  	cont.batchId = newcont.batchId;
  	cont.initialqty = newcont.qty;
  	cont.qty = newcont.qty;
  	cont.owner = newcont.owner;
  	var participantRegistry = await getParticipantRegistry('org.network.hul.Factory');
  	var exists = await participantRegistry.exists(newcont.owner);
  	if(exists){
    	const rawRegistry = await getAssetRegistry('org.network.hul.container');
      	await rawRegistry.add(cont);
    }
  	else {
    	throw new Error('Entered Factory doesnt exist');
    } 
}



/**
 * create pallet
 * @param {org.network.hul.makePallet} newpal
 * @transaction
 */
async function makePallet(newpal) {
	var NS = 'org.network.hul';
	var pal = getFactory().newResource(NS, 'pallet', Math.random().toString(36).substring(3));
  	pal.rfid = newpal.rfid;
  	var x = []
    x = x.push(pal.containerId)
  	console.log(x.length)
  	if (x === 1)
    	pal.containerId = newpal.containerId
  	else
  		pal.containerId = pal.containerId.push(...newpal.containerId);
  	pal.initialqty = newpal.qty;
  	pal.qty = newpal.qty;
  	pal.owner = newpal.owner
  	var participantRegistry = await getParticipantRegistry('org.network.hul.Factory');
  	var exists = await participantRegistry.exists(newpal.owner);
  	if(exists){
    	const rawRegistry = await getAssetRegistry('org.network.hul.pallet');
      	await rawRegistry.add(pal);
    }
  	else {
    	throw new Error('Entered Factory doesnt exist');
    } 
}



/**
 * Create Shelf
 * @param {org.network.hul.makeShelf} newshelf
 * @transaction
 */
async function makeShelf(newshelf) {
	var NS = 'org.network.hul';
	var shelf = getFactory().newResource(NS, 'shelf', Math.random().toString(36).substring(3));
	shelf.rfid = newshelf.rfid;
  	shelf.containerId = newshelf.containerId;
  	shelf.owner = newshelf.owner;
  	var participantRegistry = await getParticipantRegistry('org.network.hul.Distributor');
  	var exists = await participantRegistry.exists(newshelf.owner);
  	var retailerRegistry = await getParticipantRegistry('org.network.hul.Retailer');
  	var exist = await retailerRegistry.exists(newshelf.owner)
  	if(exists || exist){
    	const shelfRegistry = await getAssetRegistry('org.network.hul.shelf');
      	await shelfRegistry.add(shelf);
    }
  	else {
    	throw new Error('Entered User doesnt exist');
    } 
}



/**
 * Add container to pallet
 * @param {org.network.hul.addtoPallet} newpal
 * @transaction
 */
async function addtoPallet(newpal) {
	var pal = await query('Q1',{IdParam:newpal.rfid})
    console.log(pal[0].containerId)
  	//pal[0].containerId = pal[0].containerId.push(newpal.containerId);
  	var x = [...pal[0].containerId,newpal.containerId]
    pal[0].containerId = x;
  	pal[0].qty += 1;
  	pal[0].initialqty += 1;
  	console.log(pal[0].containerId)
  	const rawRegistry = await getAssetRegistry('org.network.hul.pallet');
    await rawRegistry.update(pal[0]);
}



/**
 * Buy container and add to pallet
 * @param {org.network.hul.buyContainerdc} newcont
 * @transaction
 */
async function buyContainerdc(newcont){
	var cont = await query('Q2',{IdParam:newcont.rfid});
  	console.log(cont[0]);
  	cont[0].distributorcenterId = newcont.dcId
  	var pal = await query('Q1',{IdParam:newcont.rfiddcpallet})
    var x = [...pal[0].containerId,cont[0].containerId]
    pal[0].containerId = x;
  	pal[0].qty += 1;
  	pal[0].initialqty += 1;
  	console.log(cont[0]);
  	const containerRegistry = await getAssetRegistry('org.network.hul.container');
  	await containerRegistry.update(cont[0]);
  	const rawRegistry = await getAssetRegistry('org.network.hul.pallet');
    await rawRegistry.update(pal[0]);   
}



/**
 * Buy a entire pallet from factory
 * @param {org.network.hul.buyPalletdc} newpal
 * @transaction
 */
async function buyPalletdc(newpal){
	var pal = await query('Q1',{IdParam:newpal.rfid});
  	const contRegistry = await getAssetRegistry('org.network.hul.container');
  	console.log(pal[0]);
  	pal[0].distributorcenterId = newpal.dcId;
  	for (var i in pal[0].containerId){
    	var cont = await contRegistry.get(pal[0].containerId[i]);
      	cont.distributorcenterId = newpal.dcId;
      	await contRegistry.update(cont);
    }
  	const rawRegistry = await getAssetRegistry('org.network.hul.pallet');
    await rawRegistry.update(pal[0]);   
}



/**
 * Buy a entire Container from Distribution center
 * @param {org.network.hul.buyContainerdis} newcont
 * @transaction
 */
async function buyContainerdis(newcont) {
	var cont = await query('Q2',{IdParam:newcont.rfid});
  	console.log(cont[0]);
  	cont[0].distributerId = newcont.disId
  	var shelf = await query('Q3',{IdParam:newcont.rfidshelf})
    var x = [...shelf[0].containerId,cont[0].containerId]
    shelf[0].containerId = x;
  	console.log(cont[0]);
  	const containerRegistry = await getAssetRegistry('org.network.hul.container');
  	await containerRegistry.update(cont[0]);
  	const rawRegistry = await getAssetRegistry('org.network.hul.shelf');
    await rawRegistry.update(shelf[0]); 
}



/**
 * Buy a entire Container from Distribution center
 * @param {org.network.hul.buyContainerretail} newcont
 * @transaction
 */
async function buyContainerretail(newcont) {
	var cont = await query('Q2',{IdParam:newcont.rfid});
  	console.log(cont[0]);
  	cont[0].retailer = newcont.retailId
  	var shelf = await query('Q3',{IdParam:newcont.rfidretail})
    var x = [...shelf[0].containerId,cont[0].containerId]
    shelf[0].containerId = x;
  	console.log(cont[0]);
  	const containerRegistry = await getAssetRegistry('org.network.hul.container');
  	await containerRegistry.update(cont[0]);
  	const rawRegistry = await getAssetRegistry('org.network.hul.shelf');
    await rawRegistry.update(shelf[0]); 
}

/**
 * Trace a product given batchId
 * @param {org.network.hul.traceBatch} newtrace
 * @transaction
 */
async function traceBatch(newtrace){
	var cont = await query('Q4',{IdParam: newtrace.batchId});
	const dcRegistry = await getAssetRegistry('')
  	//console.log(cont);
  	var dc = [];
    var dis = [];
    var retailer = [];
  	for (var i in cont){
      	//console.log(cont[i]);
    	dc.push(cont[i].distributorcenterId);
      	dis.push(cont[i].distributerId);
      	retailer.push(cont[i].retailer);
    }
  	var trace = {dc,dis,retailer};
  	console.log(trace);
  	return trace;
}

/**/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Add new raw material by supplier
 * @param {org.network.hul.addRaw} newRaw
 * @transaction
 */
async function addRaw(newRaw) {
	var NS = 'org.network.hul';
	var raw = getFactory().newResource(NS, 'rawmaterial', Math.random().toString(36).substring(3));
  	raw.material = newRaw.material;
  	raw.initialqty = newRaw.qty;
  	raw.qty = newRaw.qty;
  	raw.owner = newRaw.owner;
  
  	var participantRegistry = await getParticipantRegistry('org.network.hul.rawmaterialSupplier');
  	var exists = await participantRegistry.exists(newRaw.owner);
  	if(exists){
    	const rawRegistry = await getAssetRegistry('org.network.hul.rawmaterial');
      	await rawRegistry.add(raw);
    }
  	else {
    	throw new Error('Entered Raw material supplier doesnt exist')
    }
}



/**
 * Add new Ketchup by factory
 * @param {org.network.hul.addketchup} newket
 * @transaction
 */
async function addketchup(newket) {
	var NS = 'org.network.hul';
	var ket = getFactory().newResource(NS, 'ketchup', Math.random().toString(36).substring(3));
 	ket.tomato = newket.tomato
  	const rawRegistry = await getAssetRegistry('org.network.hul.rawmaterial');
  	var exists = await rawRegistry.exists(newket.tomato);
  	if(exists){
    	var tomato = await rawRegistry.get(newket.tomato);
      	if(tomato.qty >= newket.tomatoqty)
      		tomato.qty = tomato.qty - newket.tomatoqty;
      	else
        	throw new Error('Quantity of tomato is less');
    }
  	else
    	throw new Error('Entered tomato Id doesnt exist');
  	ket.tomatoqty = newket.tomatoqty
  	ket.sugar = newket.sugar;
  	var exists = await rawRegistry.exists(newket.sugar);
  	if(exists){
    	var sugar = await rawRegistry.get(newket.sugar);
      	if(sugar.qty >= newket.sugarqty)
      		sugar.qty = sugar.qty - newket.sugarqty;
      	else
        	throw new Error('Quantity of sugar is less');
    }
  	else
    	throw new Error('Entered Sugar Id doesnt exist');
  	ket.sugarqty = newket.sugarqty;
  	ket.salt = newket.salt;
  	var exists = await rawRegistry.exists(newket.salt);
	if(exists){
    	var salt = await rawRegistry.get(newket.salt);
      	if(salt.qty >= newket.saltqty)
      		salt.qty = salt.qty - newket.saltqty;
      	else
        	throw new Error('Quantity of Salt is less');
    }
  	else
    	throw new Error('Entered Salt Id doesnt exist');
  	ket.saltqty = newket.saltqty;
  	ket.initialqty = newket.qty;
  	ket.qty = newket.qty;
  	ket.owner = newket.owner;
  	
  	const ketRegistry = await getAssetRegistry('org.network.hul.ketchup');
  	await ketRegistry.add(ket);
}



/**
 * Add new Coffee by factory
 * @param {org.network.hul.addCoffee} newcof
 * @transaction
 */
async function addCoffee(newcof){
	var NS = 'org.network.hul';
	var cof = getFactory().newResource(NS, 'Bru', Math.random().toString(36).substring(3));
  	cof.coffee = newcof.coffee;
  	cof.coffeeqty = newcof.coffeeqty;
  	cof.chicory = newcof.chicory;
  	cof.chicoryqty = newcof.chicoryqty;
  	cof.initialqty = newcof.qty;
  	cof.qty = newcof.qty;
  	cof.owner = newcof.owner;
  	const assetRegistry = await getAssetRegistry('org.network.hul.Bru');
  	await assetRegistry.add(cof);
}

/**
 * Create container
 * @param {org.network.hul.makeContainer} newcont
 * @transaction
 */
async function makeContainer(newcont){
	var NS = 'org.network.hul';
	var cont = getFactory().newResource(NS, 'container', Math.random().toString(36).substring(3));
  	cont.rfid = newcont.rfid;
  	cont.productId = newcont.productId;
  	cont.batchId = newcont.batchId;
  	cont.initialqty = newcont.qty;
  	cont.qty = newcont.qty;
  	cont.owner = newcont.owner;
  	var participantRegistry = await getParticipantRegistry('org.network.hul.Factory');
  	var exists = await participantRegistry.exists(newcont.owner);
  	if(exists){
    	const rawRegistry = await getAssetRegistry('org.network.hul.container');
      	await rawRegistry.add(cont);
    }
  	else {
    	throw new Error('Entered Factory doesnt exist');
    } 
}



/**
 * create pallet
 * @param {org.network.hul.makePallet} newpal
 * @transaction
 */
async function makePallet(newpal) {
	var NS = 'org.network.hul';
	var pal = getFactory().newResource(NS, 'pallet', Math.random().toString(36).substring(3));
  	pal.rfid = newpal.rfid;
  	var x = []
    x = x.push(pal.containerId)
  	console.log(x.length)
  	if (x === 1)
    	pal.containerId = newpal.containerId
  	else
  		pal.containerId = pal.containerId.push(...newpal.containerId);
  	pal.initialqty = newpal.qty;
  	pal.qty = newpal.qty;
  	pal.owner = newpal.owner
  	var participantRegistry = await getParticipantRegistry('org.network.hul.Factory');
  	var exists = await participantRegistry.exists(newpal.owner);
  	if(exists){
    	const rawRegistry = await getAssetRegistry('org.network.hul.pallet');
      	await rawRegistry.add(pal);
    }
  	else {
    	throw new Error('Entered Factory doesnt exist');
    } 
}



/**
 * Create Shelf
 * @param {org.network.hul.makeShelf} newshelf
 * @transaction
 */
async function makeShelf(newshelf) {
	var NS = 'org.network.hul';
	var shelf = getFactory().newResource(NS, 'shelf', Math.random().toString(36).substring(3));
	shelf.rfid = newshelf.rfid;
  	shelf.containerId = newshelf.containerId;
  	shelf.owner = newshelf.owner;
  	var participantRegistry = await getParticipantRegistry('org.network.hul.Distributor');
  	var exists = await participantRegistry.exists(newshelf.owner);
  	var retailerRegistry = await getParticipantRegistry('org.network.hul.Retailer');
  	var exist = await retailerRegistry.exists(newshelf.owner)
  	if(exists || exist){
    	const shelfRegistry = await getAssetRegistry('org.network.hul.shelf');
      	await shelfRegistry.add(shelf);
    }
  	else {
    	throw new Error('Entered User doesnt exist');
    } 
}



/**
 * Add container to pallet
 * @param {org.network.hul.addtoPallet} newpal
 * @transaction
 */
async function addtoPallet(newpal) {
	var pal = await query('Q1',{IdParam:newpal.rfid})
    console.log(pal[0].containerId)
  	//pal[0].containerId = pal[0].containerId.push(newpal.containerId);
  	var x = [...pal[0].containerId,newpal.containerId]
    pal[0].containerId = x;
  	pal[0].qty += 1;
  	pal[0].initialqty += 1;
  	console.log(pal[0].containerId)
  	const rawRegistry = await getAssetRegistry('org.network.hul.pallet');
    await rawRegistry.update(pal[0]);
}



/**
 * Buy container and add to pallet
 * @param {org.network.hul.buyContainerdc} newcont
 * @transaction
 */
async function buyContainerdc(newcont){
	var cont = await query('Q2',{IdParam:newcont.rfid});
  	console.log(cont[0]);
  	cont[0].distributorcenterId = newcont.dcId
  	var pal = await query('Q1',{IdParam:newcont.rfiddcpallet})
    var x = [...pal[0].containerId,cont[0].containerId]
    pal[0].containerId = x;
  	pal[0].qty += 1;
  	pal[0].initialqty += 1;
  	console.log(cont[0]);
  	const containerRegistry = await getAssetRegistry('org.network.hul.container');
  	await containerRegistry.update(cont[0]);
  	const rawRegistry = await getAssetRegistry('org.network.hul.pallet');
    await rawRegistry.update(pal[0]);   
}



/**
 * Buy a entire pallet from factory
 * @param {org.network.hul.buyPalletdc} newpal
 * @transaction
 */
async function buyPalletdc(newpal){
	var pal = await query('Q1',{IdParam:newpal.rfid});
  	const contRegistry = await getAssetRegistry('org.network.hul.container');
  	console.log(pal[0]);
  	pal[0].distributorcenterId = newpal.dcId;
  	for (var i in pal[0].containerId){
    	var cont = await contRegistry.get(pal[0].containerId[i]);
      	cont.distributorcenterId = newpal.dcId;
      	await contRegistry.update(cont);
    }
  	const rawRegistry = await getAssetRegistry('org.network.hul.pallet');
    await rawRegistry.update(pal[0]);   
}



/**
 * Buy a entire Container from Distribution center
 * @param {org.network.hul.buyContainerdis} newcont
 * @transaction
 */
async function buyContainerdis(newcont) {
	var cont = await query('Q2',{IdParam:newcont.rfid});
  	console.log(cont[0]);
  	cont[0].distributerId = newcont.disId
  	var shelf = await query('Q3',{IdParam:newcont.rfidshelf})
    var x = [...shelf[0].containerId,cont[0].containerId]
    shelf[0].containerId = x;
  	console.log(cont[0]);
  	const containerRegistry = await getAssetRegistry('org.network.hul.container');
  	await containerRegistry.update(cont[0]);
  	const rawRegistry = await getAssetRegistry('org.network.hul.shelf');
    await rawRegistry.update(shelf[0]); 
}



/**
 * Buy a entire Container from Distribution center
 * @param {org.network.hul.buyContainerretail} newcont
 * @transaction
 */
async function buyContainerretail(newcont) {
	var cont = await query('Q2',{IdParam:newcont.rfid});
  	console.log(cont[0]);
  	cont[0].retailer = newcont.retailId
  	var shelf = await query('Q3',{IdParam:newcont.rfidretail})
    var x = [...shelf[0].containerId,cont[0].containerId]
    shelf[0].containerId = x;
  	console.log(cont[0]);
  	const containerRegistry = await getAssetRegistry('org.network.hul.container');
  	await containerRegistry.update(cont[0]);
  	const rawRegistry = await getAssetRegistry('org.network.hul.shelf');
    await rawRegistry.update(shelf[0]); 
}

/**
 * Trace a product given batchId
 * @param {org.network.hul.traceBatch} newtrace
 * @transaction
 */
async function traceBatch(newtrace){
	var cont = await query('Q4',{IdParam: newtrace.batchId});
  	//console.log(cont);
  	var NS = 'org.network.hul';
	var trace = getFactory().newResource(NS, 'trace', Math.random().toString(36).substring(3));
  	var dc = [];
    var dis = [];
    var retailer = [];
  	for (var i in cont){
      	//console.log(cont[i]);
    	dc.push(cont[i].distributorcenterId);
      	dis.push(cont[i].distributerId);
      	retailer.push(cont[i].retailer);
    }
  	trace.dc = dc;
  	trace.dis = dis;
  	trace.retailer = retailer
  	console.log(trace);
  	const asset = await getAseetRegistry('org.network.hul.trace');
  	await asset.add(trace)
}

/**
 * Trace a product given batchId
 * @param {org.network.hul.allbatchId} newtrace
 * @returns {String[]}
 * @transaction
 */
async function allbatchId() {
	const assetRegistry = await getAssetRegistry('org.network.hul.container')
    var all = await assetRegistry.getAll();
  	var batch = [];
  	for (var i in all){
    	batch.push(all[i].batchId);
    }
  	var x = new Set(batch);
    batch = [...x];
  	console.log(batch);
  	return batch;
}



/**
 * Trace a product given batchId
 * @param {org.network.hul.disbatchId} newdis
 * @returns {String[]}
 * @transaction
 */
async function disbatchId(newdis){
	const assetRegistry = await getAssetRegistry('org.network.hul.container')
    var all = await assetRegistry.getAll();
  	var batch = [];
  	for (var i in all){
      	//console.log(all[i].distributerId)
      	//console.log(newdis.disId);
      	if (all[i].distributerId == newdis.disId)
    		batch.push(all[i].productId);
    }
  	var x = new Set(batch);
    batch = [...x];
  	console.log(batch);
  	return batch;
}



/**
 * Trace a product given batchId
 * @param {org.network.hul.dcbatchId} newdc
 * @returns {String[]}
 * @transaction
 */
async function dcbatchId(newdc){
	const assetRegistry = await getAssetRegistry('org.network.hul.container')
    var all = await assetRegistry.getAll();
  	var batch = [];
  	for (var i in all){
      	//console.log(all[i].distributerId)
      	//console.log(newdis.disId);
      	if (all[i].distributorcenterId == newdc.dcId)
    		batch.push(all[i].productId);
    }
  	var x = new Set(batch);
    batch = [...x];
  	console.log(batch);
  	return batch;
}



/**
 * Trace a product given batchId
 * @param {org.network.hul.retailbatchId} newdc
 * @returns {String[]}
 * @transaction
 */
async function retailbatchId(newdc){
	const assetRegistry = await getAssetRegistry('org.network.hul.container')
    var all = await assetRegistry.getAll();
  	var batch = [];
  	for (var i in all){
      	//console.log(all[i].distributerId)
      	//console.log(newdis.disId);
      	if (all[i].retailer == newdc.retailId)
    		batch.push(all[i].productId);
    }
  	var x = new Set(batch);
    batch = [...x];
  	console.log(batch);
  	return batch;
}



/**
 * Trace a product given batchId
 * @param {org.network.hul.maketruck} newtruck
 * @transaction
 */
async function maketruck(newtruck) {
  	var NS = 'org.network.hul'
	var truck = getFactory().newResource(NS, 'truck', Math.random().toString(36).substring(3));
	truck.containerId = newtruck.containerId;
  	truck.owner = newtruck.owner;
  	truck.remark = newtruck.remark;
  	const assetRegistry = await getAssetRegistry('org.network.hul.truck');
  	await assetRegistry.add(truck)
}




/**
 * Trace a product given batchId
 * @param {org.network.hul.updatetrucklocation} newtruck
 * @transaction
 */
async function updatetrucklocation(newtruck){
	const assetRegistry = await getAssetRegistry('org.network.hul.truck');
  	var truck = await assetRegistry.get(newtruck.truckId);
  	truck.lat = newtruck.lat;
  	truck.lon = newtruck.lon;
  	truck.alt = newtruck.lat;
  	await assetRegistry.update(truck);
}
 * Trace a product given batchId
 * @param {org.network.hul.allbatchId} newtrace
 * @returns {String[]}
 * @transaction
 */
async function allbatchId() {
	const assetRegistry = await getAssetRegistry('org.network.hul.container')
    var all = await assetRegistry.getAll();
  	var batch = [];
  	for (var i in all){
    	batch.push(all[i].batchId);
    }
  	var x = new Set(batch);
    batch = [...x];
  	console.log(batch);
  	return batch;
}



/**
 * Trace a product given batchId
 * @param {org.network.hul.disbatchId} newdis
 * @returns {String[]}
 * @transaction
 */
async function disbatchId(newdis){
	const assetRegistry = await getAssetRegistry('org.network.hul.container')
    var all = await assetRegistry.getAll();
  	var batch = [];
  	for (var i in all){
      	//console.log(all[i].distributerId)
      	//console.log(newdis.disId);
      	if (all[i].distributerId == newdis.disId)
    		batch.push(all[i].productId);
    }
  	var x = new Set(batch);
    batch = [...x];
  	console.log(batch);
  	return batch;
}



/**
 * Trace a product given batchId
 * @param {org.network.hul.dcbatchId} newdc
 * @returns {String[]}
 * @transaction
 */
async function dcbatchId(newdc){
	const assetRegistry = await getAssetRegistry('org.network.hul.container')
    var all = await assetRegistry.getAll();
  	var batch = [];
  	for (var i in all){
      	//console.log(all[i].distributerId)
      	//console.log(newdis.disId);
      	if (all[i].distributorcenterId == newdc.dcId)
    		batch.push(all[i].productId);
    }
  	var x = new Set(batch);
    batch = [...x];
  	console.log(batch);
  	return batch;
}



/**
 * Trace a product given batchId
 * @param {org.network.hul.retailbatchId} newdc
 * @returns {String[]}
 * @transaction
 */
async function retailbatchId(newdc){
	const assetRegistry = await getAssetRegistry('org.network.hul.container')
    var all = await assetRegistry.getAll();
  	var batch = [];
  	for (var i in all){
      	//console.log(all[i].distributerId)
      	//console.log(newdis.disId);
      	if (all[i].retailer == newdc.retailId)
    		batch.push(all[i].productId);
    }
  	var x = new Set(batch);
    batch = [...x];
  	console.log(batch);
  	return batch;
}



/**
 * Trace a product given batchId
 * @param {org.network.hul.maketruck} newtruck
 * @transaction
 */
async function maketruck(newtruck) {
  	var NS = 'org.network.hul'
	var truck = getFactory().newResource(NS, 'truck', Math.random().toString(36).substring(3));
	truck.containerId = newtruck.containerId;
  	truck.owner = newtruck.owner;
  	truck.remark = newtruck.remark;
  	const assetRegistry = await getAssetRegistry('org.network.hul.truck');
  	await assetRegistry.add(truck)
}




/**
 * Trace a product given batchId
 * @param {org.network.hul.updatetrucklocation} newtruck
 * @transaction
 */
async function updatetrucklocation(newtruck){
	const assetRegistry = await getAssetRegistry('org.network.hul.truck');
  	var truck = await assetRegistry.get(newtruck.truckId);
  	truck.lat = newtruck.lat;
  	truck.lon = newtruck.lon;
  	truck.alt = newtruck.lat;
  	await assetRegistry.update(truck);
}