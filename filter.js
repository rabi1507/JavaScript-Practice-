
    data= [
        {
            "_id": "66322ef60ebbcbc39dd9261a",
            "name": "APMC",
            "activeBranches": [
                {
                    "name": "Dharwad",
                    "isActive": false,
                    "warehouse": {
                        "21": {
                            "name": "Hill Man Cold Storage Gamangatti",
                            "sub": {
                                "211": {
                                    "name": "MWB b1 wh1 subwh1"
                                },
                                "212": {
                                    "name": "MWB b1 wh1 subwh2"
                                }
                            }
                        },
                        "22": {
                            "name": "Rice Godown",
                            "sub": {
                                "221": {
                                    "name": "MWB b1 wh2 subwh1"
                                },
                                "222": {
                                    "name": "MWB b1 wh2 subwh2"
                                }
                            }
                        }
                    }
                }
            ]
        }
    ]

    // data.forEach(entry => {
    //     entry.activeBranches.forEach(branch => {
    //         delete branch.warehouse;
    //     });
    // });
    
    // console.log(data);
    const replacer = (key, value) => {
        if (key === 'warehouse') {
            return undefined; 
        }
        return value;
    };
    const modifiedDataString = JSON.stringify(data, replacer);
    console.log(modifiedDataString);
    