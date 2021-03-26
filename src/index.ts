import {Takmicar} from "./takmicar"


const t1:Takmicar=new Takmicar("Pera",1,0);
const t2:Takmicar=new Takmicar("Mika",2,0);
const t3:Takmicar=new Takmicar("Zika",3,0);
const t4:Takmicar=new Takmicar("Janko",4,0);
const t5:Takmicar=new Takmicar("Paja",5,0);

Promise.all([
    t1.trci(),
    t2.trci(),
    t3.trci(),
    t4.trci(),
    t5.trci(),
]).then(array=>{
    array.sort((a:Takmicar,b:Takmicar)=> a.getVreme() > b.getVreme() ? 1 : 0);
    console.log(array);
    console.log(`Pobednik je ${array[0].getIme()} sa brojem dresa ${array[0].getBrojDresa()}. Njegovo vreme je bilo ${array[0].getVreme()} `);
})
