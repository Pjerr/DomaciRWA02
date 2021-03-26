export class Takmicar{
    constructor(private ime:string,private brojDresa:number,private vreme:number)
    {
        this.ime=ime;
        this.brojDresa=brojDresa;
        this.vreme=0;
    }

    getIme(){
        return this.ime;
    }

    getBrojDresa(){
        return this.brojDresa;
    }

    getVreme()
    {
        return this.vreme;
    }

    setVreme(vreme:number)
    {
        this.vreme=vreme;
    }

    trci(){
        return new Promise<Takmicar>((resolve, reject)=>{
            setTimeout(()=>{
                this.setVreme(Math.random()*100 + 20);
                resolve(this);
            },3000);
        });
    }
}