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
  
    const AssetRegistry = await getAssetRegistry('org.network.tracktrace.Packing');
      await AssetRegistry.add(pack);
}