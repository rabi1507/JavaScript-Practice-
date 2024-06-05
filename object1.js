// const anObj = { 100: 'a', 2: 'b', 7: 'c' };

// for(let [keys, value] of Object.entries(anObj)) console.log(keys, value);
let branch1 = { 
    "1":{ name: "b1",
        warehouse:{
            "1":{
                warehouseName: "warehouse1",
                subWarehouse:{
                    "1":
                        "subWarehouseName"
                }
            }
        }
    }
}
// console.log(branch1['1'].warehouse['1'].subWarehouse['1']);
// console.log(branch1['1'].warehouse['1'].warehouseName);
// We can not access anything by using dot(.) operation

let branch = {
    "1":{
        name:"Hubli",
        warehouse:{
            "11":{
                name:"Apmc Cold Storage",
                sub:{
                    "111":{
                        name:"MWB b1 wh1 subwh1"
                    },
                    "112":{
                        name:"MWB b1 wh1 subwh2"
                    }
                }
            },
            "12":{
                name:"Apmc Cold Storage",
                sub:{
                    "111":{
                        name:"MWB b1 wh1 subwh1"
                    },
                    "112":{
                        name:"MWB b1 wh1 subwh2"
                    }
                }
            },
            "13":{
                name:"Apmc Cold Storage",
                sub:{
                    "111":{
                        name:"MWB b1 wh1 subwh1"
                    },
                    "112":{
                        name:"MWB b1 wh1 subwh2"
                    }
                }
            }
        }
    }
}
const replacer = (key, value) => {
    if (key === 'name') {
        return undefined; 
    }
    return value;
};
const modifiedDataString = JSON.parse(JSON.stringify(res.data, replacer));