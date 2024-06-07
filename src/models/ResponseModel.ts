export class ResponseModel {
    success: boolean;
    messaje: string;
    status: number;
    data: any;

    constructor(success: boolean, message: string, status: number, data: any){
        this.success = success;
        this.messaje = message;
        this.status = status;
        this.data = data;
    }

    static success(data: any, message: string = 'oka'){
        return new ResponseModel(true,'Funciono correctamente',200,null);
    }

    static error(message: string){
        
    }   

}