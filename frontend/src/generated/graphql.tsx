import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Autogenerated return type of CreateGroup */
export type CreateGroupPayload = {
  __typename?: 'CreateGroupPayload';
  errors?: Maybe<Array<Scalars['String']>>;
  group?: Maybe<Group>;
};

/** Autogenerated return type of CreateIssueBoard */
export type CreateIssueBoardPayload = {
  __typename?: 'CreateIssueBoardPayload';
  errors?: Maybe<Array<Scalars['String']>>;
  issueBoard?: Maybe<IssueBoard>;
};

/** Autogenerated return type of CreateIssueLabel */
export type CreateIssueLabelPayload = {
  __typename?: 'CreateIssueLabelPayload';
  errors?: Maybe<Array<Scalars['String']>>;
  issueLabel?: Maybe<IssueLabel>;
};

/** Autogenerated return type of CreateIssue */
export type CreateIssuePayload = {
  __typename?: 'CreateIssuePayload';
  errors?: Maybe<Array<Scalars['String']>>;
  issue?: Maybe<Issue>;
};

/** Autogenerated return type of CreateUser */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  accessToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
  user?: Maybe<User>;
};

/** Autogenerated return type of DeleteGroup */
export type DeleteGroupPayload = {
  __typename?: 'DeleteGroupPayload';
  success: Scalars['Boolean'];
};

/** Autogenerated return type of DeleteIssueBoard */
export type DeleteIssueBoardPayload = {
  __typename?: 'DeleteIssueBoardPayload';
  success: Scalars['Boolean'];
};

/** Autogenerated return type of DeleteIssueLabel */
export type DeleteIssueLabelPayload = {
  __typename?: 'DeleteIssueLabelPayload';
  success: Scalars['Boolean'];
};

/** Autogenerated return type of DeleteIssue */
export type DeleteIssuePayload = {
  __typename?: 'DeleteIssuePayload';
  success: Scalars['Boolean'];
};

/** Autogenerated return type of DeleteUser */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  success: Scalars['Boolean'];
};

/** Autogenerated return type of EditGroup */
export type EditGroupPayload = {
  __typename?: 'EditGroupPayload';
  errors?: Maybe<Array<Scalars['String']>>;
  group?: Maybe<Group>;
};

/** Autogenerated return type of EditIssueBoard */
export type EditIssueBoardPayload = {
  __typename?: 'EditIssueBoardPayload';
  errors?: Maybe<Array<Scalars['String']>>;
  issueBoard?: Maybe<IssueBoard>;
};

/** Autogenerated return type of EditIssueLabel */
export type EditIssueLabelPayload = {
  __typename?: 'EditIssueLabelPayload';
  errors?: Maybe<Array<Scalars['String']>>;
  issueLabel?: Maybe<IssueLabel>;
};

/** Autogenerated return type of EditIssue */
export type EditIssuePayload = {
  __typename?: 'EditIssuePayload';
  errors?: Maybe<Array<Scalars['String']>>;
  issue?: Maybe<Issue>;
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID'];
  issueBoards: Array<IssueBoard>;
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  users: Array<User>;
};

/** Input object for Group */
export type GroupInputType = {
  /** Group name */
  name: Scalars['String'];
};

export type Issue = {
  __typename?: 'Issue';
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  issueId: Scalars['ID'];
  issueLabel: IssueLabel;
  title: Scalars['String'];
};

export type IssueBoard = {
  __typename?: 'IssueBoard';
  group?: Maybe<Group>;
  id: Scalars['ID'];
  issueLabels: Array<IssueLabel>;
  name: Scalars['String'];
  user?: Maybe<User>;
};

/** Input object for IssueBoard */
export type IssueBoardInputType = {
  /** IssueBoard name */
  name: Scalars['String'];
  /** Group ID */
  groupId?: Maybe<Scalars['ID']>;
  /** User ID */
  userId?: Maybe<Scalars['ID']>;
};

/** Input object for Issue */
export type IssueInputType = {
  /** Title */
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  issueLabelId?: Maybe<Scalars['ID']>;
};

export type IssueLabel = {
  __typename?: 'IssueLabel';
  color?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  issueBoard: IssueBoard;
  issues: Array<Issue>;
  name: Scalars['String'];
};

/** Input object for IssueLabel */
export type IssueLabelInputLabel = {
  /** IssueLabel name */
  name: Scalars['String'];
  /** Color of IssueLabel */
  color?: Maybe<Scalars['String']>;
  /** Id of issue_board */
  issueBoardId?: Maybe<Scalars['ID']>;
};

