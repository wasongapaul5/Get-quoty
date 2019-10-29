export class Quote {
    public showDescription:boolean;
    constructor(public id:number,public name:string, public description:string, public author:string,public upvotes:number,public addNewQuote:string, public downvotes:number, public completeDate:Date){
        this.showDescription=false;
    }
}
