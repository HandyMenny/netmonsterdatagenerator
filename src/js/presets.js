export const defaultPreset = {
  "lte": {
    "enb": [[0, 1_048_575]],
    "cid": [[0, 255]],
    "pci": [[0, 503]],
    "tac": [[0, 65_535]],
    "earfcnMax": 262_143,
    "earfcnMapping": []
  },
  "latlngbox": {
    lng: [8.620971, 12.911132],
    lat: [43.745277, 46.211491]
  }
}

export const tim = {
  "plmn": {"mcc": 222, "mnc": 1},
  "lte": {
    "enb": [[200_000, 209_999], [300_000, 329_999],
      [400_000, 409_999], [500_000, 509_999],
      [700_000, 709_999], [800_000, 809_999]],
    "cid": [[21, 26], [31, 36], [41, 46], [61, 66], [71, 76]],
    "pci": [[0, 503]],
    "tac": [[0, 65_535]],
    "earfcnMax": 262_143,
    "earfcnMapping": [3175, 300, 1350, 6300, 9360]
  },
  "latlngbox": {
    lng: [8.620971, 12.911132],
    lat: [43.745277, 46.211491]
  }
}

export const w3 = {
  "plmn": {"mcc": 222, "mnc": 88},
  "lte": {
    "enb": [[100_000, 100_999], [200_000, 200_999], [300_000, 300_999],
      [400_000, 400_999]],
    "cid": [[0, 5], [6, 11], [12, 17], [18, 23], [24, 29]],
    "pci": [[0, 503]],
    "tac": [[0, 65_535]],
    "earfcnMax": 262_143,
    "earfcnMapping": [1650, 6200, 3350, 125, 37900]
  },
  "latlngbox": {
    lng: [8.620971, 12.911132],
    lat: [43.745277, 46.211491]
  }
}

export const iliad = {
  "plmn": {"mcc": 222, "mnc": 50},
  "lte": {
    "enb": [[1_000_0001, 1_048_575]],
    "cid": [[21, 26], [61, 66], [71, 76], [81, 86]],
    "pci": [[0, 503]],
    "tac": [[0, 65_535]],
    "earfcnMax": 262_143,
    "earfcnMapping": [400, 2900, 1500, 9260]
  },
  "latlngbox": {
    lng: [8.620971, 12.911132],
    lat: [43.745277, 46.211491]
  }
}

export const vf = {
  "plmn": {"mcc": 222, "mnc": 10},
  "lte": {
    "enb": [[10_000, 19_999], [20_000, 29_999], [30_000, 39_999],
      [40_000, 49_999], [50_000, 59_999], [60_000, 69_999],
      [70_000, 79_999], [80_000, 89_999]],
    "cid": [[11, 14], [31, 34], [41, 44], [51, 54], [61, 64]],
    "pci": [[0, 503]],
    "tac": [[0, 65_535]],
    "earfcnMax": 262_143,
    "earfcnMapping": [6400, 1850, 525, 3025, 9460]
  },
  "latlngbox": {
    lng: [8.620971, 12.911132],
    lat: [43.745277, 46.211491]
  }
}