/** Autogenerated return type of JoinGroup */
export type JoinGroupPayload = {
  __typename?: 'JoinGroupPayload';
  errors?: Maybe<Array<Scalars['String']>>;
};

/** Autogenerated return type of Login */
export type LoginPayload = {
  __typename?: 'LoginPayload';
  accessToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGroup?: Maybe<CreateGroupPayload>;
  createIssue?: Maybe<CreateIssuePayload>;
  createIssueBoard?: Maybe<CreateIssueBoardPayload>;
  createIssueLabel?: Maybe<CreateIssueLabelPayload>;
  createUser?: Maybe<CreateUserPayload>;
  deleteGroup?: Maybe<DeleteGroupPayload>;
  deleteIssue?: Maybe<DeleteIssuePayload>;
  deleteIssueBoard?: Maybe<DeleteIssueBoardPayload>;
  deleteIssueLabel?: Maybe<DeleteIssueLabelPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  editGroup?: Maybe<EditGroupPayload>;
  editIssue?: Maybe<EditIssuePayload>;
  editIssueBoard?: Maybe<EditIssueBoardPayload>;
  editIssueLabel?: Maybe<EditIssueLabelPayload>;
  joinGroup?: Maybe<JoinGroupPayload>;
  login?: Maybe<LoginPayload>;
};


export type MutationCreateGroupArgs = {
  attributes: GroupInputType;
};


export type MutationCreateIssueArgs = {
  attributes: IssueInputType;
};


export type MutationCreateIssueBoardArgs = {
  attributes: IssueBoardInputType;
};


export type MutationCreateIssueLabelArgs = {
  attributes: IssueLabelInputLabel;
};


export type MutationCreateUserArgs = {
  attributes: UserInputType;
};


export type MutationDeleteGroupArgs = {
  groupId: Scalars['ID'];
};


export type MutationDeleteIssueArgs = {
  issueId: Scalars['ID'];
};


export type MutationDeleteIssueBoardArgs = {
  issueBoardId: Scalars['ID'];
};


export type MutationDeleteIssueLabelArgs = {
  issueLabelId: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID'];
};


export type MutationEditGroupArgs = {
  attributes: GroupInputType;
  groupId: Scalars['ID'];
};


export type MutationEditIssueArgs = {
  attributes: IssueInputType;
  issueId: Scalars['ID'];
};


export type MutationEditIssueBoardArgs = {
  attributes: IssueBoardInputType;
  issueBoardId: Scalars['ID'];
};


export type MutationEditIssueLabelArgs = {
  attributes: IssueLabelInputLabel;
  issueLabelId: Scalars['ID'];
};


export type MutationJoinGroupArgs = {
  email: Scalars['String'];
  groupId: Scalars['ID'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Returns currently logged in user */
  currentUser?: Maybe<User>;
  /** Returns a single Group that a user is a part of */
  group: Group;
  hello: Scalars['String'];
  /** Returns a single Issue from a IssueBoard that a user i a part of */
  issue: Issue;
  /** Returns a single IssueBoardType that the user is a part of */
  issueBoard: IssueBoard;
  /** Login user return tokens */
  login: Scalars['String'];
};


export type QueryGroupArgs = {
  groupId: Scalars['ID'];
};


export type QueryIssueArgs = {
  issueId: Scalars['ID'];
};


export type QueryIssueBoardArgs = {
  issueBoardId: Scalars['ID'];
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  groups: Array<Group>;
  id: Scalars['ID'];
  issueBoards: Array<IssueBoard>;
  name: Scalars['String'];
};

/** Attributes for creating a user */
export type UserInputType = {
  /** Name of the user */
  name: Scalars['String'];
  /** Email of user */
  email: Scalars['String'];
  /** Password */
  password: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  attributes: UserInputType;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'CreateUserPayload' }
    & Pick<CreateUserPayload, 'accessToken' | 'errors'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email'>
    )> }
  )> }
);

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoginPayload' }
    & Pick<LoginPayload, 'accessToken' | 'errors'>
  )> }
);


export const CreateUserDocument = gql`
    mutation createUser($attributes: UserInputType!) {
  createUser(attributes: $attributes) {
    user {
      id
      name
      email
    }
    accessToken
    errors
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      attributes: // value for 'attributes'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    errors
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;