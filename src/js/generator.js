import {Cell} from "./Cell";
import randomItem from "random-item";
import randomInteger from "random-int";
import randomFloat from "random-float";
export function genLteCell(valid, pattern, defaultPreset) {
  if(valid) {
    const enbRange = randomItem(pattern.lte.enb);
    const tacRange = randomItem(pattern.lte.tac);
    const pciRange = randomItem(pattern.lte.pci);
    const latRange = pattern.latlngbox.lat
    const lngRange = pattern.latlngbox.lng

    const enb = randomInteger(enbRange[0], enbRange[1]);
    const tac = randomInteger(tacRange[0], tacRange[1]);
    const pci = randomInteger(pciRange[0], pciRange[1]);
    const lat = randomFloat(latRange[0], latRange[1])
    const lng = randomFloat(lngRange[0], lngRange[1])

    let earfcn
    let cid
    if (pattern.lte.earfcnMapping.length > 0) {
      earfcn = randomItem(pattern.lte.earfcnMapping);
      const cidIndex = pattern.lte.earfcnMapping.indexOf(earfcn)
      const cidRange = pattern.lte.cid[cidIndex]
      cid = randomInteger(cidRange[0], cidRange[1])
    } else {
      earfcn = randomInteger(0, pattern.lte.earfcnMax);
    }

    const network = pattern.plmn
    const tech = "LTE"
    const date = Date.now() - randomInteger(0, 3 * 30 * 86400 * 1000)
    const caught = new Date(date).toISOString()
    const location = `Posizione XYZ`

    return new Cell(tac, caught, (enb * 256 + cid), pci, earfcn, lat, location, lng, network, tech)
  }
}