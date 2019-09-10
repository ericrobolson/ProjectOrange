import { Injectable } from '@angular/core';


class Data{
  isActive: boolean;  
}

@Injectable({
  providedIn: 'root'
})
export class EntityComponentService {    
  private nextId: number = 0;
  
  constructor() { 
  }

  private data: Data[];

  public addEntity(): number{
    let id = this.nextId;
    this.nextId++;

    return id;
  }
  
  public deleteEntity(id: number){
    //TODO:
  }

  public addComponent<TComponent>(entityId: number){
    //TODO:
  }

  public getComponent<TComponent>(componentType: string, entityId: number){
    //TODO:
  }

  public deleteComponent<TComponent>(entityId: number){
    //TODO:
  }

  public ToJson(): string {
    //TODO:
    return undefined;
  }
}
