export class pagina{
    lenguaje:number=0;
    titulo:string="";
    descripcionCorta:string="";
    descripcionLarga:string="";
    tecnologias: number[] = [];
    tipo:number;
    urlImg1:string="";
    urlImg2:string="";
    urlImg3:string="";
    url:string="";
   
    constructor(lenguaje:number, titulo:string, descripcionCorta:string, descripcionLarga:string, tecnologias: number[], tipo:number, urlImg1:string, urlImg2:string, urlImg3:string, url:string){
        this.lenguaje=lenguaje;
        this.titulo=titulo;
        this.descripcionCorta=descripcionCorta;
        this.descripcionLarga=descripcionLarga;
        this.tecnologias=tecnologias;
        this.tipo=tipo;
        this.urlImg1=urlImg1;
        this.urlImg2=urlImg2;
        this.urlImg3=urlImg3;
        this.url=url;
    }
}