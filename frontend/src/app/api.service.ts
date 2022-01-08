import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, gql, QueryRef } from 'apollo-angular';

const GET_POST = gql`
  query Query {
    getAllProduct {
      name
      value
      id
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apollo: ApolloBase;

  constructor(private apolloProvider: Apollo) {
    this.apollo = this.apolloProvider;
  }

  getData(): QueryRef<any> {
    return this.apollo.watchQuery<any>({ query: GET_POST });
  }
}
