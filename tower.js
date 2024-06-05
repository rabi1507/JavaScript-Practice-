function towerzof(disks, from, toRod, usingRod){
    if(disks === 1) {
         console.log(`move dist ${disks} from ${from} toRod ${toRod}  usingRod ${usingRod}`);
         return
    }
    towerzof(disks-1, from, usingRod, toRod )
    console.log(`move dist ${disks-1} from ${from} toRod ${usingRod}  usingRod ${toRod}`);
    towerzof(disks- 1, usingRod, toRod, from )
    console.log(`move dist ${disks-1} from ${usingRod} toRod ${toRod}  usingRod ${from}`);
}

towerzof(3, "A", "B", "C")