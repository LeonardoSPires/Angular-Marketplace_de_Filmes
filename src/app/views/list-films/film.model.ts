export class Film {
  id?:number;
  name:string;
  category:string;
  imgLink: string;
  price: number;
  synopsis: string;

  constructor(id:number,
    name:string, category:string, imgLink: string, price: number, synopsis: string) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.imgLink = imgLink;
      this.price = price;
      this.synopsis = synopsis;
    }
}
