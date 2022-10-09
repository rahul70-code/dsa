class SnapshotArray {
    constructor() {
        this.array = [];
        this.snap_id = -1;
        this.snaps = new Map()
    }

    set(idx, val) {
        this.array[idx] = val;
    }

    snap() {
        this.snap_id++;
        this.snaps.set(this.snap_id, [...this.array])
        return this.snap_id
    }

    get(idx, snap_id) {
        let arrAtSnapID = this.snaps.get(snap_id);
        return arrAtSnapID[idx] === undefined ? null : arrAtSnapID[idx]
    }
}

const obj = new SnapshotArray(3)
obj.set(1, 3)
obj.snap()
obj.snap()
obj.snap()
obj.set(1, 4)
obj.snap()

let result = obj.get(1,2)
console.log(result)

