// los campeones son los personajes que van a peliar
class Champions {
    constructor(name, damage, criticalLuck, criticalMultiplier, hp) {
        this.name = name
        this.damage = damage
        this.criticalLuck = criticalLuck
        this.criticalMultiplier = criticalMultiplier
        this.hp = hp
        this.isAlive = true
    }

    attack(target) {
        if(!this.isAlive || !target.isAlive) return false;

        let finalDamage = this.damage
        const isCritical = Math.random() < this.criticalLuck;

        if(isCritical) {
            finalDamage = Math.round(this.damage * this.criticalMultiplier)
        }

        target.recieveDamage(finalDamage)

        return { finalDamage, isCritical } // {finalDamage: 10, isCritical: true}
    }

    recieveDamage(damage){
        if(!this.isAlive) return false

        this.hp -= damage

        if(this.hp <= 0) {
            this.hp = 0
            this.isAlive = false
        }

        console.log(damage, this.hp, this.name)
    }
}
