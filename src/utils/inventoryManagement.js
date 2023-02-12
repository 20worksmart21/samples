class InventoryManagement {
    constructor(){
        this.inventeryMap = new Set();
    }
    add(inventory){
        if(this.inventeryMap.size >= 5) {
            const array = Array.from(this.inventeryMap);
            array.shift();
            this.inventeryMap= new Set(array);
        }
        if(!this.inventeryMap.has(inventory)) {
            this.inventeryMap.add(inventory)
        }
    }
    remove(inventory){
        this.inventeryMap.delete(inventory)
    }
    getList(){
        for(let item of this.inventeryMap){
            console.log("item: ", item)
        }
    }
}

export default InventoryManagement