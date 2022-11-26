export class AgoraItemModel {
    constructor(name, price, description, category, inventory) {
        this.name = name
        this.price = price
        this.description = description
        this.category = category
        this.inventory = inventory
    }

    toJson() {
        return JSON.parse(JSON.stringify(this))
    }
}
