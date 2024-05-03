// function getStudentsNames()
// {
//     return ["Tola", "Jojo", "Bola"]
// }

// function totatNumStudents()
// {
//     return getStudentsNames().length
// }

class HatchDevClass{
    private pupils: string[] = []
    constructor(student : string[]){
        this.pupils = student;
    }

    getStudentsNames()
    {
        return this.pupils
    }

    private totatNumStudents()
    {
        return this.pupils.length;
    }
}

const HC = new HatchDevClass(["Tola", "Jojo", "Bola"])
console.log(HC)
console.log(HC['totatNumStudents']())

const chl = ["Arsenal", "Man-city", "Real Madrid", "Bayern"]
const disPep : string[] = []

for(let i = 0; i < chl.length;i++)
{
    if (chl[i] == "Arsenal" || chl[i] == "Man-city")
    {
        disPep.push(chl[i])
    }
}
console.log(disPep)

chl.filter((club : string)=>{
    if (club == "Arsenal" || club == "Man-city"){disPep.push(club) };
}, chl)

class Car{
    constructor(brand: string){
        this.brand = brand;
    }
    brand:string
    public move(){

    }
}

class Korope extends Car{
    execute(){}
}

const Mustang = new Car("Explorer")
const Benz = new Car("AMG")

console.log(Mustang, Benz)