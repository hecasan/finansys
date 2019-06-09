import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService{
   createDb(){
      const categories: Category[] = [
         { id: 1, name: 'Moradia', decription: 'Pagamento de Contas da casa'},
         { id: 2, name: 'Saúde', decription: 'Plano de Saúde e Remédios'},
         { id: 3, name: 'Lazer', decription: 'Cinema, praia, parques, etc'},
         { id: 4, name: 'Salário', decription: 'Recebimento de Salários'},
         { id: 5, name: 'Freelas', decription: 'Trabalhos como freelancer'},
      ];
      return { categories }
   }
}